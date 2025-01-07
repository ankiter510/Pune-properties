import { useState } from 'react';
import Slider1 from '../../assets/Slider1.jpg';
import Slider2 from '../../assets/Slider2.jpeg';
import Slider3 from '../../assets/Slider3.jpg';
import Slider4 from '../../assets/Slider4.jpeg';
import Slider5 from '../../assets/Slider5.jpg';
import Slider6 from '../../assets/Slider6.jpg';
import Slider7 from '../../assets/Slider7.jpg';
import Slider8 from '../../assets/Slider8.jpg';
import Slider9 from '../../assets/Slider9.jpg';
import Slider10 from '../../assets/Slider10.jpg';

const Slider = () => {
  const slides = [
    {
      image: Slider1,
      date: 'August 24th, 2023',
      heading: 'Pune Best Residential Projects for First-Time Homebuyers',
      paragraph: 'This is the first slide.'
    },
    {
      image: Slider2,
      date: 'December 14th, 2023',
      heading: 'The Allure of Modern Living in Flats',
      paragraph: 'This is the second slide.'
    },
    {
      image: Slider3,
      date: 'November 27th, 2023',
      heading: 'Creating Your Ideal Home: The Art of Choosing the Perfect Surroundings',
      paragraph: 'This is the third slide.'
    },
    {
      image: Slider4,
      date: 'November 6th, 2023',
      heading: 'Vastu and Architecture needs for Interior Design',
      paragraph: 'This is the fourth slide.'
    },
    {
      image: Slider5,
      date: 'October 21st, 2023',
      heading: 'A Guide to Buying Your New Home in Today Market',
      paragraph: 'This is the fifth slide.'
    },
    {
      image: Slider6,
      date: 'October 6th, 2023',
      heading: 'Prime Picks: Top 10 Luxury Investment Projects for NRIs in Pune',
      paragraph: 'This is the sixth slide.'
    },
    {
      image: Slider7,
      date: 'September 29th, 2023',
      heading: 'The Phoenix Rises: Pune Real Estate Market after COVID-19',
      paragraph: 'This is the seventh slide.'
    },
    {
      image: Slider8,
      date: 'September 12th, 2023',
      heading: 'Luxury Villa Living : What to Look for in High-End Properties',
      paragraph: 'This is the eighth slide.'
    },
    {
      image: Slider9,
      date: '2025-01-02',
      heading: 'Luxury Villa Living : What to Look for in High-End Properties',
      paragraph: 'This is the ninth slide.'
    },
    {
      image: Slider10,
      date: '2025-01-02',
      heading: 'Luxury Villa Living : What to Look for in High-End Properties',
      paragraph: 'This is the tenth slide.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog & News</h1>
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-1/3 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg mx-2"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-500">{slide.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-gray-800">
                {slide.heading}
              </h2>
              <p className="mt-2 text-gray-600 text-center">{slide.paragraph}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Slider />
    </div>
  );
};

export default App;
