import './index.css'
import hoopsnews1 from './images/HoopsNews2.png';
import comment from './images/comment.png';
import dm from './images/dm.png';
import heart from './images/heart.png';
import heartFilled from './images/heart-filled.png';
import userAvatar from './images/user-avatar.png';
import leftarrow from './images/left.svg';
import rightarrow from './images/right.svg';
import { posts } from './data';
import { useState } from 'react';

export default function App() {

  return (
    <main className='canvas'>
      <Header />
      <PostList />
    </main>
  )
}

function Header() {
  return (
    <header>
      <img src={hoopsnews1} alt="hoopsnews title logo" className='main-title'/>
      <img src={userAvatar} alt="user avatar pic" className='profile-pic'/>
    </header>
  )
}

function PostList() {
  
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

function Post({name, 
               username, 
               location, 
               avatar, 
               likes,  
               post,
               mapIndex}) {

  const [ index, setIndex ] = useState(0);
  const [ showLiked, setShowLiked ] = useState(false);

  function nextPic() {
    if(index < post.post.length - 1) {
      setIndex(prev => prev + 1);
    } else if(index === post.post.length - 1) {
      setIndex(0);
    }
  };

  function prevPic() {
    if(index > 0) {
      setIndex(prev => prev - 1);
    } else if(index === 0) {
      setIndex(2);
    }
  }

  function likePost() {
    setShowLiked(prev => !prev);
  }

  return (
    <>
      <div className='info-container'>
        <div>
          <img src={avatar} alt="poster's avatar" className='avatar-image'/>
        </div>
        <div>
          <h2>{name}</h2>
          <p>{location}</p>
        </div>
      </div>
      <div className='container'>
        <img src={leftarrow} alt="" className='arrow left-arrow' onClick={prevPic}/>
        <img src={post.post[index]} alt={post.name} className='main-image' />
        <img src={rightarrow} alt="" className='arrow right-arrow' onClick={nextPic}/>
        <div className='icon-container'>
          <img src={showLiked ? heartFilled : heart} alt="" className='icons' onClick={likePost}/>
          <img src={comment} alt="" className='icons'/>
          <img src={dm} alt="" className='icons'/>
        </div>
        <h3>{showLiked ? likes + 1 : likes} likes</h3>
        <p className='comment'><strong>{username}</strong> {post.comment[index]}</p>
      </div>
    </>
  )
}