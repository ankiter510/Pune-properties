import { useLocation } from "react-router-dom";

const PaymentGateway = () => {
  const location = useLocation();
  const { property } = location.state || {};

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 mt-16"> {/* Added mt-16 for spacing */}
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Payment Details
        </h1>
        {property ? (
          <>
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {property.name}
            </h2>
            <p className="text-lg text-gray-700 mb-2">{property.description}</p>
            <p className="text-xl font-bold text-gray-900 mb-4">
              Total Price: {property.price}
            </p>

            <form className="grid gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="123"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
              >
                Complete Payment
              </button>
            </form>
          </>
        ) : (
          <p className="text-gray-700 text-center">
            Payment Successful!
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;
