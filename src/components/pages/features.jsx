import { useNavigate } from "react-router-dom";
import Imagee from "../../assets/image1.png";
import Imageee from "../../assets/image2.png";
import Imageeee from "../../assets/image3.png";

const Features = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the PaymentGateway page
  const handleViewDetails = (property) => {
    navigate("/payment", { state: { property } });
  };

  const properties = [
    {
      id: 1,
      image: Imagee,
      name: "123 Main St",
      description: "3 bd | 2 ba | 1,500 sqft",
      price: "$500,000",
    },
    {
      id: 2,
      image: Imageee,
      name: "456 Oak St",
      description: "4 bd | 3 ba | 2,000 sqft",
      price: "$750,000",
    },
    {
      id: 3,
      image: Imageeee,
      name: "789 Maple Ave",
      description: "2 bd | 1 ba | 1,000 sqft",
      price: "$300,000",
    },
  ];

  return (
    <div
      id="feature"
      className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Properties <span className="text-amber-800">Collections</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Here are some of our featured properties:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <div className="bg-white rounded-lg shadow-lg">
                <img
                  src={property.image}
                  alt="Property"
                  className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
                />
                <div className="py-6 px-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {property.name}
                  </h3>
                  <p className="text-sm text-gray-500">{property.description}</p>
                  <p className="text-lg font-bold text-gray-700 mt-4">
                    {property.price}
                  </p>
                  <button
                    onClick={() => handleViewDetails(property)}
                    className="mt-6 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
