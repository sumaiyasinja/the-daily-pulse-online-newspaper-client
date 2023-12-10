import toast, { Toaster } from "react-hot-toast";
import useUser from "../../hooks/useUser";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [users, refetch] = useUser();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const totalPages = Math.ceil(users.length / pageSize);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentPageUsers = users.slice((currentPage - 1) * pageSize, currentPage * pageSize);


  const handleAdminMaking = (id) => {
    Swal.fire({
      title: "Are you sure you want to make this user a admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sure!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/users/update-role/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success('User added as Admin!', {
              icon: '👏',
            });}
            else{
            toast.error("Admin Making Failed");
            console.log(res.data);
          }
        })
      
      }
    });
 
     
  }
  return (
    <div className="container mx-auto px-5 shadow-md h-screen  rounded-lg py-6">
            <Helmet>
        <title>The Daily Pulse | Manage Users</title>
      </Helmet>
      <Toaster />
      <div id="last-users w-full ">
        <h1 className="font-bold py-4 uppercase"> users</h1>
        <div className="">
          <table className="w-full ">
            <thead className="bg-black/60">
              <th className="text-left py-3 px-2 rounded-l-lg">Name</th>
              <th className="text-left py-3 px-2">Email</th>
              <th className="text-left py-3 px-2">Role</th>
              <th className="text-left py-3 px-2 rounded-r-lg">Make admin</th>
            </thead>
            {currentPageUsers.map((user) => (
              <tr key={user._id} className="border-b border-gray-700">
                <td className="py-3 px-2 font-bold">
                  <div className="inline-flex space-x-3 items-center">
                    <span>
                      <img
                        className="rounded-full w-8 h-8"
                        src={user?.photoURL}
                        alt={user?.name}
                      />
                    </span>
                    <span>{user?.name}</span>
                  </div>
                </td>
                <td className="py-3 px-2">{user?.email}</td>
                <td className="py-3 px-2">
                  {user?.role ? user?.role : "user"}
                </td>
                <td className="py-3 px-2">
                  <div className="inline-flex items-center space-x-3">
                    {user.role === "admin" ? (
                      // <p className="text-green-500">confirmed</p>
                      <p className="text-green-500">admin</p>
                    ) : (
                      <button 
                      onClick={() => handleAdminMaking(user._id)}
                      className="hover:text-white">
                        {user.role === "admin" ? "confirmed" : "make admin"}
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </table>
          {totalPages > 1 && (
          <div className="flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`mt-4 rounded-full w-8 h-8 ${currentPage === page ? 'bg-blue-900' : 'bg-transparent'}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
