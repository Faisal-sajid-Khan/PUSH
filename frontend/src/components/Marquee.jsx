export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-push-charcoal py-2" aria-hidden>
      <div className="push-marquee__track flex w-max gap-8">
        {row.map((t, i) => <span key={i} className="push-display text-lg text-push-mid md:text-2xl">{t}</span>)}
      </div>
    </div>
  );
}
