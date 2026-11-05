import { describe, expect, it } from "vitest";
import { enquirySchema, normalizeIndianMobile } from "@/lib/enquiry-schema";
import { whatsappUrl } from "@/lib/whatsapp";

const valid = {
  studentName: "Riya Sharma",
  parentName: "",
  mobile: "98765 43210",
  course: "Class 11–12 Science",
  currentClass: "Class 11",
  message: "",
};

describe("enquiry form rules", () => {
  it("accepts a 10-digit Indian mobile with or without +91 and normalises it", () => {
    expect(normalizeIndianMobile("9876543210")).toBe("+919876543210");
    expect(normalizeIndianMobile("+91 98765-43210")).toBe("+919876543210");
    expect(normalizeIndianMobile("09876543210")).toBe("+919876543210");
  });

  it("rejects mobiles that are too short or don't start with 6–9", () => {
    expect(normalizeIndianMobile("98765")).toBeNull();
    expect(normalizeIndianMobile("1234567890")).toBeNull();
  });

  it("requires student name, mobile, course and current class", () => {
    for (const key of ["studentName", "mobile", "course", "currentClass"] as const) {
      expect(enquirySchema.safeParse({ ...valid, [key]: "" }).success).toBe(false);
    }
  });

  it("treats parent name and message as optional", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });
});

describe("WhatsApp links", () => {
  it("uses wa.me with digits only and a URL-encoded message", () => {
    expect(whatsappUrl("Hi there & hello", "+91 98765 43210")).toBe(
      "https://wa.me/919876543210?text=Hi%20there%20%26%20hello",
    );
  });
});
