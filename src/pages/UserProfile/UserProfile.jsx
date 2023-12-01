import { FaEdit } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const UserProfile = () => {
  const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    
    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value || user?.displayName ;
        const photoURL = form.photoURL.value || user?.photoURL;
        const email = user?.email;
      
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("Profile data updated in firebase!");
      
            const updatedUser = {
              name,
              photoURL,
              email,
            };
            console.log("updatedUser", updatedUser);
      
            axiosPublic
              .put(`/users/update/${user.email}`, updatedUser
        // 
              )
              .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                  toast.success("Profile updated successfully");
                } else {
                  toast.error("nothing to update");
                }
              })
              .catch((error) => {
                console.error("Error updating user:", error);
                toast.error(error.message);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      };
      

  return (
    <div className="bg-inherit flex flex-col justify-center items-center">
      <Toaster></Toaster>
      <p className="text-4xl font-semibold mb-4 text-teal-400">User Profile</p>
      <div
        className=" flex h-96 relative flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12
         bg-gray-50 text-gray-800"
      >
        <img
          src={user?.photoURL}
          alt="user image"
          className="pt-4 w-40 h-40 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <br />
        <hr />
        <br />
        <FaEdit
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="w-4 h-4 absolute top-4 right-2"
        ></FaEdit>
        <div className="space-y-4 text-center divide-y divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-600">
              {user?.role}
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-600">
              {user?.email}
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-600 text-left">
              Profile Created: {user?.metadata?.creationTime}
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-600 text-left">
              Last Login: {user?.metadata?.lastSignInTime}
            </p>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:text-white hover:bg-teal-600">
                ✕
              </button>
            </form>
            <form onSubmit={handleEdit}>
              <h3 className="font-bold text-center text-teal-700 text-xl">
                Edit Profile!
              </h3>

              <label className="font-semibold text-teal-700 " htmlFor="name">
                Name:
              </label>
              <br />
              <input
                className="text-gray-400 w-full"
                type="text"
                id="name"
                name="name"
                defaultValue={user?.displayName} 
                required
              />
              <br />
              <br />
              <label
                className="font-semibold text-teal-700 "
                htmlFor="photoURL"
              >
                Photo URL:
              </label>
              <br />
              <input
                className="text-gray-400 w-full"
                type="text"
                id="photoURL"
                name="photoURL"
                defaultValue={user?.photoURL}
                required
              />
              <br />
              <br />

              <input
                className="py-2 rounded-lg w-full bg-teal-700 hover:bg-teal-600 text-white"
                type="submit"
                value="update"
              />
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default UserProfile;
