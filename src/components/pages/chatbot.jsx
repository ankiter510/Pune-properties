import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: getBotResponse(userInput) },
      ];
      setMessages(newMessages);
      setUserInput('');
    }
  };

  const getBotResponse = (message) => {
    // Convert the message to lowercase for easier comparison
    const msg = message.toLowerCase();
  
    // Respond based on different keywords or phrases related to real estate
    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello! How can I assist you with your real estate needs today? Are you looking to buy, rent, or sell a property?';
    } else if (msg.includes('property') || msg.includes('real estate')) {
      return 'We have a variety of properties available for sale and rent. What type of property are you looking for?';
    } else if (msg.includes('buy')) {
      return 'Looking to buy a property? Please let me know your preferred location, budget, and property type, and I can help you find the best options.';
    } else if (msg.includes('rent')) {
      return 'Looking to rent a property? Tell me more about your preferred location, budget, and the type of property you are interested in.';
    } else if (msg.includes('sell')) {
      return 'If you’re looking to sell your property, I can help you with the process. Please provide details like the location and type of property, and I’ll get in touch with you.';
    } else if (msg.includes('location')) {
      return 'Which location are you interested in? We have properties in various cities and neighborhoods. Please provide more details so I can assist you better.';
    } else if (msg.includes('price') || msg.includes('budget')) {
      return 'What is your budget for the property? Please specify the price range so I can filter the best options for you.';
    } else if (msg.includes('apartment')) {
      return 'Are you looking for apartments? I can provide you with listings based on your preferences for size, location, and price.';
    } else if (msg.includes('house')) {
      return 'Looking for a house? I can help you find houses for sale or rent. Please share your preferred location and budget.';
    } else if (msg.includes('details')) {
      return 'Please provide more details about the property you are looking for. For example: location, size, number of rooms, and your budget.';
    } else if (msg.includes('schedule visit') || msg.includes('view property')) {
      return 'Would you like to schedule a visit to any of our properties? Please share the property details, and I’ll help arrange a viewing.';
    } else if (msg.includes('documents') || msg.includes('paperwork')) {
      return 'To buy or rent a property, certain documents will be required. These may include ID proof, address proof, and income details. Let me know if you need more information on the required documents.';
    } else if (msg.includes('loan') || msg.includes('mortgage')) {
      return 'Need help with financing? I can provide you with information about home loans and mortgages. What is your preferred loan amount and tenure?';
    } else if (msg.includes('offer') || msg.includes('discount')) {
      return 'We sometimes offer discounts on certain properties or waive certain fees. Let me know if you would like to inquire about current offers!';
    } else if (msg.includes('availability') || msg.includes('status')) {
      return 'I can check the availability of a specific property for you. Please provide the name or address of the property you are interested in.';
    } else if (msg.includes('neighborhood') || msg.includes('area')) {
      return 'Are you looking for information about the neighborhood? I can tell you more about the amenities, schools, hospitals, and shopping areas around the property you’re interested in.';
    } else if (msg.includes('buying process') || msg.includes('renting process')) {
      return 'The buying process includes steps such as selecting a property, negotiating the price, and finalizing documents. If you are renting, you’ll need to sign a lease agreement and pay a security deposit. Would you like to know more?';
    } else if (msg.includes('contract') || msg.includes('lease')) {
      return 'If you’re looking for details on contracts, we can provide lease agreements, sales contracts, and other important documents based on your needs.';
    } else if (msg.includes('mortgage calculator') || msg.includes('loan calculator')) {
      return 'I can assist you with calculating mortgage or loan payments. Please provide the loan amount, interest rate, and tenure, and I will calculate your monthly EMI.';
    } else if (msg.includes('home inspection')) {
      return 'A home inspection is an important part of the buying process. Would you like to schedule a property inspection or need more details about it?';
    } else if (msg.includes('closing') || msg.includes('finalize')) {
      return 'Once everything is in place, we can help you with the closing process, including signing the final documents and transferring ownership. Let me know if you need assistance with that.';
    } else if (msg.includes('investment') || msg.includes('property investment')) {
      return 'Interested in property investment? I can provide you with information on the best investment opportunities in the market.';
    } else if (msg.includes('legal help') || msg.includes('lawyer')) {
      return 'We can connect you with legal professionals who can assist with property-related legal matters such as contracts, disputes, and ownership rights.';
    } else if (msg.includes('feedback')) {
      return 'We value your feedback! Please let us know how we can improve our services or if you have any concerns about the property you are interested in.';
    } else {
      return 'I’m sorry, I didn’t quite understand that. Can you try asking something else related to real estate?';
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        <div style={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.chatMessage,
                ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.chatInput}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.inputField}
          />
          <button onClick={handleSend} style={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  chatbotContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
  },
  chatWindow: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatMessages: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
  chatMessage: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '80%',
    lineHeight: '1.4',
  },
  userMessage: {
    backgroundColor: '#c8e6c9',
    color: '#2c6e3f',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    alignSelf: 'flex-start',
  },
  chatInput: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
  },
  inputField: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ChatBot;
