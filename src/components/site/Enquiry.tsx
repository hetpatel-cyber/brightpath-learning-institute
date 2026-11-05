import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircle, CheckCircle2, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, institute } from "@/content/institute";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const fieldBase =
  "mt-2 block w-full rounded-sm border border-input bg-paper px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-navy focus:outline-none focus-visible:outline-2 focus-visible:outline-gold aria-[invalid=true]:border-destructive";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-muted-foreground">(optional)</span>
        ) : (
          <span aria-hidden="true" className="ml-0.5 text-gold">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function Enquiry() {
  const submit = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const inFlight = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { studentName: "", parentName: "", mobile: "", course: "", currentClass: "", message: "" },
  });

  useEffect(() => {
    const onCourse = (e: Event) => {
      const name = (e as CustomEvent<string>).detail;
      setValue("course", name, { shouldValidate: false });
      setStatus("idle");
    };
    window.addEventListener("enquire-course", onCourse);
    return () => window.removeEventListener("enquire-course", onCourse);
  }, [setValue]);

  const onSubmit = async (values: EnquiryInput) => {
    if (inFlight.current) return; // guard against double submits
    inFlight.current = true;
    setServerError(null);
    try {
      const res = await submit({ data: values });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setServerError(res.error);
      }
    } catch {
      setStatus("error");
      setServerError("We couldn't send your enquiry. Please check your connection and try again, or reach us on WhatsApp.");
    } finally {
      inFlight.current = false;
    }
  };

  const err = (k: keyof EnquiryInput) => errors[k]?.message;
  const aria = (k: keyof EnquiryInput) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="section-y bg-paper">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Admission enquiry</p>
            <h2 id="enquiry-title" className="mt-4 text-[2rem] leading-[1.1] font-extrabold text-navy sm:text-[2.6rem] lg:text-5xl">
              Your Journey Towards Better Learning Starts Here
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have questions about our courses or admissions? Get in touch with our team and receive the information
              you need.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10 space-y-4">
            <p className="eyebrow-muted">Prefer to talk directly?</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> WhatsApp us
                </a>
              </Button>
              <Button asChild variant="outlineNavy" size="xl">
                <a href={`tel:${institute.phone.replace(/\s/g, "")}`}>
                  <Phone /> {institute.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="lg:col-span-7">
          <div className="border border-border bg-background p-6 shadow-soft sm:p-10">
            {status === "success" ? (
              <div role="status" aria-live="polite" className="py-8 text-center">
                <CheckCircle2 className="mx-auto size-12 text-success" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold text-navy">Thank you — your enquiry has been received.</h3>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Our team will contact you on the mobile number you shared. For a quicker reply, you can also message
                  us on WhatsApp.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button variant="outlineNavy" size="xl" onClick={() => setStatus("idle")}>
                    Send another enquiry
                  </Button>
                  <Button asChild variant="whatsapp" size="xl">
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon /> Continue on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-6 sm:grid-cols-2">
                <Field id="studentName" label="Student name" error={err("studentName")}>
                  <input id="studentName" autoComplete="name" className={fieldBase} {...aria("studentName")} {...register("studentName")} />
                </Field>
                <Field id="parentName" label="Parent / guardian name" optional error={err("parentName")}>
                  <input id="parentName" className={fieldBase} {...aria("parentName")} {...register("parentName")} />
                </Field>
                <Field id="mobile" label="Mobile number" error={err("mobile")}>
                  <input
                    id="mobile"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    className={fieldBase}
                    {...aria("mobile")}
                    {...register("mobile")}
                  />
                </Field>
                <Field id="currentClass" label="Current class / level" error={err("currentClass")}>
                  <input
                    id="currentClass"
                    placeholder="e.g. Class 10, Class 12 passed"
                    className={fieldBase}
                    {...aria("currentClass")}
                    {...register("currentClass")}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="course" label="Course interested in" error={err("course")}>
                    <select id="course" className={cn(fieldBase, "pr-10")} {...aria("course")} {...register("course")}>
                      <option value="">Select a course</option>
                      {courses.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet — need guidance</option>
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field id="message" label="Message" optional error={err("message")}>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Anything you'd like to ask — batches, fees, timings…"
                      className={cn(fieldBase, "resize-y")}
                      {...aria("message")}
                      {...register("message")}
                    />
                  </Field>
                </div>

                {status === "error" && serverError && (
                  <div role="alert" className="flex gap-3 rounded-sm border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive sm:col-span-2">
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <p>{serverError}</p>
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    We'll only use your details to respond to this enquiry.
                  </p>
                  <Button type="submit" variant="navy" size="xl" disabled={isSubmitting} className="sm:min-w-48">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" /> Sending…
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
