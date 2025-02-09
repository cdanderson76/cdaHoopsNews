import { posts } from '../data';
import Post from './Post';

export default function PostList() {
  
  const myPosts = posts.map((post, index) => {
    return (
      <Post name={post.name}
            post={post}
            key={post.name}
            username={post.username}
            location={post.location}
            avatar={post.avatar}
            likes={post.likes}
            index={index}
            />
    )
  });

  return (
    <div>
      {myPosts}
    </div>
  )
}