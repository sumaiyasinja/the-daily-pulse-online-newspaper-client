import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useArticles from "./../../hooks/useArticles";
import { FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
const ManageAricles = () => {
  const [articles, loading, refetch] = useArticles();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const pageSize = 5;
  const totalPages = Math.ceil(articles.length / pageSize);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentPageArticles = articles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure you want to change status this article ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/articles/change-status-approve/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success("Article approved!", {
              icon: "👏",
            });
          } else {
            toast.error("Failed status changed");
            console.log(res.data);
          }
        });
      }
    });
  };
  const handleDecline = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form?.feedback.value;

    axiosSecure
      .put(`/articles/change-status-decline/${selectedArticleId}`, { feedback })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("Article declined!", {
            icon: "👏",
          });
        } else {
          toast.error("Failed status changed");
          console.log(res.data);
        }
      });

    setSelectedArticleId(null);
  };
  console.log(selectedArticleId);
  const handlePremium = (id) => {
    Swal.fire({
      title: "Are you sure you want to make this article a premium?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/articles/make-premium/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success("Article is premium now!", {
              icon: "👏",
            });
          } else {
            toast.error("Article premium Making Failed");
            console.log(res.data);
          }
        });
      }
    });
  };
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

  // console.log(articles);
  return (
    <div className="container mx-auto px-5 shadow-md h-screen  rounded-lg py-6">
      <Toaster />
      <div id="last-articles w-full ">
        <h1 className="font-bold py-4 uppercase"> articles</h1>
        <div className="">
          <table className="w-full ">
            <thead className="bg-black/60">
              <th className="text-left py-3 px-2 rounded-l-lg">Title</th>
              <th className="text-left py-3 px-2 ">Status</th>
              <th className="text-left py-3 px-2 ">Posted Date</th>
              <th className="text-left py-3 px-2">Author</th>
              <th className="text-left py-3 px-2">Publisher</th>
              <th className="text-left py-3 px-2 ">Actions</th>
              <th className="text-left py-3 px-2 ">Make Premium</th>
              <th className="text-left py-3 px-2 rounded-r-lg"></th>
            </thead>
            {currentPageArticles.map((article) => (
              <tr key={article._id} className="border-b border-gray-700">
                <td className="py-3 px-2 font-bold">
                  <div className="inline-flex space-x-3 items-center">
                    <span>
                      <img
                        className="rounded-full w-8 h-8"
                        src={article?.author?.image}
                        alt={article?.author?.name}
                      />
                    </span>
                    <span>{article?.title}</span>
                  </div>
                </td>
                <td className="py-3 px-2">{article?.status}</td>
                <td className="py-3 px-2">{article?.postedDate?.date}</td>
                <td className="py-3 px-2">
                  {article?.author?.name} <br /> {article?.author?.email}
                </td>
                <td className="py-3 px-2">{article?.publisher}</td>
                {article?.status === "approved" ? (
                  <div className="flex justify-center items-center">
                    <p className="w-16 md:pt-6 text-blue-400 text-center">
                      approved
                    </p>
                  </div>
                ) : article?.status === "declined" ? (
                  <div className="flex justify-center items-center">
                    <p className="w-16 md:pt-6 text-red-500 text-center">
                      declined
                    </p>
                  </div>
                ) : (
                  <td className="py-3 px-2 flex flex-col space-y-2 ">
                    <button
                      className="bg-blue-950 hover:bg-red-500 w-16 px-1 rounded-lg"
                      onClick={() => handleApprove(article._id)}
                    >
                      approve
                    </button>
                    <button
                      className={`bg-blue-950 hover:bg-red-500 w-16 px-1 rounded-lg`}
                      onClick={() => {
                        setSelectedArticleId(article._id);
                        document.getElementById("feedback-modal").showModal();
                      }}
                    >
                      decline
                    </button>
                  </td>
                )}

                <td className="py-3 px-2">
                  {article?.isPremium === "true" ? (
                    <p className="w-16 text-amber-400 text-center">Premium</p>
                  ) : (
                    <button
                      onClick={() => handlePremium(article._id)}
                      className="bg-blue-950 hover:bg-amber-600 hover:text-white w-16 px-1 rounded-lg"
                    >
                      Do it
                    </button>
                  )}
                </td>

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
          <dialog id="feedback-modal" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:text-white hover:bg-teal-600">
                  ✕
                </button>
              </form>
              <form onSubmit={handleDecline}>
                <h3 className="font-bold space-y-2 text-center text-teal-700 text-xl">
                  Declined Article Feedback!
                </h3>
                <p className="text-center py-2 text-gray-400">
                  Give feedback to the author why the article is declined
                </p>

                <label
                  className="font-semibold text-teal-700 "
                  htmlFor="Feedback"
                >
                  Feedback:
                </label>
                <br />
                <textarea
                  className="text-gray-400 bg-base-200 w-full"
                  name="feedback"
                  required
                />
                <br />
                <br />

                <input
                  className="py-2 rounded-lg w-full bg-teal-700 hover:bg-teal-600 text-white"
                  type="submit"
                  value="Decline Article"
                />
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ManageAricles;
