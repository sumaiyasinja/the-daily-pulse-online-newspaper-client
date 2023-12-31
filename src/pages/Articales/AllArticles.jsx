import { useEffect, useState } from "react";
import useApprovedArticles from "../../hooks/useApprovedArticles";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";
import { Helmet } from 'react-helmet-async';

const AllArticles = () => {
  const [articles] = useApprovedArticles();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles?.filter((article) => {
    return article?.title?.toLowerCase().includes(searchTerm?.toLowerCase());
  });

  const handleViewDetails = (article) => {
    navigate(`/view-deatials/${article?._id}`);

    axiosPublic
      .put(`/articles/update-views/${article?._id}`)

      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("View increased successfully");
        } else {
          toast.error("Updating view went wrong");
          navigate("/");
        }
      });
  };
  return (
    <div>
            <Helmet>
        <title>The Daily Pulse | All Articles</title>
      </Helmet>
      <div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" border-t border-b divide-y">
          <div className="flex justify-end">
            <input
              type="text"
              name="text"
              className="input"
              required
              placeholder="Search by name"
              onChange={handleSearchInputChange}
            />
          </div>
          <InfiniteScroll
            dataLength={articles?.length}
            next={articles?.fetchMoreData}
          >
            {filteredArticles.map((article) => (
              <div key={article._id} className={`grid py-7 sm:grid-cols-4 ${article?.isPremium ? 'rounded my-3 px-4 bg-fuchsia-200 space-y-3': ''}`}>
                <div className="sm:col-span-1">
                  <p className="text-blue-600 capitalize">
                    {Array.isArray(article?.tags)
                      ? article.tags.map((tag, index) => (
                          <span className="mr-2 " key={index}>
                            {tag}
                          </span>
                        ))
                      : article?.tags}
                  </p>

                  <img
                    src={article?.image}
                    alt=""
                    className="w-40 rounded-xl shadow-md"
                  />
                  <div className="space-y-1 text-xs font-semibold tracking-wide ">
                    <p className="text-gray-600">{article?.publisher}</p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <div className="mb-3">
                    <div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                      <p className="text-2xl font-extrabold leading-none sm:text-xl md:text-2xl">
                        {article?.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-justify text-base">
                    {article?.description.length > 150
                      ? article?.description?.substr(0, 150)
                      : article?.description}
                  </p>

                  <div
                    onClick={() => handleViewDetails(article)}
                    className="mt-4 flex justify-center items-center text-blue-800 hover:text-blue-600"
                  >
                    Read More
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
