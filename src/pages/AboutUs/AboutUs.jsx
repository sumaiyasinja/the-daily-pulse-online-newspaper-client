import Map from './Map';
import SectionTitle from './../../components/SectionTitle/SectionTitle';

const AboutUs = () => {
    return (
        <div>
            <SectionTitle heading="About Us"></SectionTitle>
            <div className="grid grid-cols-2  gap-3 justfy-center items-center">
            <Map></Map>
            <div className="px-7 py-5 text-justify rounded-lg shadow-md flex bg-slate-100 flex-col justify-center items-center gap-3" >
                <img src="https://i.ibb.co/YpVvsjt/news.png" className='h-[350px] object-scale-down rounded-lg' alt="news image" />
                <p className="text-base text-slate-800">
                The daily pulse is your one trusted source for unbiased, timely, and in-depth news. 
                Our mission is to inform our community, provide a platform for diverse voices,
                and promote civic engagement. Guided by accuracy, fairness, independence, transparency, and community, 
                our team of experienced journalists is dedicated to bringing you the news that matters.
                </p>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;