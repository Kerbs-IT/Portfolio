
import profilePicture from '../assets/formal_profile_pic.png'



const Header = (props) => {
  return (
    <header className='d-flex gap-3 align-items-center shadow-sm rounded mb-4'>
          <img src={profilePicture} alt="profile picture" className='rounded shadow' id='profile-img' />
          <div className="header-content">
            <h3 className='h3 fw-bold'>{props.name}</h3>
            <div className="mb-2 d-flex align-items-center">
                <i className="fa-solid fa-location-dot"></i>
                <p className='mb-0'>Cavite, Philippines</p>
              </div>
              {/* Role */}
              <div className="mb-2">
                  Aspiring Web Developer
              </div>
              {/* Email Btn */}

            <div className="mb-2">
                  <button className='btn border  btn-hover-effect'><i className="fa-regular fa-envelope"></i> Send  email</button>
            </div>
              
          </div>  
    </header>
  )
}

export default Header
