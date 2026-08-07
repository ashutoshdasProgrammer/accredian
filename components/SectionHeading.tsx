type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div>
      <div
        className={`eyebrow mb-6 ${
          light ? 'text-[#a8f21d]' : 'text-[#e76b5b]'
        }`}
      >
        {eyebrow}
      </div>

      <h2
        className={`text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl ${
          light ? 'text-white' : 'text-[#15213d]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 max-w-[390px] leading-relaxed ${
            light ? 'text-white/65' : 'text-[#596273]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}