export default function Footer() {
  return (
    <footer className="bg-white py-10 px-10 border-t">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">Logo</h3>
          <p className="text-sm text-gray-500">
            Reliable solar equipment marketplace.
          </p>
        </div>

        <div>
          <p>Solar panels</p>
          <p>Inverters</p>
          <p>Batteries</p>
        </div>

        <div>
          <p>Help center</p>
          <p>Delivery info</p>
          <p>Payment methods</p>
        </div>
      </div>
    </footer>
  );
}