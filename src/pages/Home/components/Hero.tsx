import BackgroundImg from "../../../utils/ProperHomePageBackgroundPic.jpg";
import pizzaLetter from "../../../utils/pizza-letters.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="h-screen w-full text-white bg-center bg-cover bg-fixed  flex flex-col justify-end  "
        style={{
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <div className=" flex flex-col text-center justify-center h-full  ">
          <div className="text-6xl font-bold">BEST</div>
          <div className="m-auto my-4">
            <img src={pizzaLetter} alt="pizzaLetter" />
          </div>
          <div className="text-6xl font-bold">IN TOWN</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
