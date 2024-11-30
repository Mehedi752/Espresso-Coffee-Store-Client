import cup1 from '../images/cups/Rectangle 9.png';
import cup2 from '../images/cups/Rectangle 10.png';
import cup3 from '../images/cups/Rectangle 11.png';
import cup4 from '../images/cups/Rectangle 12.png';
import cup5 from '../images/cups/Rectangle 13.png';
import cup6 from '../images/cups/Rectangle 14.png';
import cup7 from '../images/cups/Rectangle 15.png';
import cup8 from '../images/cups/Rectangle 16.png';

const Instagram = () => {
    const cups = [cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8];
    return (
        <div className="my-[120px] container mx-auto px-0 lg:px-[100px] 2xl:px-[200px]">
               <p className="text-center text-[#1a1919] text-xl font-normal font-['Raleway']">Follow Us Now</p>
               <h3 className="text-[#331a15] text-[55px] text-center font-normal font-['Rancho']">Follow on Instagram</h3>

               <div className="">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                          {
                            cups.map((cup, index) => {
                                 return (
                                      <div key={index} className="flex justify-center items-center">
                                        <img src={cup} alt="" className="w-[312px] h-[350px]" />
                                      </div>
                                 )
                            })
                          }
                     </div>
               </div>
        </div>
    );
};

export default Instagram;