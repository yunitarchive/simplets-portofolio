import { FC } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MessageList: FC = () => {
  const messages = []; 

  return (
    <div className="flex flex-col min-h-full bg-neutral-400">
   
      <Header bgColor="bg-neutral-400" />
      
  
      <div className="flex-grow flex flex-col items-center justify-center">
    
        {messages.length > 0 ? (
          <ul className="w-full max-w-xl mx-auto mt-6">
            {messages.map((message, index) => (
              <li
                key={index}
                className="p-4 mb-2 bg-white shadow rounded-lg"
              >
            
                <p className="text-lg font-semibold">{message.subject}</p>
                <p className="text-sm text-gray-600">{message.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-2xl">No messages found</div>
        )}
      </div>
      
 
      <Footer />
    </div>
  );
};

export default MessageList;
