
import { FaLocationDot } from 'react-icons/fa6';
import footerImg from '../images/more/13.jpg';
import footerLogo from '../images/more/logo1.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import footerLastImg from '../images/more/24.jpg';
const Footer = () => {
    return (
        <div className="">
            <div className="" style={{ backgroundImage: `url(${footerImg})` }}>
                <div className="container mx-auto px-12 lg:px-[100px] 2xl:px-[200px]">

                    <div className="pt-[120px] pb-12 flex flex-col lg:flex-row gap-12 lg:gap-[120px] 2xl:gap-[150px]">
                        <div className="flex flex-col gap-6 lg:w-1/2">
                            <img src={footerLogo} alt="" className="w-[75px] h-[90px]" />
                            <h3 className="text-[#331a15] text-[45px] font-normal font-['Rancho']">Espresso Emporium</h3>
                            <p className="text-[#1a1919] text-xl font-normal font-['Raleway']">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className="flex items-center gap-3">
                                <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><FaFacebookF className="text-[#331a15] text-4xl mr-3" /></a>
                                <a href='https://www.twitter.com/' target="_blank" rel="noreferrer"><FaTwitter className="text-[#331a15] text-4xl mr-3" /></a>
                                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><FaInstagram className="text-[#331a15] text-4xl mr-3" /></a>
                                <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer"><FaLinkedinIn className="text-[#331a15] text-4xl mr-3" /></a>
                            </div>
                            <h3 className="text-[#331a15] text-[45px] font-normal font-['Rancho']">Get in Touch</h3>
                            <div className="">

                                <div className="flex items-center gap-3">
                                    <MdPhone className="text-[#331a15] w-6 h-6" />
                                    <p className="text-[#1a1919] text-xl font-normal font-['Raleway']">
                                        +880 123 456 789
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdEmail className="text-[#331a15] w-6 h-6" />
                                    <p className="text-[#1a1919] text-xl font-normal font-['Raleway']">
                                        espresso@gmail.com
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaLocationDot className="text-[#331a15] w-6 h-6" />
                                    <p className="text-[#1a1919] text-xl font-normal font-['Raleway']">
                                        72, Wall street, King Road, Dhaka
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="">
                            <h3 className="text-[#331a15] text-[45px] font-normal font-['Rancho'] lg:mt-[110px] mb-8">Connect with Us</h3>
                            <input type="text" placeholder="Name" className="input input-bordered w-full mb-4" />
                            <input type="email" placeholder="Email" className="input input-bordered w-full mb-4" />
                            <textarea placeholder="Message" className="textarea textarea-bordered w-full h-[130px] mb-8"></textarea>

                            <button className="text-[#331a15] text-2xl font-normal font-['Rancho'] w-[150px] h-12 rounded-[30px] border-2 border-[#331a15]">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="" style={{backgroundImage: `url(${footerLastImg})`}}>
                <h3 className="text-white text-xl font-normal py-4 text-center font-['Rancho']">Copyright Espresso Emporium ! All Rights Reserved</h3>
            </div>
        </div>

    );
};

export default Footer;