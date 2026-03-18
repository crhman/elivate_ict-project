const SectionHeading = ({ label, title, subtitle, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-slate-600">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
