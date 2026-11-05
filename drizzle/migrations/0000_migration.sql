CREATE TABLE public.admission_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  parent_name text,
  mobile text NOT NULL,
  course text NOT NULL,
  current_class text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT student_name_len CHECK (char_length(student_name) BETWEEN 2 AND 100),
  CONSTRAINT parent_name_len CHECK (parent_name IS NULL OR char_length(parent_name) <= 100),
  CONSTRAINT mobile_format CHECK (mobile ~ '^[0-9+ ]{10,16}$'),
  CONSTRAINT course_len CHECK (char_length(course) BETWEEN 1 AND 100),
  CONSTRAINT class_len CHECK (char_length(current_class) BETWEEN 1 AND 60),
  CONSTRAINT message_len CHECK (message IS NULL OR char_length(message) <= 1000)
);

GRANT INSERT ON public.admission_enquiries TO anon;
GRANT INSERT ON public.admission_enquiries TO authenticated;
GRANT ALL ON public.admission_enquiries TO service_role;

ALTER TABLE public.admission_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.admission_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);