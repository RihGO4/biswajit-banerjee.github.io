const Research = () => (
  <div className="pt-32 pb-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-800 mb-12">Research</h1>

      <div className="space-y-12">
        {/* Project 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            Metabolic Fold Space
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Our research focuses on understanding the early evolution of
              metabolic networks through the lens of protein fold space. By
              combining machine learning with structural biology, we're
              investigating how the earliest enzymes might have emerged and
              evolved.
            </p>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Key Findings
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                Identified key structural motifs in ancient metabolic enzymes
              </li>
              <li>
                Developed novel embedding techniques for protein fold comparison
              </li>
              <li>
                Mapped the evolutionary trajectory of early metabolic networks
              </li>
            </ul>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            RiboVision2
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              RiboVision2 represents a significant advancement in RNA structure
              prediction, leveraging graph neural networks to understand and
              predict complex ribosomal RNA structures.
            </p>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Features
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Graph-based machine learning for structure prediction</li>
              <li>Interactive visualization of RNA secondary structures</li>
              <li>Comparative analysis tools for evolutionary studies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Research;
