import BackgroundImg from "../../../utils/images/ProperHomePageBackgroundPic.jpg";
import pizzaLetter from "../../../utils/images/pizza-letters.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="flex h-screen w-full flex-col justify-end bg-cover  bg-fixed bg-center text-white  "
        style={{
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <div className=" mt-20 flex h-full flex-col justify-center text-center">
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
