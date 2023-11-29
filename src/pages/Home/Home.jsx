import CategorizedNews from "../../components/NewsContainer/CategorizedNews";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import Publishers from "../../components/Publishers/Publishers";
import Sponsor from "../../components/Sponsor/Sponsor";
import States from "../../components/States/States";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewsContainer></NewsContainer>
            <CategorizedNews></CategorizedNews>
            <States></States>
            <Publishers></Publishers>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;