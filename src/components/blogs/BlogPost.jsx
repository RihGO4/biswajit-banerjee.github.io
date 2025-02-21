import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { blogPosts } from '../../data/blogs';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Get current blog and find prev/next posts
  const currentBlog = blogPosts.find(post => post.id === slug);
  const currentIndex = blogPosts.findIndex(post => post.id === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  useEffect(() => {
    const loadContent = async () => {
      if (currentBlog) {
        try {
          const response = await fetch(currentBlog.path);
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error('Error loading blog content:', error);
        }
      }
    };
    
    loadContent();
  }, [currentBlog]);

  if (!currentBlog) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <p>Blog post not found</p>
        <button onClick={() => navigate('/')} className="text-emerald-600 hover:text-emerald-800">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      {/* Navigation */}
      <nav className="mb-12 flex items-center justify-between text-sm">
        <button 
          onClick={() => navigate('/')}
          className="text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1"
        >
          <Home size={16} />
          Home
        </button>
        <span className="text-gray-500">{currentBlog.date}</span>
      </nav>

      {/* Main Content */}
      <ReactMarkdown>{content}</ReactMarkdown>

      {/* Post Navigation */}
      <div className="mt-16 pt-8 border-t flex items-center justify-between text-sm">
        {prevPost ? (
          <button
            onClick={() => navigate(`/blog/${prevPost.id}`)}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft size={16} />
            <div>
              <div className="font-medium">{prevPost.title}</div>
              <div className="text-gray-500">Previous Post</div>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextPost ? (
          <button
            onClick={() => navigate(`/blog/${nextPost.id}`)}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors text-right"
          >
            <div>
              <div className="font-medium">{nextPost.title}</div>
              <div className="text-gray-500">Next Post</div>
            </div>
            <ArrowRight size={16} />
          </button>
        ) : (
          <div />
        )}
      </div>
    </article>
  );
};

export default BlogPost;