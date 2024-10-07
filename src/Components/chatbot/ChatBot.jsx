import vector from "../../images/AI IMG.png";
import repot from "../../images/rebot.gif";
import Avatar from "../../shared/components/Avatar";
import { jwtDecode } from "jwt-decode";
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
// import 'tailwindcss/tailwind.css';


const ChatBot = () => {
  const user= jwtDecode(localStorage.getItem("token"))
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('If the child has a cough, what should we do?');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput('');

      try {
        setLoading(true);
        const response = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAkTKme6O_n6omDRFIWQjUNqSnaEYYeElM',
          {
            "contents": [
              {
                "parts": [
                  {
                    "text": input
                  }
                ]
              }
            ]
          }
        );
        console.log(response);
        const botResponse = response.data.candidates[0].content.parts[0].text;
        setLoading(false);
        setMessages([...newMessages, { text: botResponse, user: false }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setLoading(false);
        setMessages([...newMessages, { text: 'Error: Could not get response from AI', user: false }]);
      }
    }
  };
	return (
		<div className='chatbot p-2' style={{background: "#F5FAFF"}}>
			<div className='container'>
				<div className='card border-0 mb-2'>
					<img src={vector} className='card-img-top' alt='...' />
					<div className='card-body'>
						<div className='row'>
							<div className='col-sm-8'>
                            <div className="bg-white w-full max-w-lg rounded-lg overflow-hidden "
                           >
                            <div className="p-4 h-96 overflow-auto" style={{height: "60vh"}}>
                            {messages.map((msg, index) => (
                                <div key={index} className={`d-flex ${msg.user ? 'justify-content-end' : 'justify-content-start'} mb-2`}>
                                <div className={`rounded-lg p-2 shadow-md overflow-x-hidden flex flex-wrap ${msg.user ? 'bg-success text-white rounded-3' : 'bg-light rounded-3 p-3'}`}>
                                    <ReactMarkdown>
                                    {msg.text}
                                    </ReactMarkdown>
                                </div>
                                </div>
                            ))}
                            {loading && (
                                <div class="wrapper">
                                    <span>Loading ...</span>
                            </div>
                            )}
                            </div>
                            <div className="p-4 border-top d-flex gap-3">
                            <Avatar  username={user.name} proImage={localStorage.getItem("profileImage")} />
                            <input
                                type="text"
                                className="flex-1 form-control p-2 "
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button
                                className="text-white p-2 rounded"
                                style={{backgroundColor: '#32AA90'}}
                                onClick={handleSendMessage}
                            >
                                <FaPaperPlane />
                            </button>
                            </div>
                        </div>
							</div>
							<div className='col-sm-4 mt-5'>
								<div className='report'>
									<div className='card border-0'>
										<div className='card-header rounded-3 fs-4 fw-bold text-center' style={{background: "#bad9fa", color: "#3e63b0"}}>
											Hi, {user.name.split(" ")[0] } 
										</div>
										<img src={repot} alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ChatBot;


// <Avatar username={user.name} proImage={localStorage.getItem("profileImage")} />