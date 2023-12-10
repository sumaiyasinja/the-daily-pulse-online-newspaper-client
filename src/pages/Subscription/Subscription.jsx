import { useState } from 'react';
import Payment from './Payment/Payment';
import { Helmet } from 'react-helmet-async';

const Subscription = () => {
  const subscriptionOptions = [
    {
      label: '1 Minute Trial',
      duration: 60,
      price: 0.00,
      sno: 1,
    },
    {
      label: '5 Days',
      duration: 5 * 24 * 60 * 60,
      price: 10,
      sno: 2,
    },
    {
      label: '10 Days',
      duration: 10 * 24 * 60 * 60,
      price: 20,
      sno: 3,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null); 

  const handleChange = (event) => {
    const option = subscriptionOptions.find((option) => option.sno === Number(event.target.value));
    setSelectedOption(option);

    console.log(event.target.value);
    console.log(option);
  };

  return (
    <div>
       <Helmet>
        <title>The Daily Pulse | Subscription</title>
      </Helmet>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Subsribe now
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Subsribe now, read premium artices
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400">
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="#"
              className="inline-flex bg-teal-500 
              items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide
               text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3 ">Subscribe </span>
             
            </a>
            <select onChange={handleChange}>
        {subscriptionOptions.map((option) => (
          <option key={option.label} value={option?.sno}>
            {option.label} - ${option.price}
          </option>
        ))}
      </select>
        
          </div>
          <p
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Get 15% discount
            </p>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
          <a
            href="https://www.youtube.com/watch?v=Kxuwz7V8Dgk"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>

   

      {selectedOption && (
        <div>
          <h2>Selected Option:</h2>
          <p>{selectedOption.label} - ${selectedOption.price}</p>
          <Payment subscriptionOption={selectedOption} />
        </div>
      )}
    </div>
  );
};

export default Subscription;
