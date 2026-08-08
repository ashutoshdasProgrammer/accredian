import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type LeadRequest = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  requirement?: unknown;
};

type LeadData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  requirement: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getLeadData(body: LeadRequest): LeadData | null {
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const company =
    typeof body.company === 'string' ? body.company.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const requirement =
    typeof body.requirement === 'string'
      ? body.requirement.trim()
      : '';

  if (name.length < 2) {
    return null;
  }

  if (!isValidEmail(email)) {
    return null;
  }

  if (company.length < 2) {
    return null;
  }

  if (phone.length < 7) {
    return null;
  }

  if (requirement.length < 3) {
    return null;
  }

  return {
    name,
    email,
    company,
    phone,
    requirement,
  };
}

export async function POST(request: Request) {
  let body: LeadRequest;

  try {
    body = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json(
      {
        error: 'Invalid JSON request.',
      },
      {
        status: 400,
      },
    );
  }

  const lead = getLeadData(body);

  if (!lead) {
    return NextResponse.json(
      {
        error:
          'Please provide a valid name, email, company, phone number, and requirement.',
      },
      {
        status: 400,
      },
    );
  }

  /*
   * This is where you can save the lead to a database,
   * CRM, email service, or webhook.
   *
   * For now, the route accepts and validates the request
   * without permanently storing the data.
   */

  return NextResponse.json(
    {
      id: `lead_${crypto.randomUUID()}`,
      message:
        'Thanks. Our enterprise team will contact you shortly.',
    },
    {
      status: 201,
    },
  );
}