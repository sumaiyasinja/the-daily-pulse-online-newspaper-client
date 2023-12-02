import './Publisher.css';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const AddPublisher = () => {
  const axiosSecure = useAxiosSecure()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const publisher = { name, photo };
    console.log(publisher);

    axiosSecure.post('/publishers', publisher)
    .then((res) => {
      if (res.data.insertedId) {
        form.reset();
        toast.success("Publisher added successfully");
      } else {
        toast.error("Error adding Publisher");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error("Error adding Publisher");
    });
      
  };
  return (
   <div className='flex justify-center flex-col items-center py-40 bg-gray-900'>
    <Toaster></Toaster>
    <h2 className="text-3xl text-white font-bold pb-5">Add Publisher</h2>
     <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Publisher name</label>
          <input
            required
            name="name"
            id="name"
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder='Publisher Name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Publisher logo</label>
          <input
            required
            name="photo"
            id="photo"
            type="url"
            className="border border-gray-300 rounded-md p-2"
            placeholder='https://example.com/image.png'
          />       
          </div>
        <button
          type="submit"
          className="form-submit-btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
   </div>
  );
};

export default AddPublisher;
