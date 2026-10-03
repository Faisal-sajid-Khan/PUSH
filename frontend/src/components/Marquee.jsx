export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-push-charcoal py-5" aria-hidden>
      <div className="push-marquee__track flex w-max gap-12">
        {row.map((t, i) => <span key={i} className="push-display text-4xl text-push-mid md:text-6xl">{t}</span>)}
      </div>
    </div>
  );
}
