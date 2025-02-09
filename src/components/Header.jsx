import hoopsnews1 from '../images/HoopsNews2.png';
import userAvatar from '../images/user-avatar.png';

export default function Header() {
  return (
    <header>
      <img src={hoopsnews1} alt="hoopsnews title logo" className='main-title'/>
      <img src={userAvatar} alt="user avatar pic" className='profile-pic'/>
    </header>
  )
}