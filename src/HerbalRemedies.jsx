
const HerbalRemediesPage = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <header className="mb-8">
        <img src="/api/placeholder/1200/400" alt="Herbal Medicine" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h1 className="text-4xl font-bold text-center text-purple-800">Herbal Medicine</h1>
      </header>

      <main className="container mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are herbal supplements?</h2>
          <p className="mb-4">
            Plant-based products used to treat diseases or to maintain health are called herbal products, botanical products, or phytomedicines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Herbal Supplements</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="border border-gray-300 p-2">Herbal Supplements</th>
                <th className="border border-gray-300 p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 p-2 font-semibold">Echinacea</td>
                <td className="border border-gray-300 p-2">Boosts immune system, prevents colds and flu.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default HerbalRemediesPage;
