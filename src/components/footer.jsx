const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="col-span-1">
            <h3 className="text-white text-2xl font-medium mb-4">About Us</h3>
            <p className="text-white mb-4">
              <span className="text-blue-400">Pune Realty</span> is a RERA registered industry lead...
            </p>
            <button className="bg-blue-600 p-2 text-white border-2">
              Read More
            </button>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-2xl font-medium mb-4">Quick Links</h3>
            <ul className="text-white">
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Residential</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Commercial</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Partners</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Testimonials</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-2xl font-medium mb-4">Other Links</h3>
            <ul className="text-white">
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Latest News</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Disclaimer</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-2xl font-medium mb-4">Contact Us</h3>
            <ul className="text-white">
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <p className="text-base text-white">
            &copy; {new Date().getFullYear()} Real Estate Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
