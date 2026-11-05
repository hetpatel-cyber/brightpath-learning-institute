import { z } from "zod";

/** Indian mobile: optional +91 / 91 / 0 prefix, then 10 digits starting 6–9. */
export function normalizeIndianMobile(input: string): string | null {
  const digits = input.replace(/[\s\-()]/g, "").replace(/^\+/, "");
  const m = digits.match(/^(?:91|0)?([6-9]\d{9})$/);
  return m ? `+91${m[1]}` : null;
}

export const enquirySchema = z.object({
  studentName: z
    .string()
    .trim()
    .min(2, "Please enter the student's name")
    .max(100, "Name must be under 100 characters"),
  parentName: z.string().trim().max(100, "Name must be under 100 characters").optional().or(z.literal("")),
  mobile: z
    .string()
    .trim()
    .min(1, "Please enter a mobile number")
    .refine((v) => normalizeIndianMobile(v) !== null, "Enter a valid 10-digit mobile number"),
  course: z.string().trim().min(1, "Please choose a course").max(100),
  currentClass: z.string().trim().min(1, "Please enter the current class").max(60, "Keep this under 60 characters"),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
