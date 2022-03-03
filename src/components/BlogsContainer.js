import React from 'react'

function BlogsContainer({title, blogs, handleDelete}) {
  return (
    <div>
        <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className='blogs-container' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default BlogsContainer