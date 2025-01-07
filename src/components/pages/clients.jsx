import Client1 from "../../assets/client1.png";
import Client4 from "../../assets/client4.png";
import Client5 from "../../assets/client5.png";

const OurClients = () => {
  return (
    <div id="client" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-lg text-gray-700 mb-8">
            See what our clients have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Client 1 */}
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src={Client1}
              alt="Adam Johnson"
            />
            <div className="bg-white p-8 rounded-lg shadow-md mt-4">
              <p className="text-lg text-gray-700 mb-4">
                <p className=" font-semibold">Project :  VTP BELLISIMO Hinjewadi</p>
              Working with Pune Realty has been a positive experience overall. The sales team are interactive, well-informed, and helpful. They are skilled at negotiating and work efficiently to seal the deal. The team kept me apprised of developments concerning the project on a frequent basis. There was a high level of professionalism and openness in all dealings. 
              </p>
              <p className="text-gray-500">Adam Johnson, Homebuyer</p>
            </div>
          </div>
          
          {/* Client 2 */}
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src={Client4}
              alt="Michael Smith"
            />
            <div className="bg-white p-8 rounded-lg shadow-md mt-4">
              <p className="text-lg text-gray-700 mb-4">
                <p className="font-semibold">Project : Kohinoor Tinsel Town 2.0, Hinjewadi Phase-2, 3BHK. </p>
                Pune Realty was my first option out of all the Real estate consultants Im familiar with at Pune. Discussion with the team was simple. They comprehended my need and made property recommendations that were spot-on. They always show up on time for scheduled appointments. They maintain a clean and inviting
              </p>
              <p className="text-gray-500">Michael Smith, Home Seller</p>
            </div>
          </div>

          {/* Client 3 */}
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src={Client5}
              alt="David Brown"
            />
            <div className="bg-white p-8 rounded-lg shadow-md mt-4">
              <p className="text-lg text-gray-700 mb-4">
              <p className="font-semibold">Project : Kohinoor Tinsel Town 2.0, Hinjewadi Phase-2, 3BHK. </p>
              If you re looking for a trustworthy guide who knows their way around the real estate market inside and out, look no further than Pune Realty. The team makes an effort to learn about the specifics of your need so that they can provide you with tailored suggestions. You can trust in their sincere approach because they have a wealth of 
              </p>
              <p className="text-gray-500">David Brown, Property Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
