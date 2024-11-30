import errorImg from '../images/404/404.gif';
const Error = () => {
    return (
        <div className='container mx-auto px-0 lg:px-[100px] 2xl:px-[200px]'>
            <img src={errorImg} alt="" className="mx-auto" />
        </div>
    );
};

export default Error;