import { Link } from "react-router-dom"

const BlogList = ({ blogs }) => {
    return (
        <>
            {
                blogs.map(blog => (
                    <div key={blog.id} className="blog-preview">
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default BlogList