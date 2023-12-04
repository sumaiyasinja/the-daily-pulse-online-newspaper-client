import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import { Helmet } from "react-helmet-async";
import useMyArticles from "../../hooks/useMyArticles";
import usePublishers from "../../hooks/usePublishers";

const UpdateArticle = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [selectedTags, setSelectedTags] = useState([]);
  const [articles] = useMyArticles();
  const [publishers] = usePublishers();

  const tagOptions = [
    { value: "politics", label: "politics" },
    { value: "sports", label: "sports" },
    { value: "science", label: "science" },
    { value: "entertainment", label: "entertainment" },
    { value: "technology", label: "technology" },
    { value: "others", label: "others" },
  ];

  const article = articles.find((art) => art._id === id);
  const handleTagChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };

  const handleUpdateArticle = (event) => {
    event.preventDefault();

    const form = event.target;

    // Extract updated article details
    const updatedArticle = {
      title: form?.title?.value || article?.title,
      description: form?.description?.value || article?.description,
      image: form?.image?.value || article?.image,
      publisher: form?.publisher?.value || article?.publisher,
      tags: selectedTags.map((tag) => tag.value),
    };
    console.log(updatedArticle);
    // Update the article
    axiosSecure.put(`/articles/${id}`, updatedArticle).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        console.log(res.data);
        toast.success("Article updated successfully");
        history.back();
      } else {
        toast.error("Error updating article");
      }
    });
  };

  return (
    <section className="bg-base-200 dark:bg-gray-900 pt-14 container mx-auto rounded-xl py-3">
      <Helmet>
        <title>The Daily Pulse | Update Article</title>
      </Helmet>
      <Toaster />
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-4xl text-slate-800 font-bold dark:text-white py-2">
          Update Article
        </h2>

        <form onSubmit={handleUpdateArticle}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Article Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={article?.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type article name"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Article Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                defaultValue={article?.description}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type article description here"
              />
            </div>
            {/* Tags, publisher select options */}
            <div className="sm:col-span-2">
              <label
                htmlFor="publisher"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Article Publisher
              </label>
              <Select
                name="publisher"
                options={publishers.map((publisher) => ({
                  value: publisher?.name,
                  label: publisher?.name,
                }))}
                defaultValue={{
                  value: article?.publisher,
                  label: article?.publisher,
                }}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Article image (optional)
              </label>
              <input
                type="url"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Img URL of your article"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="tags"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tags
              </label>
              <Select
                id="tags"
                name="tags"
                options={tagOptions}
                isMulti
                closeMenuOnSelect={false}
                value={selectedTags}
                onChange={handleTagChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              className="font-medium mt-4 w-full text-center bg-blue-950 text-white hover:bg-blue-900 text-base px-5 py-2.5 rounded-lg focus:ring-4"
              value="Update article"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateArticle;
