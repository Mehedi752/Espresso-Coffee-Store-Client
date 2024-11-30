import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Swal from "sweetalert2";


const UpdateProfile = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const user = useLoaderData();


    if (!user) {
        return <div>User not authenticated</div>;
    }

    const [error, setError] = useState("");

    const handleUpdateUser = (event) => {

        setLoading(true);
        setError("");


        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const photo = formData.get("photo");

        const updatedUser = {
            name,
            email,
            photo
        };

        if (!name || !photo) {
            setError("Please fill in the all fields.");
            return;
        }

        fetch(`https://espresso-coffee-server-jade.vercel.app/users/${user._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.modifiedCount > 0) {
                    setLoading(false);
                    Swal.fire({
                        title: "User Updated Succesfully",
                        icon: "success",
                        confirmButtonColor: "#d2b48c",
                    });
                    navigate("/users");
                }
                else {
                    setLoading(false);
                    Swal.fire({
                        title: "User Not Updated",
                        icon: "error",
                        confirmButtonColor: "#d2b48c",
                    });
                    navigate("/users");
                }
            })

        if (loading) {
            return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg text-info min-h-screen"></span></div>;
        }

    }

    return (
        <div className="bg-[#f3f3f3]">
            <div className="container mx-auto p-5 md:px-10 md:py-12 lg:py-[70px]">
                <div className="mb-12">
                    <Link to={"/users"} className="text-gray-700 flex items-center gap-2 text-3xl font-normal font-['Rancho']">
                        <IoMdArrowBack /> Back to home</Link>
                </div>
                <div className="px-10 flex items-center justify-center">

                    <div className="bg-white shadow-lg shadow-black rounded-lg p-6 w-full max-w-md">
                        <h1 className="text-2xl font-bold text-center mb-6">Update Profile</h1>

                        <form action="" className="card-body" onSubmit={handleUpdateUser}>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user.name}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Name:</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user.email}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Photo URL:</label>
                                <input
                                    type="text"
                                    name="photo"
                                    defaultValue={user.photo}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter photo URL"
                                />
                            </div>

                            {error && <p className="text-red-600 mb-4">{error}</p>}
                            <button
                                disabled={loading}
                                className={`w-full py-2 text-white rounded ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                            >
                                {loading ? "Updating..." : "Update Information"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;