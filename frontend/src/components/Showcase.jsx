import { useEffect, useState } from "react";

import image1 from '../assets/garden-1.jpg';
import image2 from '../assets/garden-2.jpg';
import image3 from '../assets/garden-3.jpg';

const images = [image1, image2, image3];

const Showcase = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="showcase">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </section>
    
  );
}

export default Showcase;

// Photo by <a href="https://unsplash.com/@ivyaralianizar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ivy Aralia Nizar</a> on <a href="https://unsplash.com/photos/brown-woven-chair-near-green-plant-UovnNJOG9Vw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@patriwida?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patricia Williams</a> on <a href="https://unsplash.com/photos/plants-on-pot-GeZOAknuz68?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@djan22?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Artur Aleksanian</a> on <a href="https://unsplash.com/photos/garden-on-terrace-during-daytime-6-nCXHU1hKk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      