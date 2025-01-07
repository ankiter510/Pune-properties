import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import image7 from '../../assets/image7.jpeg';
import image8 from '../../assets/image8.jpeg';

const ImageGallery = () => {
  const images = [
    { id: 1, 
        src: image1, 
        caption: 
        <div>
            <p>Bavdhan</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div> 
    },
    { id: 2, 
        src: image2, 
        caption:
        <div>
            <p>Baner/Balewadi</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div>   
    },
    { id: 3, 
        src: image3, 
        caption:
        <div>
            <p>Anudh/Pimple sudegar</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div> 
    },
    { id: 4, 
        src: image4, 
        caption: 
        <div>
            <p>Mahalunge</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div> 
         
    },
    { id: 5, 
        src: image5,
        caption: 
        <div>
            <p>Wakad/Tathwade</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div> 
    },
    { id: 6, 
        src: image6, 
        caption:
        <div>
            <p>Hinjewadi</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div>
    },
    { id: 7, 
        src: image7, 
        caption:
        <div>
            <p>Punawala</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div>
    },
    { id: 8, 
        src: image8, 
        caption:
        <div>
            <p>Hinjewadi</p>
            <span className='text-base font-medium'>+21 Projects</span>
        </div> 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-10 mt-10">Top Locations</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 ">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group w-60 h-60 overflow-hidden rounded-lg shadow-md flex items-center justify-center bg-white border"
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-60 h-60 object-cover transform transition duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-5 left-0 text-white text-lg font-bold p-1 w-full text-lesft">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
