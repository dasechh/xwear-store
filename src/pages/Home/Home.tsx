import Header from "../../components/Header/Header";
import Carousel from "../../components/Featured-carousel/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-col flex w-full gap-20 pt-12.5 pb-30 max-2xl:px-5 max-md:pt-6.25 md:pt-10 md:pb-20 2xl:px-47.5">
        <Carousel />
        <ProductCarousel category='shoes' carouselName='обувь' />
        <ProductCarousel category='clothes' carouselName='одежда' />
        <ProductCarousel category='accessories' carouselName='аксессуары' />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
