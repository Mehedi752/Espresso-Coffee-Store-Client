import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const chef = event.target.chef.value;
        const supplier = event.target.supplier.value;
        const taste = event.target.taste.value;
        const category = event.target.category.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;

        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo
        };

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added Succesfully",
                        icon: "success",
                        confirmButtonColor: "#d2b48c",
                    });
                    // event.target.reset();
                }
            })


    }
    return (
        <div className="container mx-auto mt-12 my-[120px] px-0 lg:px-[100px] 2xl:px-[200px]">

            <div className="mb-12">
                <Link to={"/"} className="text-gray-700 flex items-center gap-2 text-3xl font-normal font-['Rancho']">
                <IoMdArrowBack /> Back to home</Link>
            </div>
            <div className="px-[110px] py-[70px] bg-[#f4f3f0]">
                <h1 className="text-gray-700 text-[45px] text-center font-normal font-['Rancho']">Add New Coffee</h1>
                <p className="text-center text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleAddCoffee} className="card-body">

                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#1a1919]/80 text-xl font-semibold font-['Raleway']">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered text-[#1a1919]/60 text-base font-normal font-['Raleway']" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#d2b48c] rounded-[5px] border-2 text-center text-[#331a15] text-2xl font-normal font-['Rancho'] border-[#331a15]">Add Coffee</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddCoffee;