
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import useMyArticles from '../../hooks/useMyArticles';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const MyArticles = () => {
    const [articles, refetch] = useMyArticles();
    const axiosSecure = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticleId, setSelectedArticleId] = useState(null);
    console.log(articles);
  
    const pageSize = 5;
    const totalPages = Math.ceil(articles.length / pageSize);
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    const currentPageArticles = articles.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    const handleDeleteArticle = (id) => {
        Swal.fire({
          title: "Are you sure you want to delete this?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sure!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/articles/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                toast.success("Article is deleted!", {
                  icon: "👏",
                });
              } else {
                toast.error("Article deletion Failed");
                console.log(res.data);
              }
            });
          }
        });
      };
    
    return (
        <div className="container mx-auto px-5 shadow-md h-screen  rounded-lg py-6">
        <Toaster />
        <div id="last-articles w-full ">
          <h1 className="font-bold py-4 uppercase">My articles</h1>
          <div className="">
            <table className="w-full ">
              <thead className="bg-black/60">
                <th className="text-left py-3 px-2 rounded-l-lg">Serial No</th>
                <th className="text-left py-3 px-2 ">Title</th>
                <th className="text-left py-3 px-2 ">details</th>
                <th className="text-left py-3 px-2 ">Status</th>
                <th className="text-left py-3 px-2 ">Is Premium</th>
                <th className="text-left py-3 px-2 ">Update</th>
                <th className="text-left py-3 px-2 rounded-r-lg">Delete</th>
              </thead>
              { currentPageArticles.length === 0 ? (
                <div className='w-full flex justify-center items-center'>

                  <p className="py-3 px-7 text-center text-xl">No articles found</p>
                </div>
              ):
              currentPageArticles.map((article, index) => (
                <tr key={article._id} className="border-b border-gray-700">
                    <td>{index +1}</td>
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      
                      <span>{article?.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2"><button className='hover:underline'>view details</button></td>
                  
                  {article?.status === "approved" ? (
                                        <td className="py-3  px-2">approved</td>

                  ) : article?.status === "declined" ? (
                    <>
                    <td className="py-3 px-2">
                      <span className=" text-gray-500 text-center">
                        declined
                      </span> <br />
                      <button className='text-amber-500 hover:underline  rounded-2xl '
                      onClick={() => {
                        setSelectedArticleId(article._id);
                        document.getElementById("feedback-modal").showModal();
                      }}
                      >view feedback</button>
                    </td></>
                  ) : (
                    <td className="py-3 px-2 flex flex-col space-y-2 text-gray-500">
                      
                        pending
                     
                    </td>
                  )}
  
                  <td className="py-3 px-2">
                    {article?.isPremium === "true" ? (
                      <p className="">yes</p>
                    ) : (
                        <p className="">no</p>

                    )}
                  </td>
                  <td className='hover:underline'><Link to={`/UpdateArticle/${article._id}`}>update</Link></td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center space-x-3">
                      <button
                        onClick={() => handleDeleteArticle(article._id)}
                        className="hover:text-red-500"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                  {/* <td>{article?.feedback}</td> */}
                  <dialog id="feedback-modal" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:text-white hover:bg-teal-600">
                    ✕
                  </button>
                </form>
                  <h3 className="font-bold space-y-2 text-center text-teal-700 text-xl">
                    Declined Article Feedback!
                  </h3>
                  <p className="text-center py-2 text-gray-400">
                    Given feedback to the author why the article is declined
                  </p>
  
                  <p className="text-center py-2 text-gray-400">{article?.feedback}</p>
  
                 
              </div>
            </dialog>
             
                </tr>
                
              ))}
            </table>
            {/* pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`mt-4 rounded-full w-8 h-8 ${
                        currentPage === page ? "bg-blue-900" : "bg-transparent"
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            )}
            {/* declined article modal */}
            
          </div>
        </div>
      </div>
    );
};

export default MyArticles;