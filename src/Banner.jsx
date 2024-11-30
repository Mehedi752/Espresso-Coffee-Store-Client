import bannerImg from '../images/more/3.png';
import icon1 from '../images/icons/1.png';
import icon2 from '../images/icons/2.png';
import icon3 from '../images/icons/3.png';
import icon4 from '../images/icons/4.png';

const Banner = () => {
    return (
        <div className="">

            <div style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="container mx-auto px-12 lg:pl-[300px] 2xl:pl-[680px] lg:pr-[200px] 2xl:pr-[160px] flex flex-col justify-center py-[100px] lg:py-[290px] 2xl:py-[310px]">
                    <h3 className="text-white text-[55px] font-normal font-['Rancho'] mb-6">Would you like a Cup of Delicious Coffee?</h3>
                    <p className="text-white/70 text-base font-normal font-['Raleway'] mb-10">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
                        Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="w-[130px] bg-[#e3b577] py-2 px-3 text-[#242222] text-2xl font-normal font-['Rancho']">Learn More</button>
                </div>
            </div>

            <div className="bg-[#eceae3]">
                <div className="container mx-auto px-12 lg:px-[100px] 2xl:px-[200px] py-[56px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8 lg:gap-0">
                    <div className="flex flex-col justify-center items-center lg:block">
                        <img src={icon1} alt="" className='w-[70px] h-[70px] mb-4' />
                        <h3 className="text-[#331a15] text-[35px] font-normal font-['Rancho'] mb-2">Awesome Aroma</h3>
                        <p className="text-[#1a1919] text-center lg:text-left text-base font-normal font-['Raleway']">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                    <div className="flex flex-col justify-center items-center lg:block">
                        <img src={icon2} alt="" className='w-[70px] h-[70px] mb-4' />
                        <h3 className="text-[#331a15] text-[35px] font-normal font-['Rancho'] mb-2">High Quality</h3>
                        <p className="text-[#1a1919] text-center lg:text-left text-base font-normal font-['Raleway']">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:block">
                        <img src={icon3} alt="" className='w-[70px] h-[70px] mb-4' />
                        <h3 className="text-[#331a15] text-[35px] font-normal font-['Rancho'] mb-2">Pure Grades</h3>
                        <p className="text-[#1a1919] text-center lg:text-left text-base font-normal font-['Raleway']">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:block">
                        <img src={icon4} alt="" className='w-[70px] h-[70px] mb-4' />
                        <h3 className="text-[#331a15] text-[35px] font-normal font-['Rancho'] mb-2">Proper Roasting</h3>
                        <p className="text-[#1a1919] text-center lg:text-left text-base font-normal font-['Raleway']">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;