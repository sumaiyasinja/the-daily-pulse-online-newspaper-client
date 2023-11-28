import NewsContainer from "../../components/NewsContainer/NewsContainer";
import Sponsor from "../../components/Sponsor/Sponsor";
import States from "../../components/States/States";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <NewsContainer></NewsContainer>
            <States></States>
        </div>
    );
};

export default Home;