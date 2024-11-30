import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { IoMdArrowBack } from "react-icons/io";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const navigate = useNavigate();

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure to delete this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/users/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            //console.log(data)
                            if (data.deletedCount > 0) {
                                setUsers(users.filter(user => user._id !== id));
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "User Deleted Successfully.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });

    }

    return (
        <div className="bg-[#f3f3f3]">
            <div className="container mx-auto p-5 md:px-10 md:py-12 lg:py-[70px]">
                <div className="mb-12">
                    <Link to={"/"} className="text-gray-700 flex items-center gap-2 text-3xl font-normal font-['Rancho']">
                        <IoMdArrowBack /> Back to home</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        users.map((user) => (
                            <div key={user._id} className="">

                                <div className="bg-white border-2 shadow-xl shadow-transparent rounded-lg p-6 max-w-md mx-auto">
                                    <div className="flex items-center justify-center">
                                        <img
                                            src={user?.photo || "https://via.placeholder.com/150"}
                                            alt="Profile"
                                            className="w-24 h-24 rounded-full border-4 border-blue-600"
                                        />
                                    </div>

                                    <div>
                                        <p>
                                            <strong className="text-lg">Name:</strong> {user?.name || "N/A"}
                                        </p>
                                        <p>
                                            <strong className="text-lg">Email:</strong> {user?.email || "N/A"}
                                        </p>
                                        <p>
                                            <strong className="text-lg">Created:</strong> {user?.createdTime || "N/A"}
                                        </p>
                                    </div>




                                    <div className="flex justify-between gap-6">
                                        <button onClick={() => navigate(`/users/update-profile/${user._id}`)}
                                            className="mt-6 w-full bg-blue-600 text-white py-2 rounded">Update Profile</button>
                                        <button onClick={() => handleDeleteUser(user._id)}
                                            className="mt-6 w-full bg-blue-600 text-white py-2 rounded">Delete Profile</button>
                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Users;
