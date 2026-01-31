import heroImage from '../assets/Programming-amico.svg'

function Home() {
  return (
    <div className="d-flex align-items-center home justify-content center">
      <div className="home-text w-50">
        <h3 className="geist-font">
          Hello Everyone, <span className="fw-bold"> I'm Kerby Buan</span>
        </h3>
        <h1 className="burgee-font ">
          Web Developer /<br /> Software Developer{" "}
        </h1>
      </div>
      <div className="home-hero w-50">
        <img src={heroImage} alt="hero image" id="home-hero-image" />
      </div>
    </div>
  );
}

export default Home
