export default function HowItWorks() {
  return (
    <section className="bg-blue-900 text-white py-20 px-10">
      <h2 className="text-3xl font-bold mb-10">How it works</h2>

      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="h-80 bg-gray-300"></div>

        <div className="space-y-6">
          <p>Find what you're looking for</p>
          <p>Add to cart or request a quote</p>
          <p>Receive and install with confidence</p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}