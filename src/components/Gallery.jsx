const Gallery = () => (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-800 mb-12">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery items with proper image handling */}
          <div className="relative group">
            <img
              src="/api/placeholder/400/300"
              alt="Protein Structure Visualization"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-0 p-4">
                <h3 className="text-white font-medium">Protein Structure Analysis</h3>
                <p className="text-white/80 text-sm">
                  Visualization of metabolic enzyme conformations
                </p>
              </div>
            </div>
          </div>
          {/* Additional gallery items... */}
        </div>
      </div>
    </div>
  );

  export default Gallery;