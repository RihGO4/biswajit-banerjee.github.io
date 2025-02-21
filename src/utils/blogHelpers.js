import { blogPosts } from '../data/blogs';

export const getBlogById = (id) => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogContent = async (id) => {
  try {
    const response = await fetch(`/content/blogs/${id}.md`);
    if (!response.ok) throw new Error('Blog content not found');
    return await response.text();
  } catch (error) {
    console.error('Error loading blog content:', error);
    return null;
  }
};