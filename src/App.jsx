import './index.css'
import hoopsnews1 from './images/HoopsNews2.png';
import comment from './images/comment.png';
import dm from './images/dm.png';
import heart from './images/heart.png';
import heartFilled from './images/heart-filled.png';
import userAvatar from './images/user-avatar.png';
import leftarrow from './images/leftarrow.png';
import rightarrow from './images/rightarrow.png';
import { posts } from './data';

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
  return (
    <div>
      <Post />
    </div>
  )
}

function Post() {

  const currIndex = posts[0];

  return (
    <>
      <div className='info-container'>
        <div>
          <img src={currIndex.avatar} alt="poster's avatar" className='avatar-image'/>
        </div>
        <div>
          <h2>{currIndex.name}</h2>
          <p>{currIndex.location}</p>
        </div>
      </div>
      <div className='container'>
        <img src={leftarrow} alt="" className='arrow left-arrow'/>
        <img src={currIndex.post[2]} alt={currIndex.name} className='main-image'/>
        <img src={rightarrow} alt="" className='arrow right-arrow'/>
        <div className='icon-container'>
          <img src={heart} alt="" className='icons'/>
          <img src={comment} alt="" className='icons'/>
          <img src={dm} alt="" className='icons'/>
        </div>
        <h3>{currIndex.likes} likes</h3>
        <p className='comment'><strong>{currIndex.username}</strong> {currIndex.comment}</p>
      </div>
    </>
  )
}