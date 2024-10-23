"use client";

import { toast } from "react-toastify";
import axios from "axios";

const Page = () => {
  const sendEmail = async () => {
    try {
      await axios.get("http://localhost:8000/");
      toast.success("amjilttai");
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };
  console.log("asd");

  return (
    <div>
      <button onClick={sendEmail}>email</button>
    </div>
  );
};

export default Page;
