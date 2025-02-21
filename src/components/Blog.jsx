const Blog = () => (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-800 mb-12">Blog</h1>
        
        <div className="grid gap-8">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-4">
              <span className="text-emerald-600 text-sm">Feb 15, 2025</span>
              <h2 className="text-2xl font-semibold text-emerald-700 mt-2">
                Evolution of Metabolic Networks
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              The emergence and evolution of metabolic networks represents one of the most
              fascinating aspects of life's origin. In this post, we explore how early
              metabolic pathways might have developed and the implications for our
              understanding of life's emergence.
            </p>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
              Read More →
            </button>
          </article>
  
          {/* Additional blog posts... */}
        </div>
      </div>
    </div>
  );

export default Blog;