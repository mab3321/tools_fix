import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgSlider from "../ImgSlider";
import WpHeader from "../Home/Header/WpHeader";
import Footer from "../Home/Footer";
import Recommends from "../Recommends";
const WpMain = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API endpoint you want to fetch data from
    const apiUrl = "http://127.0.0.1:5000/api/data"; // Replace with your API endpoint

    // Use the fetch API or axios to make the HTTP request
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    console.log("Data is Loading...");
  }

  if (error) {
    console.log(error.message);
  }
  const SliderData = data.slice(1, 6);
  const RecomendData = data.slice(6, 20);
  return (
    <>
      <WpHeader />
      <ImgSlider imagesData={SliderData} />
      <Recommends RecomendData={RecomendData} />
      <Footer />
    </>
  );
};

export default WpMain;
