import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('Jenny')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
            title,
            body: content,
            author
        }
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a new Blog</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Blog Title</label>
                    <input 
                        required
                        type="text"
                        className="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label>Blog Content</label>
                    <textarea
                        className="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>

                <div>
                    <label>Author</label>
                    <select 
                        className="author" 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option>Kelly</option>
                        <option>Marlin</option>
                        <option>Jenny</option>
                    </select>
                </div>
                {!isPending && <button className="addBtn">Add Blog</button>}
                {isPending && <button className="addBtn">Adding blog ...</button>}
                
            </form>
        </div>
    )
}

export default Create