/*
# Create CRAFT inquiry submissions

1. New Tables
- `craft_inquiries`
- `id` (uuid, primary key) identifies each inquiry.
- `name` (text) stores the visitor's name.
- `organization` (text) stores the organization or brand name.
- `email` (text) stores the reply email address.
- `project_type` (text) stores the selected project category.
- `budget` (text) stores the selected budget range.
- `details` (text) stores the project description.
- `created_at` (timestamptz) records when the inquiry was sent.

2. Security
- Row level security is enabled.
- Anonymous and signed-in visitors may submit inquiries.
- No public role may read, update, or delete inquiry records.
- Inquiry records are intended for the studio team to review through the database.

3. Important Notes
- This is a single-tenant public marketing site with no sign-in screen.
- The browser receives only the success or failure result of its own submission.
*/

CREATE TABLE IF NOT EXISTS public.craft_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organization text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget text NOT NULL,
  details text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.craft_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit CRAFT inquiries" ON public.craft_inquiries;
CREATE POLICY "Public can submit CRAFT inquiries"
  ON public.craft_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 2 AND 120
    AND char_length(organization) BETWEEN 2 AND 160
    AND char_length(email) BETWEEN 5 AND 254
    AND char_length(project_type) BETWEEN 2 AND 80
    AND char_length(budget) BETWEEN 2 AND 80
    AND char_length(details) BETWEEN 10 AND 4000
  );

REVOKE SELECT, UPDATE, DELETE ON public.craft_inquiries FROM anon, authenticated;
GRANT INSERT ON public.craft_inquiries TO anon, authenticated;
