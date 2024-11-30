import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const coffee = useLoaderData();
    return (
        <div className="container mx-auto mt-12 mb-[120px] px-5 lg:px-[100px] 2xl:px-[200px]">

            <div className="mb-12">
                <Link to={"/"} className="text-gray-700 flex items-center gap-2 text-3xl font-normal font-['Rancho']">
                    <IoMdArrowBack /> Back to home</Link>
            </div>

            <div className="px-6 lg:px-[110px] py-[70px] bg-[#f4f3f0] flex flex-col md:flex-row justify-between items-center">

                <img src={coffee.photo} alt="" className="" />

                <div className="">
                    <h1 className="text-gray-700 text-[45px] font-normal font-['Rancho']">Niceties</h1>
                    <div className="">
                        <p className=" text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">
                        <span className="font-bold">Name:</span> {coffee.name}</p>
                        <p className=" text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">
                        <span className="font-bold">Chef:</span> {coffee.chef}</p>
                        <p className=" text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">
                        <span className="font-bold">Supplier:</span> {coffee.supplier}</p>
                        <p className=" text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">
                        <span className="font-bold">Taste:</span> {coffee.taste}</p>
                        <p className=" text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">
                        <span className="font-bold">Category:</span> {coffee.category}</p>
                        <p className=" text-[#1a1919]/70 text-lg font-normal font-['Raleway'] leading-[30px]">
                        <span className="font-bold">Details:</span> {coffee.details}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;