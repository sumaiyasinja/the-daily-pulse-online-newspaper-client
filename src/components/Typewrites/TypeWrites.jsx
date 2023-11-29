import { Typewriter } from 'react-simple-typewriter'
import Heading from './../Navbar/Heading';
import SectionTitle from '../SectionTitle/SectionTitle';

const TypeWrites = () => {
  return (
    <div className="news-banner text-center ">
        <SectionTitle
            heading="Latest News"
        ></SectionTitle>
        <p className='text-blue-600 text-xl font-medium'>
        <Typewriter
          words={['Breaking News', 'World Events',"Sports News", "Trending News",'Technology Updates', 'Entertainment News', 'Health Updates','Business News']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </p>
    </div>
  );
};

export default TypeWrites;
