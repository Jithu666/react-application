import Divider from "./Divider";
import { useState } from "react";
import { Link } from "react-router-dom";
import lockIcon from "../assets/lock.png";
import xLogo from "../assets/twitter.png";
import fbLogo from "../assets/images.webp";
import emailIcon from "../assets/email.svg";
import companyIcon from "../assets/company.png";
import phoneIcon from "../assets/phone-icon.png";
import profileIcon from "../assets/profile.png";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("E-Mail:", email);
    console.log("Country Code:", countryCode);
    console.log("Phone-Number:", phoneNumber);
    console.log("Role:", companyType);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-center mt-10 font-medium text-3xl">Create Account</h1>
      <p className="text-center mt-1 mb-2 text-sm">
        Get started with your free account
      </p>

      {/* Login with X */}
      <div className="flex flex-col gap-4">
        <Link to="https://x.com/i/flow/login">
          <button className="flex flex-row justify-center items-center bg-blue-400 text-white font-normal text-center w-fit mt-2 mb-2 px-20 py-2 rounded-md ml-6 cursor-pointer">
            <img
              src={xLogo}
              alt="X Logo"
              className="flex flex-row w-6 h-6 mr-2"
            />
            Login via Twitter
          </button>
        </Link>
      </div>

      {/* Login with Facebook */}
      <Link to="https://www.facebook.com/">
        <div className="flex flex-col gap-4">
          <button className="flex flex-row justify-center items-center bg-sky-950 text-white font-normal text-center w-fit mt-2 mb-2 px-18 py-2 rounded-md ml-6 cursor-pointer">
            <img
              src={fbLogo}
              alt="Facebook Logo"
              className="flex flex-row w-6 h-6 mr-1"
            />
            Login via Facebook
          </button>
        </div>
      </Link>

      <Divider />
      {/* Form Begins Here. */}
      <div>
        <form onSubmit={handleFormSubmission}>
          {/* Name */}
          <div className="reative flex items-center mt-4 pl-6">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="absolute w-10 h-10 border border-gray-300 bg-gray-100 p-2"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="rounded border border-gray-300 flex-row h-10 w-fit px-16 bg-white"
            />
          </div>

          {/* Email */}
          <div className="reative flex items-center mt-4 pl-6">
            <img
              src={emailIcon}
              alt="Profile Icon"
              className="absolute w-10 h-10 border border-gray-300 bg-gray-100 p-2"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="rounded border border-gray-300 flex-row h-10 w-fit px-16 bg-white"
            />
          </div>

          {/* Phone */}
          <div className="reative flex flex-row items-center mt-4 pl-6">
            <div className="flex flex-row border border-gray-300">
              <img
                src={phoneIcon}
                alt="Phone Icon"
                className="absolute w-10 h-10 border border-gray-300 bg-gray-100 p-3"
              />
              <input
                type="text"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                placeholder="+91"
                className="flex flex-row rounded h-10 w-28 pl-16 bg-white"
              />
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="9844******"
                className="flex flex-row rounded border w-fit pl-4 bg-white"
              />
            </div>
          </div>

          {/* Company */}
          <div className="reative flex items-center mt-4 pl-6">
            <img
              src={companyIcon}
              alt="Company Icon"
              className="absolute w-10 h-10 border border-gray-300 bg-gray-100 p-2"
            />
            <input
              type="text"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              placeholder="Select job type"
              className="rounded border border-gray-300 flex-row h-10 w-fit px-16 bg-white"
            />
          </div>

          {/* Create Password */}
          <div className="reative flex items-center mt-4 pl-6">
            <img
              src={lockIcon}
              alt="Lock Icon"
              className="absolute w-10 h-10 border border-gray-300 bg-gray-100 p-3"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              className="rounded border border-gray-300 flex-row h-10 w-fit px-16 bg-white"
            />
          </div>

          {/* Repeat Password */}
          <div className="reative flex items-center mt-4 pl-6">
            <img
              src={lockIcon}
              alt="Lock Icon"
              className="absolute w-10 h-10 border border-gray-300 bg-gray-100 p-3"
            />
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
              className="rounded border border-gray-300 flex-row h-10 w-fit px-16 bg-white"
            />
          </div>

          {/* Create Account Button */}
          <div className="flex flex-col gap-4">
            <button className="flex flex-row justify-center items-center bg-blue-500 text-white font-normal text-center w-fit mt-4 mb-2 px-26 py-2 rounded-md ml-6 cursor-pointer">
              Create Account
            </button>
          </div>
          {/* Create Account Button */}
        </form>
        <p>
          Have an account?{" "}
          <Link to="/">
            <span className="text-sky-400">Log In</span>
          </Link>
        </p>
      </div>
      {/* Form Ends Here */}
    </div>
  );
};

export default RegistrationPage;
