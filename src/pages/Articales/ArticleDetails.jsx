import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const ArticleDetails = () => {
  const [article, setArticle] = useState([]);
  const {id} = useParams()
  console.log(id);
    const axiosSecure = useAxiosSecure();

     useEffect(() => {
       axiosSecure.get(`/article-deatials/${id}`)
         .then((res) => {
           console.log(res.data);
           setArticle(res.data);
         })
         .catch((err) => {
           console.log(err);
         });
     }, [axiosSecure,id]);
         
    // console.log(article);
  return (
    <div className="max-w-screen-lg mx-auto"> 
          <Helmet>
        <title>The Daily Pulse | {article?.title}</title>
      </Helmet>
      {/* main */}
      <main className={`mt-10 ${article?.isPremium && "rounded border shadow-md border-purple-400-200 px-5 py-3"}`}>
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
         
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {article?.title}
            </h2>
            
            
            <a
              href="#"
              className="py-2 text-blue-700 inline-flex items-center justify-center text-base font-semibold  mb-2"
              >
              {article?.tags}
            </a>
              <p className='text-gray-600'>isPremium: {article?.isPremium}</p>
          </div>
          <img
            src={article?.image} 
            alt="article cover"
            className="w-full"
          />
        </div>
        <div className='text-gray-500'> 
          <p>
          Posted on :
          <span> {article?.postedDate?.day}, </span>  
         {article?.postedDate?.date}
           <span> | </span>
          {article?.postedDate?.time}</p></div>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 text-justify lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
{article?.description}          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src={article?.author?.image}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm"> {article?.author?.name}</p>
                  <p className="font-semibold text-gray-600 text-xs"> Author </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
              {article?.author?.name} writes about {article?.tags} Yourself required no at thoughts delicate landlord it be. Branched dashwood do
                is whatever it.
              </p>
              <div className="px-2 py-1 text-gray-100 bg-gray-700 flex w-full items-center justify-center rounded-2xl">
                Publisher: {article?.publisher}
                <i className="bx bx-user-plus ml-2"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* main ends here */}
      <br />
      <br />
      <hr />
      {/* <img src="https://i.ibb.co/kQgG3sN/ad-tea.jpg" alt="" /> */}
      {article?.isPremium ? <p className='text-center'>ad free service in premium article</p>:
      
      <Link to={'https://shop.shajgoj.com/product/meril-petroleum-jelly/'} target='_blank' className='w-full'> ad:
      <img src="https://i.ibb.co/c2yYtHJ/ad.png" className='w-full' alt="" />

      </Link>
      }
            <hr />

    </div>
  );
};

export default ArticleDetails;
