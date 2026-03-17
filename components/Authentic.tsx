export default function Authentic() {
  const cards = [
    "Compare specs side by side",
    "Checkout with confidence",
    "Full warranty coverage",
  ];

  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-12">
        Authentic products, no fakes
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {cards.map((c) => (
          <div key={c} className="bg-white p-6 rounded shadow">
            <div className="h-40 bg-gray-200 mb-4"></div>
            <h3 className="font-semibold">{c}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}