import React, {useState} from 'react'
import BlogsContainer from './BlogsContainer'

function Homepage() {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "My First Blog",
            author: "sohaib",
            body: "This is a body"
        },
        {
            id: 2,
            title: "My Second Blog",
            author: "sohaib",
            body: "This is a body"
        },
        {
            id: 3,
            title: "MERN Stack",
            author: "yasmine",
            body: "This is a body"
        },
        {
            id: 4,
            title: "CodeIT winners",
            author: "abdelatif",
            body: "This is a body"
        },
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

  return (
    <div>
        <BlogsContainer blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  )
}

export default Homepage