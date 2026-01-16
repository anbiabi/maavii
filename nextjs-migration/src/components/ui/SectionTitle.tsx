interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
    return (
        <div className={`text-center mb-16 ${className}`}>
            <h2 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-charcoal/60 font-serif max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;
