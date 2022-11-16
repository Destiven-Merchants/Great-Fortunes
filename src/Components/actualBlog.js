import React, {useState, useEffect} from 'react';

export default function ActualBlog(){

    const [post, setPost] = useState([]);

    useEffect(() => {
        const url = window.location.pathname
        const field = url.split('/')
        const slug = field[2]

        async function getPost(){
            const data = await fetch(`https://greatfortunesproperties.herokuapp.com/blogpost/${slug}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });

            const res = await data.json()
            setPost(res)
        }
        getPost()
    }, []);

    return (
        <div className="blogpost-container">
            {post.map((blog, index) => 
                <div className="blogpost" key={index}>
                    <h1>{blog.title}</h1>
                    <img src={blog.thumbnail} alt="blog" />
                    <div className="blogpost-content">
                        <p dangerouslySetInnerHTML={{ __html: blog.content}} />
                    </div>
                </div>
            )}
        </div>
    )
}