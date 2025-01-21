// src/components/Comments.tsx
import React, { useEffect } from 'react';

const Comments: React.FC<{ urlink: string }> = ({ urlink }) => {
  useEffect(() => {
    const d = document, s = d.createElement('script');
    s.src = 'https://msg-records.disqus.com/embed.js';
    s.setAttribute('data-timestamp', new Date().toString());
    (d.head || d.body).appendChild(s);
  }, [urlink]);

  return (
    <div id="disqus_thread" className="mt-8"></div>
  );
};

export default Comments;
