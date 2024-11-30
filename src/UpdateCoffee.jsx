import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { IoMdArrowBack } from "react-icons/io";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    //console.log(coffee);
    const navigate = useNavigate();

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const chef = event.target.chef.value;
        const supplier = event.target.supplier.value;
        const taste = event.target.taste.value;
        const category = event.target.category.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;

        const updatedCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo
        };

        fetch(`http://localhost:5000/coffees/${coffee._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Coffee Updated Succesfully",
                        icon: "success",
                        confirmButtonColor: "#d2b48c",
                    });
                    navigate("/");
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto mt-12 mb-[120px] px-0 lg:px-[100px] 2xl:px-[200px]">

                <div className="mb-12">
                    <Link to={"/"} className="text-gray-700 flex items-center gap-2 text-3xl font-normal font-['Rancho']">
                        <IoMdArrowBack /> Back to home</Link>
                </div>
                <div className="px-[110px] py-[70px] bg-[#f4f3f0]">
                    <h1 className="text-gray-700 text-[45px] text-center font-normal font-['Rancho']">Update Existing Coffee Details</h1>
                    <p className="text-center text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form onSubmit={handleUpdateCoffee} className="card-body">

                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={coffee.name} className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Chef</span>
                                </label>
                                <input type="text" name="chef" defaultValue={coffee.chef} className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Supplier</span>
                                </label>
                                <input type="text" name="supplier" defaultValue={coffee.supplier} className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Taste</span>
                                </label>
                                <input type="text" name="taste" defaultValue={coffee.taste} className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={coffee.category} className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Details</span>
                                </label>
                                <input type="text" name="details" defaultValue={coffee.details} className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Photo URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={coffee.photo} className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#d2b48c] rounded-[5px] border-2 text-center text-[#331a15] text-2xl font-normal font-['Rancho'] border-[#331a15]">Update Coffee Details</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;