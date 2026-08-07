import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f1e9] px-6 text-[#15213d]">
      <div className="text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e76b5b]">
          Page not found
        </p>

        <h1 className="text-6xl font-semibold tracking-[-0.08em]">
          404
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[#596273]">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#15213d] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}