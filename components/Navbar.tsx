'use client';

import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Link from "next/link";

const links = [
  { label: 'Approach', href: '#approach' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Impact', href: '#impact' },
  { label: 'Stories', href: '#stories' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#15213d]/10 bg-[#f5f1e9]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#a8f21d]">
            <span className="h-3.5 w-3.5 rounded-full border-[3px] border-[#15213d]" />
          </span>

          <span className="text-[13px] font-bold tracking-[-0.04em]">
            ACCREDIAN<span className="text-[#e76b5b]">/</span>ENT.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#596273] transition-colors hover:text-[#15213d]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="text-white hidden items-center gap-2 rounded-full bg-[#15213d] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5 md:flex"
        >
          Talk to our team
          <ArrowUpRight size={15} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#15213d]/20 md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#15213d]/10 bg-[#f5f1e9] px-5 py-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#15213d]/10 py-4 text-lg"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#15213d] py-4 text-sm font-bold text-white"
          >
            Start a conversation
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}