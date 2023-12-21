import bannerPic from "../../../assets/images/banner/banner.png";
import Container from "../../../components/Shared/Container/Container";

const Banner = () => {
  return (
    <>
      <Container>
        <section className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex-1">
            <h1>Learn more</h1>
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
