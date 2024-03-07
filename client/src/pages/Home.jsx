import React, { useState, useEffect } from 'react';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import Slider from 'react-slick';
import { a1,a2 } from '../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

    // Define the images array and settings object
    const images = [a1,a2];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  return (
    <div className="home-container">
      {/* Display the image carousel */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="m-4 shadow-lg rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-64 object-cover transform transition-transform hover:scale-105"
            />
          </div>
        ))}
      </Slider>

      <DisplayCampaigns 
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
}

export default Home;
