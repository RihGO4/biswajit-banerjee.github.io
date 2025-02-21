import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Tag, Shuffle, Eye, ArrowDown, ArrowUp, FileDown } from 'lucide-react';
import { blogPosts, CATEGORIES } from '../../data/blogs';

const SearchBar = ({ onSearch }) => (
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="text"
      placeholder="Search blogs..."
      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="flex flex-wrap gap-2">
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        !selectedCategory ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      onClick={() => onSelectCategory(null)}
    >
      All
    </button>
    {categories.map((category) => (
      <button
        key={category}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedCategory === category ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

const BlogCard = ({ blog, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
        {blog.category}
      </span>
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <span className="flex items-center gap-1">
          <Eye className="w-4 h-4" /> {blog.views}
        </span>
        <span className="flex items-center gap-1">
          <FileDown className="w-4 h-4" /> {blog.downloads}
        </span>
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
    <p className="text-gray-600 mb-4">{blog.summary}</p>
    <div className="flex justify-between items-center text-sm text-gray-500">
      <span>{new Date(blog.date).toLocaleDateString()}</span>
      <span>{blog.readingTime} read</span>
    </div>
  </div>
);

const BlogsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('desc');
    }
  };

  const filteredAndSortedBlogs = blogPosts
    .filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      if (sortBy === 'date') {
        return order * (new Date(a.date) - new Date(b.date));
      }
      if (sortBy === 'views') {
        return order * (a.views - b.views);
      }
      return 0;
    });

  const handleRandomBlog = () => {
    const randomIndex = Math.floor(Math.random() * filteredAndSortedBlogs.length);
    const randomBlog = filteredAndSortedBlogs[randomIndex];
    navigate(`/blog/${randomBlog.id}`);
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20"> {/* Added pt-20 for header offset */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-gray-600">Exploring the intersection of AI and the Origins of Life</p>
        </div>

        <div className="space-y-6 mb-8">
          <SearchBar onSearch={setSearchQuery} />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CategoryFilter
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleRandomBlog}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Shuffle className="w-4 h-4" />
                I'm Feeling Lucky
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSort('date')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                    sortBy === 'date' ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-gray-600'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Date
                  {sortBy === 'date' && (
                    sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />
                  )}
                </button>
                
                <button
                  onClick={() => handleSort('views')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                    sortBy === 'views' ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-gray-600'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  Views
                  {sortBy === 'views' && (
                    sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAndSortedBlogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onClick={() => handleBlogClick(blog.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;