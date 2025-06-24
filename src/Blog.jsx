import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// This will be replaced with dynamic import logic for markdown files
const posts = import.meta.glob('./blog/*.md', { as: 'raw' });

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      const loadedPosts = await Promise.all(
        Object.entries(posts).map(async ([path, resolver]) => {
          const raw = await resolver();
          const { data, content } = matter(raw);
          return {
            ...data,
            content,
            slug: path.split('/').pop().replace('.md', ''),
          };
        })
      );
      setBlogPosts(loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
    loadPosts();
  }, []);

  if (selectedPost) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <button className="mb-4 text-blue-500 underline" onClick={() => setSelectedPost(null)}>
          ← Back to Blog
        </button>
        <h1 className="text-3xl font-bold mb-2">{selectedPost.title}</h1>
        <p className="text-gray-400 mb-6">{selectedPost.date}</p>
        <ReactMarkdown className="prose prose-invert">
          {selectedPost.content}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.slug} className="mb-8">
            <button className="text-left" onClick={() => setSelectedPost(post)}>
              <h2 className="text-2xl font-semibold text-blue-400 hover:underline">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-200">{post.description}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog; 