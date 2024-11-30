import { useContext, useEffect, useState } from "react";
import { MdEdit, MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";
import Banner from "./Banner";
import Instagram from "./Instagram";
import backgroundImg from "../images/more/1.png"
import { AuthContext } from "./AuthProvider";

function App() {
  // Load data from the Server.
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(Array.isArray(coffeesData) ? coffeesData : []);
  const { user, signOutUser } = useContext(AuthContext);

  useEffect(() => {
    setCoffees(coffees);
  }, [coffeesData]);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // ////console.log('User signed out')
      })
      .catch(error => {
        // ////console.log(error)
      })
  };



  // Function to handle the Delete Button.
  const handleDeleteButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://espresso-coffee-server-jade.vercel.app/coffees/${id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              //console.log(data)
              if (data.deletedCount > 0) {
                setCoffees(coffees.filter(coffee => coffee._id !== id));
                Swal.fire({
                  title: "Deleted!",
                  text: "Coffee Deleted Successfully.",
                  icon: "success"
                });
              }
            })
        }
      });

  }


  return (
    <div className="">

      <Banner></Banner>


      <div className="container mx-auto px-0 lg:px-[100px] 2xl:px-[200px]">
        <p className="text-center text-[#1a1919] text-xl font-normal font-['Raleway'] mt-[120px]">--- Sip & Savor ---</p>
        <h3 className="text-[#331a15] text-center text-[55px] font-normal font-['Rancho']">Our Popular Products</h3>

        <div className="flex flex-col md:flex-row justify-between lg:px-12">
          <Link to={"/add-coffee"} className="w-[150px] mx-auto md:mx-0 bg-[#e3b577] font-['Rancho'] rounded-[5px] border-2 border-[#331a15]
         text-[#331a15] text-2xl py-3 mt-4 text-center flex justify-center ">Add Coffee</Link>

          {user && user.email ? (
            <button
              onClick={handleLogOut}
              className="w-[150px] bg-[#e3b577] mx-auto md:mx-0 font-['Rancho'] rounded-[5px] border-2 border-[#331a15]
         text-[#331a15] text-2xl py-3 mt-4 text-center flex justify-center"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="w-[150px] mx-auto md:mx-0 bg-[#e3b577] font-['Rancho'] rounded-[5px] border-2 border-[#331a15]
         text-[#331a15] text-2xl py-3 mt-4 text-center flex justify-center">Login</Link>
          )}

          {user && (
            <Link to={"/users"} className="w-[150px]  bg-[#e3b577] mx-auto md:mx-0 font-['Rancho'] rounded-[5px] border-2 border-[#331a15]
         text-[#331a15] text-2xl py-3 mt-4 text-center flex justify-center">Users</Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 gap-6 mt-12">
          {
            coffees.map((coffee) => {
              return (
                <div key={coffee._id} className="flex justify-between  items-center p-5 md:p-8 bg-[#f5f4f1] rounded-[10px]">
                  <div className="">
                    <img src={coffee.photo} alt={coffee.name} className="w-[150px] md:w-[185px] h-[200px] md:h-[240px] rounded-[5px]" />
                  </div>

                  <div className="w-2/3">
                    <h2 className="text-2xl md:text-3xl font-['Rancho'] text-[#331a15]">Name: {coffee.name}</h2>
                    <p className="text-xl text-[#331a15] font-['Raleway']">Chef: {coffee.chef}</p>
                    <p className="text-xl text-[#331a15] font-['Raleway']">Taste: {coffee.taste}</p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-3">
                    <Link to={`/coffee-details/${coffee._id}`} className="bg-[#e3b577] p-2 rounded-[8px]"> <MdOutlineRemoveRedEye className=" text-white" /></Link>
                    <Link to={`/update-coffee/${coffee._id}`} className="bg-black p-2 rounded-[8px]"> <MdEdit className="text-white" /></Link>
                    <div onClick={() => handleDeleteButton(coffee._id)} className="bg-red-600 p-2 rounded-[8px]"><MdOutlineDelete className="text-white" /></div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      <Instagram></Instagram>

    </div>
  )
}

export default App
