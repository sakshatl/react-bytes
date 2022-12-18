import avatarImage from '../../avatar.jpg'
import './avatar.css';

function Avatar() {
  return (
    <div className="avatar">
      <img src={avatarImage} alt="avatar" /> 
    </div>
  )
}


export default Avatar;