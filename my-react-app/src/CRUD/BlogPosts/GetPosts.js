import React, {useEffect, useState} from 'react';
import { getPosts } from './service/BlogPostsService';
function GetPosts() {
    const [blogs, setPosts] = useState([]);

	useEffect(() => {
		getPosts().then(res => {
			setPosts(res.items);
		})
	}, []);
    
    
  return (
    <div>
				<h1>Blog Posts:</h1>

				{blogs.map(blog => (
					<div key={blog.id}>
						<h3>{blog.id} - {blog.headline} - {blog.alternativeHeadline}</h3>
            <p> {blog.description} </p>
					</div>
				))}
			</div>
  );

}

export default GetPosts;