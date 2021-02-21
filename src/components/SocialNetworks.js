import React from "react";

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Snapchat from "../assets/snapchat.svg";
/*import {} from "@fortawesome/free-brands-svg-icons";*/

export const SocialNetworks = () => {
  return (
    <div className="flex justify-around items-center my-4">
      <div className="rounded-full h-14 w-14 mx-4 flex items-center justify-center bg-white shadow">
        <img className="h-8" src={Instagram} alt="Instagram-logo" />
      </div>
      <div className="rounded-full h-14 w-14 mx-4 flex items-center justify-center bg-white shadow">
        <img className="h-8" src={Facebook} alt="Facebook-logo" />
      </div>
      <div className="rounded-full h-14 w-14 mx-4 flex items-center justify-center bg-white shadow">
        <img className="h-8" src={Twitter} alt="Twitter-logo" />
      </div>
      <div className="rounded-full h-14 w-14 mx-4 flex items-center justify-center bg-white shadow">
        <img className="h-8" src={Snapchat} alt="Snapchat-logo" />
      </div>
    </div>
  );
};
