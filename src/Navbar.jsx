import logoImg from '../images/more/logo1.png';
import logoBG from '../images/more/15.jpg';
const Navbar = () => {
    return (
        <div>
            <div className="flex gap-3 justify-center items-center " style={{backgroundImage: `url(${logoBG})`}}>
                <img src={logoImg} alt="" className="w-[75px] h-[90px]" />
                <h3 className="text-white text-3xl lg:text-6xl font-normal font-['Rancho']">Espresso Emporium</h3>
            </div>
        </div>
    );
};

export default Navbar;