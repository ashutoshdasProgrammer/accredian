'use client';

import {
  Check,
  ChevronDown,
  Clock3,
  ArrowUpRight,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';

type LeadFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  requirement: string;
};

type LeadErrors = Partial<Record<keyof LeadFormData, string>>;

const initialForm: LeadFormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  requirement: '',
};

function validateLead(form: LeadFormData): LeadErrors {
  const errors: LeadErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid work email.';
  }

  if (form.company.trim().length < 2) {
    errors.company = 'Please enter your company.';
  }

  if (form.phone.trim().length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!form.requirement) {
    errors.requirement = 'Please choose an area of interest.';
  }

  return errors;
}

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormData>(initialForm);

  const [errors, setErrors] = useState<LeadErrors>({});

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  function updateField(
    field: keyof LeadFormData,
    value: string,
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));

    if (status === 'error') {
      setStatus('idle');
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const validationErrors = validateLead(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Lead submission failed');
      }

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setStatus('idle');
  }

  return (
    <section
      id="contact"
      className="bg-[#e76b5b] py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 md:grid-cols-[0.84fr_1.16fr] md:px-8">
        <div>
          <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#15213d]/70">
            <span className="h-px w-8 bg-current" />
            Make the move
          </div>

          <h2 className="max-w-[530px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-[#15213d] md:text-7xl">
            Let’s make capability your{' '}
            <span className="font-serif font-normal italic">
              advantage.
            </span>
          </h2>

          <p className="mt-7 max-w-[390px] leading-relaxed text-[#15213d]/70">
            Tell us what you are working towards. We will bring
            the right people and perspective to the first
            conversation.
          </p>

          <div className="mt-12 space-y-4 text-sm text-[#15213d]/80">
            <div className="flex items-center gap-3">
              <Clock3 size={17} />
              Reply within two working days
            </div>

            <div className="flex items-center gap-3">
              <Check size={17} />
              No hard sell. Just a useful start.
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-[#f5f1e9] p-6 md:p-9">
          <div className="mb-7 flex items-center justify-between">
            <h3 className="text-2xl font-medium tracking-[-0.04em]">
              Start a conversation
            </h3>

            <span className="text-[10px] uppercase tracking-[0.15em] text-[#596273]">
              Form / 001
            </span>
          </div>

          {status === 'success' ? (
            <SuccessState onReset={resetForm} />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid gap-5 sm:grid-cols-2"
            >
              <FormField
                id="name"
                label="Your name"
                value={form.name}
                error={errors.name}
                onChange={(value) => updateField('name', value)}
              />

              <FormField
                id="email"
                label="Work email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                error={errors.email}
                onChange={(value) => updateField('email', value)}
              />

              <FormField
                id="company"
                label="Company"
                value={form.company}
                error={errors.company}
                onChange={(value) => updateField('company', value)}
              />

              <FormField
                id="phone"
                label="Phone"
                type="tel"
                value={form.phone}
                error={errors.phone}
                onChange={(value) => updateField('phone', value)}
              />

              <label
                htmlFor="requirement"
                className="block sm:col-span-2"
              >
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#15213d]">
                  I’m exploring
                  <span className="text-[#e76b5b]"> *</span>
                </span>

                <div className="relative">
                  <select
                    id="requirement"
                    value={form.requirement}
                    onChange={(event) =>
                      updateField(
                        'requirement',
                        event.target.value,
                      )
                    }
                    aria-invalid={Boolean(errors.requirement)}
                    aria-describedby={
                      errors.requirement
                        ? 'requirement-error'
                        : undefined
                    }
                    className="w-full appearance-none border-b border-[#15213d]/25 bg-transparent px-0 py-3 text-sm text-[#15213d] outline-none focus:border-[#e76b5b]"
                  >
                    <option value="">Choose one</option>
                    <option value="Leadership development">
                      Leadership development
                    </option>
                    <option value="Upskilling a team">
                      Upskilling a team
                    </option>
                    <option value="Corporate training">
                      Corporate training
                    </option>
                    <option value="Skill transformation">
                      Skill transformation
                    </option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-0 top-3 text-[#15213d]"
                  />
                </div>

                {errors.requirement && (
                  <span
                    id="requirement-error"
                    className="mt-1 block text-xs text-red-600"
                  >
                    {errors.requirement}
                  </span>
                )}
              </label>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group mt-3 flex items-center justify-between rounded-full bg-[#15213d] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                <span>
                  {status === 'loading'
                    ? 'Sending your enquiry...'
                    : status === 'error'
                      ? 'Try again'
                      : 'Send enquiry'}
                </span>

                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#a8f21d] text-[#15213d] transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </button>

              {status === 'error' && (
                <p
                  className="text-xs text-red-600 sm:col-span-2"
                  role="alert"
                >
                  Something went wrong while sending your enquiry.
                  Please try again.
                </p>
              )}

              <p className="text-[10px] leading-relaxed text-[#596273] sm:col-span-2">
                By submitting this form, you agree to our privacy
                policy. We will only use your details to respond to
                this enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: keyof LeadFormData;
  label: string;
  value: string;
  error?: string;
  type?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function FormField({
  id,
  label,
  value,
  error,
  type = 'text',
  placeholder,
  onChange,
}: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#15213d]">
        {label}
        <span className="text-[#e76b5b]"> *</span>
      </span>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border-b border-[#15213d]/25 bg-transparent px-0 py-3 text-sm text-[#15213d] outline-none transition-colors placeholder:text-[#596273] focus:border-[#e76b5b]"
      />

      {error && (
        <span
          id={errorId}
          className="mt-1 block text-xs text-red-600"
        >
          {error}
        </span>
      )}
    </label>
  );
}

type SuccessStateProps = {
  onReset: () => void;
};

function SuccessState({ onReset }: SuccessStateProps) {
  return (
    <div
      className="flex min-h-[380px] flex-col items-center justify-center text-center"
      role="status"
      aria-live="polite"
    >
      <span className="grid h-16 w-16 place-items-center rounded-full bg-[#a8f21d] text-[#15213d]">
        <Check size={28} />
      </span>

      <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-[#15213d]">
        You’re on our radar.
      </h3>

      <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-[#596273]">
        Thanks for reaching out. A member of our team will be
        in touch shortly.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 text-xs font-bold uppercase tracking-[0.13em] text-[#15213d] underline underline-offset-4"
      >
        Send another enquiry
      </button>
    </div>
  );
}