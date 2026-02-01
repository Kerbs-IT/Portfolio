import heroImage from '../assets/Programming-amico.svg'
import Socials from './Socials.jsx'
function Home() {
  return (
    <div className="d-flex align-items-center home justify-content center w-100">
      <div className="home-tex home-item ">
        <h3 className="geist-font">
          Hello Everyone, <span className="fw-bold"> I'm Kerby Buan</span>
        </h3>
        <h1 className="burgee-font ">
          Web Developer /<br /> Software Developer{" "}
        </h1>
        <div className="socials">
          <Socials />
        </div>
      </div>
      <div className="home-hero home-item ">
        <img src={heroImage} alt="hero image" id="home-hero-image" />
      </div>
    </div>
  );
}

export default Home
