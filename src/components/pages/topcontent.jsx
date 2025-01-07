// TopContent Component
const TopContent = () => {
  const items = [
    {
      text: 'Nyati Equinox Exclusive 4BHK of 2100 sqft. @ Bavdhan by Nyati Group',
      link: '#',
    },
    {
      text: 'Astra in Aundh Exclusive Project of 4.5BHK Luxurious Homes',
      link: '#',
    },
    {
      text: 'Kumar Sanctum exclusive 5BHK Homes at Ivory Estate Aundh- Pune',
      link: '#',
    },
    { text: 'Youtube', link: '#' },
    { text: 'Instagram', link: '#' },
    { text: 'For the latest real estate Blogs visit', link: '#' },
  ];

  return (
    <div className="w-full bg-blue-500 text-white left-0 right-0 z-50 mt-14">
      <div className="relative overflow-hidden whitespace-nowrap group">
        <div
          className="flex animate-marquee space-x-8 items-center group-hover:animate-pause"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 px-4">
              <span className="text-lg">{item.text}</span>
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400 transition-colors duration-300"
                onClick={() => window.location.href = item.link}
              >
                More details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind Style */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-flex;
            will-change: transform;
          }
          .group-hover\\:animate-pause {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

// Main Component with Bottom Section
const topcontent = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <TopContent />

      <div className="bg-blue-500 pt-4 pb-4 flex flex-col justify-between w-[70vw] mx-auto border rounded-lg mt-5">
        <div className="flex space-x-2 justify-between items-center w-full px-4">
          <div className="w-1/7">
            <input
              type="text"
              placeholder="BHK"
              className="w-full p-2 border rounded-md "
            />
          </div>

          <div className="w-1/7">
            <input
              type="text"
              placeholder="Project Name"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="w-1/7">
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="w-1/7">
            <input
              type="number"
              placeholder="Min Budget"
              className="w-full p-2 border rounded-md"
              min="3000000"
              max="100000000"
              step="1000000"
            />
          </div>

          <div className="w-1/7">
            <input
              type="number"
              placeholder="Max Budget"
              className="w-full p-2 border rounded-md"
              min="3000000"
              max="100000000"
              step="1000000"
            />
          </div>

          <div className="w-1/7">
            <button className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-blue-500 transition-colors duration-300">
              Search
            </button>
          </div>

          <div className="w-1/7">
            <button className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-blue-500 transition-colors duration-300">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topcontent;
