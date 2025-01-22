import React, { useRef } from "react";
import "../App.css";
import { useState, useEffect } from "react";

const ContactMe = () => {
  // State variables to store user input
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");

  // State variable to handle error messages
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("Enter a valid email address");
  const [nameError, setNameError] = useState("Insufficient name length");
  const [messageError, setMessageError] = useState(
    "Insufficient message length"
  );

  // Function to validate name, email and feedback messaf
  const validate = () => {
    let isValid = true;

    // Name validation
    if (name.length < 3) {
      setNameError("Insufficient name length");
      isValid = false;
    }

    // Email validation
    if (email.length < 6) {
      setEmailError("Enter a valid email address");
      isValid = false;
    }

    // Message validation
    if (message.length < 6) {
      setMessageError("Insufficient message length");
      isValid = false;
    }

    return isValid;
  };

  // // Function to send feedback email
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      // Show alert that feedback has been sent
      alert("Message sent! You'll be contacted shortly!");
    }
  };
  return (
    <>
      {" "}
      {/* <div className="flex flex-col items-center justify-center p-4 border-4 border-double rounded-[30px] h-full border-[#A3865C] shadow-xl"> */}
      <div
        className="w-[40vw] max-w-[500px] max-h-[420px] stab:w-[500px] h-[s400px] shadow-xl rounded-[30px] px-[4%]s py-[s4%] xl:sp-[3%] border-[1px] bordser-r-[#4D4D4] border-y-[#A3865C] border-l-[#A3865C] tab:mt-[10px] xl:mt-0 bg-[] z-20 h-[70vh] px-8 py-4 absolute bottom-[3fvh] left-[7vw] transform -translate-y-[110%] overflow-y-scroll scroll  hover:scale-[1.04] transition ease-in-out duration-500 delay-10 bg-white"
        data-aoss="zoom-in"
        data-aos-duration="2000"
      >
        <form
          onSubmit={sendMessage}
          className="flex flex-col sborder-2 border-black gap-[15px]"
        >
          <div className="flex flex-col gap-2 sborder-2">
            <label htmlFor="name" className="text-[16px]">
              Name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="relative block w-full px-3 py-2 border border-[#A3865C] placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-clrtransparentgreen focus:border-clrtransparentgreen focus:z-10 text-[14px]"
              placeholder="Full Name"
            />
            {name.length >= 1 && name.length < 3 && (
              <p className="text-red-500 text-sm">{nameError}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 sborder-2">
            <label htmlFor="email" className="text-[16px]">
              Email Address
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#A3865C] placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-clrtransparentgreen focus:border-clrtransparentgreen focus:z-10 text-[14px]"
              placeholder="Email Address"
            />
            {email.length >= 1 && email.length < 6 && (
              <p className="text-red-500 text-sm">{emailError}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 sborder-2">
            <label htmlFor="message" className="text-[16px]">
              Got A Message?
            </label>
            <textarea
              id="message"
              name="user_message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-[#A3865C] placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-clrtransparentgreen focus:border-clrtransparentgreen focus:z-10 text-[14px] h-[10pxs] tab:h-[100px]"
              placeholder="Messsage"
            />
            {message.length >= 1 && message.length < 6 && (
              <p className="text-red-500 text-sm">{messageError}</p>
            )}
          </div>
          <div className="flex flex-col sborder-2 border-black gap-[10px] mt-[20px]">
            <div className="sborder-2  hover:scale-[1.02] transition ease-in-out duration-500 delay-10 animate-bounce">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-[#FFEACB] hover:bg-generalClr focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-xl text-[14px] tab:text-lg text-[#A3865C] backdrop-opacity-10 hover:backdrop-opacity-95 hover:bg-[#FFEACB]/10 backdrop-invert"
              >
                Join Us!
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
};

export default ContactMe;
