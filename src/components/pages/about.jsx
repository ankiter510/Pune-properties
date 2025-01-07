import Image from "../../assets/image4.png";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-gray-100">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-ful rounded-bl-fu"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
            <p className="text-orange-500 font-semibold"> ABOUT US</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            PUNE REALTY
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
          Pune Realty is a RERA registered industry leader in promoting and selling Pune finest high-end construction projects and residential developments. Established by realty estate experts and based on the guiding principles of dedication, determination, and expertise, Pune Realty has established itself by representing some of the affluent builders, properties and contented clientele. Being customers centric we know the best while integrating client and developer objectives. Pune realty offers efficient and feasible solutions that benefit both parties. Over the years we have been delivering services, and experiences with the objective of achieving excellent customer experience, loyalty, and commitment.
            <br/>
            <br/>
            We collaborate as channel partners to provide end-to-end solutions with the most reputable builders in Pune. Owing to the recent technological advancements, we offer unparalleled solutions that appeal to the prerequisites of the Pune real estate market. This includes all types of developments, be it under construction, ready for possession or yet-to-be-launched projects.


          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;