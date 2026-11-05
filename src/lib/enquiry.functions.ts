import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { enquirySchema, normalizeIndianMobile } from "./enquiry-schema";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
      console.error("Enquiry: backend configuration missing");
      return { ok: false as const, error: "We couldn't send your enquiry right now. Please try WhatsApp or call us." };
    }

    const client = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const mobile = normalizeIndianMobile(data.mobile)!;
    const { error } = await client.from("admission_enquiries").insert({
      student_name: data.studentName,
      parent_name: data.parentName || null,
      mobile,
      course: data.course,
      current_class: data.currentClass,
      message: data.message || null,
    });

    if (error) {
      console.error("Enquiry insert failed:", error.message);
      return { ok: false as const, error: "We couldn't send your enquiry right now. Please try again, or reach us on WhatsApp." };
    }
    return { ok: true as const };
  });
