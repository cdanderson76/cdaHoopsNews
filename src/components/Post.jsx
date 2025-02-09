import comment from '../images/comment.png';
import dm from '../images/dm.png';
import heart from '../images/heart.png';
import heartFilled from '../images/heart-filled.png';
import leftarrow from '../images/left.svg';
import rightarrow from '../images/right.svg';
import { useState } from 'react';

export default function Post({name, 
  username, 
  location, 
  avatar, 
  likes,  
  post}) {

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