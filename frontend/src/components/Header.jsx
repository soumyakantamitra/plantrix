import pot from "../assets/pot-1.jpg";

const Header = () => {

  return (
    <header>
      <div className="heading">
        <div className="heading-line-1">
          <h1>Your path to thriving</h1>
        </div>
        <div className="heading-line-2">
          <div>
            <h1>green</h1>
          </div>
          <img src={pot} alt="" />
          <div>
            <h1>living</h1>
          </div>
        </div>
      </div>
      <div className="abstract">
        <div>
          We believe sustainable living begins at home. Discover the joy of gardening and <br />
          transform your space into a thriving green oasis, no matter where you live.
        </div>
        <a href="#results-page">
          Find Your Plantation
        </a>
      </div>
    </header>
  );
}

export default Header;