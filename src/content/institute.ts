/**
 * All institute content lives here. Replace the placeholder values with the
 * institute's real details — every section of the site reads from this file.
 *
 * Rule: never add results, reviews, faculty credentials or statistics that the
 * institute has not supplied. Sections with empty lists stay hidden.
 */
import heroImg from "@/assets/hero-classroom.jpg";
import aboutImg from "@/assets/about-mentoring.jpg";
import foundationImg from "@/assets/course-foundation.jpg";
import scienceImg from "@/assets/course-science.jpg";
import commerceImg from "@/assets/course-commerce.jpg";
import entranceImg from "@/assets/course-entrance.jpg";
import classroomImg from "@/assets/gallery-classroom.jpg";
import groupImg from "@/assets/gallery-group.jpg";

export const institute = {
  name: "Aarohan Academy",
  shortName: "Aarohan",
  tagline: "Structured teaching. Dedicated guidance.",
  description:
    "A coaching institute for school students and exam aspirants, built around structured teaching, personal guidance and a calm, focused learning environment.",
  address: {
    street: "[Street address]",
    locality: "[Area / Locality]",
    city: "[City]",
    region: "[State]",
    postalCode: "[PIN]",
    country: "IN",
  },
  /** Display phone number */
  phone: "+91 00000 00000",
  /** Digits only, with country code — used for wa.me links */
  whatsapp: "910000000000",
  email: "hello@your-institute.in",
  established: null as number | null,
  hours: [
    { days: "Monday – Saturday", time: "[Opening time] – [Closing time]" },
    { days: "Sunday", time: "[Closed / Doubt sessions]" },
  ],
  mapsLink: "https://maps.google.com/?q=[Institute+address]",
  /** Search query used for the embedded map */
  mapsEmbedQuery: "India",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  whatsappMessage:
    "Hello, I visited your website and would like to know more about your coaching classes, courses, fees and admission process.",
};

export const fullAddress = [
  institute.address.street,
  institute.address.locality,
  `${institute.address.city}, ${institute.address.region} ${institute.address.postalCode}`,
].join(", ");

export const images = {
  hero: heroImg,
  about: aboutImg,
  classroom: classroomImg,
  group: groupImg,
};

export type Course = {
  slug: string;
  name: string;
  level: string;
  description: string;
  subjects: string[];
  objectives: string[];
  duration: string | null;
  batches: string | null;
  image: string;
  imageAlt: string;
};

export const courses: Course[] = [
  {
    slug: "class-9-10-foundation",
    name: "Class 9–10 Foundation",
    level: "Secondary school · Class 9 & 10",
    description:
      "Builds strong fundamentals in Mathematics and Science so that board preparation feels steady rather than rushed, and senior-class concepts have a solid base.",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "English", "Social Science"],
    objectives: [
      "Clear, concept-first understanding of every chapter",
      "Confidence with board-pattern questions",
      "Disciplined study habits before senior classes",
    ],
    duration: null,
    batches: null,
    image: foundationImg,
    imageAlt: "Class 9 and 10 students working through geometry and science problems together",
  },
  {
    slug: "class-11-12-science",
    name: "Class 11–12 Science",
    level: "Senior secondary · PCM / PCB",
    description:
      "Focused coaching for senior science students that balances board examinations with the deeper understanding needed for higher studies.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    objectives: [
      "Thorough coverage of the board syllabus",
      "Problem-solving practice beyond the textbook",
      "Revision plans timed around school exams",
    ],
    duration: null,
    batches: null,
    image: scienceImg,
    imageAlt: "Teacher writing chemistry structures and physics formulas on a whiteboard for senior students",
  },
  {
    slug: "commerce-11-12",
    name: "Commerce (Class 11–12)",
    level: "Senior secondary · Commerce stream",
    description:
      "Practical, example-driven teaching for commerce students — from journal entries and balance sheets to demand curves and business case studies.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics / Applied Maths"],
    objectives: [
      "Accuracy and presentation in Accountancy",
      "Real-world understanding of economic concepts",
      "Answer-writing practice for board examinations",
    ],
    duration: null,
    batches: null,
    image: commerceImg,
    imageAlt: "Commerce students studying accountancy ledgers and economics graphs in class",
  },
  {
    slug: "jee-neet-preparation",
    name: "JEE / NEET Preparation",
    level: "Competitive examinations · Class 11, 12 & droppers",
    description:
      "Structured preparation for engineering and medical entrance examinations, with a steady rhythm of concept classes, practice and test analysis.",
    subjects: ["Physics", "Chemistry", "Mathematics (JEE)", "Biology (NEET)"],
    objectives: [
      "Strong conceptual depth for entrance-level problems",
      "Speed and accuracy through timed practice",
      "Test analysis to find and fix weak areas",
    ],
    duration: null,
    batches: null,
    image: entranceImg,
    imageAlt: "Student solving timed entrance exam practice questions at a study desk",
  },
];

