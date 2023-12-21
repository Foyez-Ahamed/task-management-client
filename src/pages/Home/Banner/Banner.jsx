import bannerPic from "../../../assets/images/banner/banner.png";
import Container from "../../../components/Shared/Container/Container";

const Banner = () => {
  return (
    <>
      <Container>
        <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4">
          <div className="flex-1 space-y-4">
            <h1 className=" text-xl lg:text-4xl font-bold">Stay Organized with SCC <br /> <span className="text-[#0087EB]">Technovision</span></h1>

            <p className="text-[18px]">Take control of your daily tasks. Our platform simplifies task management, making it easy for you to prioritize and achieve your goals.</p>

            <button className="px-6 py-2 bg-[#0087EB] text-white font-bold rounded-md">Lets Explore</button>
          </div>

          <div className="flex-1">
            <img src={bannerPic} alt="bannerPic" />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Banner;
