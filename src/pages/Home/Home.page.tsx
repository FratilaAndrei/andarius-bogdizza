import pizzaLetter from "../../utils/pizza-letters.jpg";
import BackgroundImg from "../../utils/ProperHomePageBackgroundPic.jpg";

const HomePage = () => {
  return (
    <div>
      <div
        className="h-screen w-full text-white bg-center bg-cover  bg-scroll flex flex-col justify-end  "
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundAttachment: "fixed", // Aveam dreptate baga-mi-as zarvavatul la cearceaf de matase + 9, CHATGPT esti prost
        }}
      >
        <div className=" flex flex-col text-center justify-center h-full  ">
          {/* <div className=" flex flex-col text-center "> */}
          <div className="text-6xl font-bold">BEST</div>
          <div className="m-auto my-4">
            <img src={pizzaLetter} alt="" />
          </div>
          <div className="text-6xl font-bold">IN TOWN</div>
        </div>
      </div>
      <div className="h-96 text-black">
        Sunt aici pentru testarea scroll-ului
      </div>
    </div>
  );
};

export default HomePage;