/** Strengths — keep only those the institute genuinely offers. */
export const strengths = [
  {
    icon: "lightbulb",
    title: "Concept-based learning",
    text: "Every topic starts with the 'why', so students understand rather than memorise.",
  },
  {
    icon: "users",
    title: "Personal attention",
    text: "Batch sizes that let teachers know each student's pace and gaps.",
  },
  {
    icon: "message",
    title: "Doubt-solving support",
    text: "Dedicated time to clear doubts before they pile up.",
  },
  {
    icon: "book",
    title: "Structured study material",
    text: "Organised notes and practice sheets aligned to the syllabus.",
  },
  {
    icon: "clipboard",
    title: "Regular assessments",
    text: "Chapter tests and revision checks to track real progress.",
  },
  {
    icon: "chart",
    title: "Progress updates for parents",
    text: "Parents stay informed about attendance, performance and next steps.",
  },
] as const;

export const gallery = [
  { src: heroImg, alt: "Teacher explaining a concept on the whiteboard to a full classroom", w: 1600, h: 1200 },
  { src: groupImg, alt: "Three students discussing a problem together over a notebook", w: 1008, h: 1264 },
  { src: classroomImg, alt: "Bright, tidy classroom interior with rows of desks and a whiteboard", w: 1200, h: 912 },
  { src: aboutImg, alt: "Teacher guiding a student one-on-one through her notebook", w: 1200, h: 1504 },
  { src: scienceImg, alt: "Students taking notes while a teacher writes formulas on the board", w: 1200, h: 912 },
  { src: entranceImg, alt: "Student practising timed questions during a study session", w: 1200, h: 912 },
];

export type Faculty = {
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  bio: string;
  photo?: string;
};
/** Add real faculty profiles here. Leave empty until details are supplied. */
export const faculty: Faculty[] = [];

export type Result = {
  student: string;
  exam: string;
  achievement: string;
  score?: string;
  photo?: string;
};
/** Verified results only. The section stays hidden while this is empty. */
export const results: Result[] = [];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  course?: string;
};
/** Genuine feedback only. The section stays hidden while this is empty. */
export const testimonials: Testimonial[] = [];

export const faqs = [
  {
    q: "Which courses are available?",
    a: `We currently offer ${courses.map((c) => c.name).join(", ")}. Each course page above lists the subjects covered and what students work towards.`,
  },
  {
    q: "How can I enquire about admission?",
    a: "Fill in the enquiry form on this page, message us on WhatsApp, or call us. Our team will get back to you with details about batches and the admission process.",
  },
  {
    q: "Where is the institute located?",
    a: `We are located at ${fullAddress}. Use the "Get Directions" button in the Visit Our Institute section to open the location in Google Maps.`,
  },
  {
    q: "What are the class timings?",
    a: "Batch timings depend on the course and class. Share your details through the enquiry form or WhatsApp and we'll send the current schedule.",
  },
  {
    q: "Are trial classes available?",
    a: "Please ask our team about trial or demo classes for your course when you enquire.",
  },
  {
    q: "How can I get information about fees?",
    a: "Fee details are shared directly on enquiry, as they vary by course and batch. Message us on WhatsApp or submit the enquiry form.",
  },
  {
    q: "How can I contact the institute?",
    a: `Call ${institute.phone}, email ${institute.email}, or tap the WhatsApp button at the bottom of the screen.`,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
