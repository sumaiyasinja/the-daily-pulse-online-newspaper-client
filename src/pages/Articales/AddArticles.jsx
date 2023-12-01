import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from './../../hooks/useAxiosPublic';
import Select from 'react-select';
import useAuth from './../../hooks/useAuth';
import { Helmet } from "react-helmet-async";

const AddArticles = () => {
  const {user} =useAuth()
    const axiosPublic = useAxiosPublic();

    const publisherOptions = [
        { value: 'nytimes', label: 'The New York Times' },
        { value: 'thedailypulse', label: 'The Daily Pulse' },
      ];
      const tagOptions = [
        { value: 'free', label: 'Free' },
        { value: 'premium', label: 'Premium' },
      ];

  const handleAddarticle = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    // const image = form.image.value || 'https://i.ibb.co/5sS0XwK/Rectangle-1.png'; 
    const description = form.description.value;
    const publisher = form.publisher?.value || 'not specified'; 
    const tags = form.tags?.value || 'free'; 
    const views = 0;
    const status = "pending";
    const currentDate  = new Date();

    const postedDate= {
        day: currentDate .toLocaleString('en-US', { weekday: 'long' }),
        date: currentDate .toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
        time: currentDate .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric'}),
      }

    
    const author = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    const newArticle = {
      title,
    //   image,
      description,
      tags,
      publisher,
      author,
      views,
      status,
      postedDate
     ,

    };

    console.log(newArticle);

    // axiosPublic.post('/articles', newArticle)
    // .then(data => {
    //   console.log(data);
    //   if(data.data.acknowledged){
    //     form.reset();
    //     toast.success('article added successfully')
    //   }else{
    //     toast.error(data.data.message)
    //   }
    //   }
    // )

  };

  return (
    <section className="bg-base-200 dark:bg-gray-900 pt-14 container mx-auto rounded-xl py-3">
            <Helmet>
            <title>The Daily Pulse | Add a new article
                </title>
                </Helmet> 
      <Toaster />
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-4xl text-slate-800 font-bold  dark:text-white py-2">
          Add a new article
        </h2>

        <form onSubmit={handleAddarticle}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Article Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type article name"
                required
              />
            </div>
            {/* <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Article image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Img URL of your article"
                required
              />
            </div> */}
           
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Article Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type article description (max length 100 characters)"
                required
              />
            </div>
            {/* Tags,publisher selecte options */}
            <div className="sm:col-span-2">
              <label htmlFor="publisher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Article publisher
              </label>
              <Select
                    name="publisher"
                    options={publisherOptions}
                />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
tag
              </label>
              <Select
                    id="tags"
                    name="tags"
                    options={tagOptions}
                />            </div>
           
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              className="font-medium mt-3 text-center bg-primary-700 custom-btn px-5 py-2.5 rounded-lg focus:ring-4"
              value="Add article"
            />
          </div>
        </form>
      </div>
    </section>
  );
};


export default AddArticles;