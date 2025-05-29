const Features = () => {

  return (
    <section className="features-section">
      <h4 className="features-heading">What we provide</h4>
      <div className="features">
        <div className="feature">
          <h3>
            <span className="grey">01.</span> Plant Recommendation
          </h3>
          <div>
            Discover the best plants for your space and climate with our smart recommendation engine.
          </div>
        </div>
        <hr />
        <div className="feature">
          <h3>
            <span className="grey">02.</span> Planting Instructions
          </h3>
          <div>
            Follow our easy-to-understand instructions to ensure successful planting.
          </div>
        </div>
        <hr />
        <div className="feature">
          <h3>
            <span className="grey">03.</span> Care Guidance
          </h3>
          <div>
            Monitor your garden's growth according to our steps and get ready for the day of harvest.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;