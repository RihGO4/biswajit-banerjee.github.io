const Random = () => (
  <div className="pt-32 pb-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-800 mb-12">
        Random Musings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
            Current Reading List
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-medium text-emerald-600">
                  The Vital Question
                </h3>
                <p className="text-gray-600">by Nick Lane</p>
                <p className="text-sm text-gray-500 mt-1">
                  A deep dive into the role of energy in the origin of life.
                </p>
              </div>
            </li>
            {/* Additional books... */}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
            Favorite Quotes
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-emerald-200 pl-4 italic text-gray-600">
              "The origin of life is not a lucky accident, but a natural outcome
              of far-from-equilibrium physics."
            </blockquote>
            {/* Additional quotes... */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Random;
