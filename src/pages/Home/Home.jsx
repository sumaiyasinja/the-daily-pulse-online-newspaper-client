import { useNavigate } from "react-router-dom";
import CategorizedNews from "../../components/NewsContainer/CategorizedNews";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import Pricing from "../../components/Pricing/Pricing";
import Publishers from "../../components/Publishers/Publishers";
import Sponsor from "../../components/Sponsor/Sponsor";
import States from "../../components/States/States";
import Banner from "./Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("10 seconds have passed");
      setShowModal(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const navigateToSubscriptionPage = () => {
    navigate('/subscription');
  };
  return (
    <div>
      <Banner></Banner>
      <NewsContainer></NewsContainer>
      {showModal && (
        <div className="card w-96 bg-base-100 shadow-xl fixed z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="card-body card-compact">
            <button className=" w-10 rounded-full h-10 text-xl hover:text-2xl text-purple-500 absolute top-1 right-1 -translate-x-1/2" onClick={closeModal}>X</button>
            <p className="text-lg card-title mt-6">Subscribe now to enjoy premium content!</p>
            <button className="btn btn-secondary" onClick={navigateToSubscriptionPage}>Subscribe</button>
          </div>
        </div>
      )}
      <CategorizedNews></CategorizedNews>
      <States></States>
      <Pricing></Pricing>
      <Publishers></Publishers>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
