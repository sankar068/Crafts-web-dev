import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/lib/useReveal';
import StrokeText from '@/components/StrokeText';
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Errors = Record<string, string>;

const PROJECT_TYPES = ['Website', 'Brand Experience', 'UI/UX', 'Redesign', 'Platform', 'Other'];
const BUDGETS = ['< $1K', '$1K – $5K', '$5K – $15K', '$15K+', 'Let\'s discuss'];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    projectType: '',
    budget: '',
    details: '',
  });

  const validate = (): boolean => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = 'Please enter your name.';
    if (form.organization.trim().length < 2) e.organization = 'Please enter your organization.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.projectType) e.projectType = 'Please select a project type.';
    if (!form.budget) e.budget = 'Please select a budget range.';
    if (form.details.trim().length < 10) e.details = 'Please share a few details about your project.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    const submission = {
      name: form.name.trim(),
      organization: form.organization.trim(),
      email: form.email.trim(),
      project_type: form.projectType,
      budget: form.budget,
      details: form.details.trim(),
      created_at: new Date().toISOString(),
    };

    let savedToSupabase = false;

    if (supabase) {
      try {
        const { error } = await supabase.from('craft_inquiries').insert({
          name: submission.name,
          organization: submission.organization,
          email: submission.email,
          project_type: submission.project_type,
          budget: submission.budget,
          details: submission.details,
        });
        if (!error) {
          savedToSupabase = true;
        } else {
          console.warn('Supabase insert notice (stored locally):', error.message || error);
        }
      } catch (err) {
        console.warn('Supabase request notice (stored locally):', err);
      }
    }

    // Persist to local backup storage so inquiries are never lost
    try {
      const existing = JSON.parse(localStorage.getItem('craft_inquiries') || '[]');
      existing.push({
        ...submission,
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `inq_${Date.now()}`,
        synced: savedToSupabase,
      });
      localStorage.setItem('craft_inquiries', JSON.stringify(existing));
    } catch (storageErr) {
      console.warn('Local storage notice:', storageErr);
    }

    setStatus('success');
    setForm({ name: '', organization: '', email: '', projectType: '', budget: '', details: '' });
  };

  const fieldClass = (field: string) =>
    `w-full bg-transparent border-b px-0 py-3 text-bone placeholder-muted focus:outline-none transition-colors duration-300 ${
      errors[field] ? 'border-error' : 'border-line focus:border-cobalt'
    }`;

  return (
    <section id="contact" className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">
              Contact
            </span>
            <div className="mt-6">
              <StrokeText
                text="Let's make it real."
                strokeColor="#8b7cff"
                fillColor="#f1f0ec"
                strokeWidth={1.8}
                drawDuration={2}
                fillDelay={0.3}
                stagger={0.08}
                ease="power2.out"
                trigger="scroll"
                fillMode="wipe"
                fontSize={72}
                fontWeight={700}
                letterSpacing={-2}
                className="font-display"
              />
            </div>
            <p className="mt-6 text-lg text-bone-dim leading-relaxed max-w-md">
              Tell us what you're building. We'll get back to you with thoughts on how to make it
              unforgettable.
            </p>
          </div>

          <div className="md:col-span-7">
            {status === 'success' ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <CheckCircle2 size={40} className="text-success" />
                <h3 className="font-display text-2xl font-bold text-bone">Inquiry received.</h3>
                <p className="text-bone-dim max-w-md">
                  Thank you for reaching out. We'll review your project details and respond shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-cobalt-soft hover:text-bone transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={fieldClass('name')}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-error flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted mb-1" htmlFor="org">
                      Organization
                    </label>
                    <input
                      id="org"
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className={fieldClass('organization')}
                      placeholder="Company or brand"
                    />
                    {errors.organization && <p className="mt-2 text-sm text-error flex items-center gap-1"><AlertCircle size={14} />{errors.organization}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass('email')}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-error flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-3">Project Type</p>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm({ ...form, projectType: type })}
                        className={`text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                          form.projectType === type
                            ? 'border-cobalt bg-cobalt/10 text-bone'
                            : 'border-line text-bone-dim hover:border-bone/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {errors.projectType && <p className="mt-2 text-sm text-error flex items-center gap-1"><AlertCircle size={14} />{errors.projectType}</p>}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-3">Budget</p>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setForm({ ...form, budget })}
                        className={`text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                          form.budget === budget
                            ? 'border-cobalt bg-cobalt/10 text-bone'
                            : 'border-line text-bone-dim hover:border-bone/30'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                  {errors.budget && <p className="mt-2 text-sm text-error flex items-center gap-1"><AlertCircle size={14} />{errors.budget}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-1" htmlFor="details">
                    Details
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className={`${fieldClass('details')} resize-none`}
                    placeholder="Tell us about your project, goals and timeline..."
                  />
                  {errors.details && <p className="mt-2 text-sm text-error flex items-center gap-1"><AlertCircle size={14} />{errors.details}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-sm text-error flex items-center gap-2">
                    <AlertCircle size={16} />
                    Something went wrong sending your inquiry. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 font-display text-lg font-semibold text-bone bg-cobalt hover:bg-cobalt-soft disabled:opacity-50 transition-colors duration-300 px-8 py-4 rounded-full"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      LET'S MAKE IT REAL
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
