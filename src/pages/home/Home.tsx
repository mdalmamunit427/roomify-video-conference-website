import { Link } from "react-router";
import bannerImg from "../../assets/hero-image.png";

const Home = () => {
  return (
    <>
      <div className="md:min-h-screen py-28 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-full text-center lg:text-left">
          <h1 className="lg:text-5xl text-3xl font-bold leading-normal lg:leading-snug md:w-4/5">Supercharge your meetings and made it effective</h1>
          <p className="py-6 md:w-4/5">
          Experience the future of virtual communication today.
          Say hello to a whole new way of connecting!
          </p>
          <Link to="/video-conference"> <button className="btn btn-primary rounded-full">Start meeting now</button></Link>
         
        </div>
        <div className="md:w-1/2  w-full shrink-0 shadow-2xl">
          <img src={bannerImg} alt="" className="w-full mx-auto rounded-md" />
        </div>
      </div>
    </>
  );
};

export default Home;
