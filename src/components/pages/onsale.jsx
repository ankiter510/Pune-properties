import { useNavigate } from "react-router-dom";
import PropertyImage1 from "../../assets/image6.png";
import PropertyImage2 from "../../assets/image7.png";
import PropertyImage3 from "../../assets/image8.png";

const SaleProperties = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the PaymentGateway or PropertyDetails page
  const handleViewDetails = (property) => {
    navigate("/property-details", { state: { property: { ...property, price: property.salePrice } } });
  };

  // Dynamic data for properties on sale
  const saleProperties = [
    {
      id: 1,
      image: PropertyImage1,
      name: "123 Main St",
      description: "3 bd | 2 ba | 1,500 sqft",
      originalPrice: "$500,000",
      salePrice: "$250,000",
    },
    {
      id: 2,
      image: PropertyImage2,
      name: "456 Oak St",
      description: "4 bd | 3 ba | 2,000 sqft",
      originalPrice: "$750,000",
      salePrice: "$500,000",
    },
    {
      id: 3,
      image: PropertyImage3,
      name: "789 Maple Ave",
      description: "2 bd | 1 ba | 1,000 sqft",
      originalPrice: "$300,000",
      salePrice: "$200,000",
    },
  ];

  return (
    <div
      id="sale"
      className="w-full min-h-screen p-2 flex items-center bg-gray-100"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          <span className="text-orange-500">DISCOVER OVER</span>
        </h2>
        <p className="text-4xl text-gray-700 mb-8 font-bold text-center">
          PROPERTY COLLECTION
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {saleProperties.map((property) => (
            <div
              key={property.id}
              className="hover:shadow-md hover:shadow-[#040c16]"
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
                    <del>{property.originalPrice}</del> On Sale Now:{" "}
                    {property.salePrice}
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

export default SaleProperties;
