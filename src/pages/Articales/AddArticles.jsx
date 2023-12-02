import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import Select from "react-select";
import useAuth from "./../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import usePublishers from './../../hooks/usePublishers';

const AddArticles = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [selectedTags, setSelectedTags] = useState([]);
const [publishers] = usePublishers();

  const handleTagChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };
  // upload img to imgbb
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // tag
  const tagOptions = [
    { value: "politics", label: "politics" },
    { value: "sports", label: "sports" },
    { value: "science", label: "science" },
    { value: "entertainment", label: "entertainment" },
    { value: "technology", label: "technology" },
    { value: "others", label: "others" },
  ];
  let publisherOptions = [];

  publishers.map((publisher) => {
    publisherOptions.push({ value: publisher.name, label: publisher.name });
  });

  const handleAddarticle = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData();
    const image = form.image.files[0];

    formData.append("image", image);

    try {
      // Upload image to ImgBB
      const response = await axiosPublic.post(image_hosting_api, formData);
      const imageUrl = response.data.data.url;

      // Continue with article submission
      const title = form.title.value;
      const description = form.description.value;
      const publisher = form.publisher?.value || "not specified";
      const tags = selectedTags.map(tag => tag.value); 
   
       const status = "pending";
       const views = 0;
      const currentDate = new Date();

      const postedDate = {
        day: currentDate.toLocaleString("en-US", { weekday: "long" }),
        date: currentDate.toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        time: currentDate.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }),
      };

      const author = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      };

      const newArticle = {
        title,
        image: imageUrl,
        description,
        tags,
        publisher,
        author,
        views,
        status,
        postedDate,
      };

      // console.log(newArticle);

      axiosPublic
        .post("/articles", newArticle)
        .then((res) => {
          if (res.data.insertedId) {
            form.reset();
            toast.success("Article added successfully");
          } else {
            toast.error("Error adding article");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Error adding article");
        });
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image");
    }
  };

  return (
    <section className="bg-base-200 dark:bg-gray-900 pt-14 container mx-auto rounded-xl py-3">
      <Helmet>
        <title>The Daily Pulse | Add a new article</title>
      </Helmet>
      <Toaster />
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-4xl text-slate-800 font-bold  dark:text-white py-2">
          Add a new article
        </h2>

        <form onSubmit={handleAddarticle}>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type article name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type article description here"
                required
              />
            </div>
            {/* Tags,publisher selecte options */}
            <div className="sm:col-span-2">
              <label
                htmlFor="publisher"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Article publisher
              </label>
              <Select name="publisher" options={publisherOptions} />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="tags"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                tag
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
              className="font-medium mt-4 w-full  text-center bg-blue-950 text-white hover:bg-blue-900 text-base  px-5 py-2.5 rounded-lg focus:ring-4"
              value="Add article"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddArticles;
