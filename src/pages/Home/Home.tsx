import Header from "../../components/Header/Header";
import Carousel from "../../components/Featured-carousel/Carousel/Carousel";

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex w-full gap-20 pt-12.5 max-2xl:px-5 max-md:pt-6.25 md:pt-10 2xl:px-47.5">
        <Carousel />
      </main>
    </>
  );
}

export default HomePage;
