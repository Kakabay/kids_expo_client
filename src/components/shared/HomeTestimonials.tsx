import useEmblaCarousel from "embla-carousel-react";

const HomeTestimonials = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="container my-20">
      <h2 className="h2 mb-8 text-center">Title</h2>

      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex justify-center">
          {[...Array(3)].map((_) => (
            <article className="flex px-[18vw] flex-col text-center gap-3 flex-[0_0_100%] justify-center align-center">
              <img
                src=""
                alt=""
                className="size-20 bg-black rounded-full mx-auto"
              />

              <h3 className="font-bold text-lg">Name</h3>
              <h4 className="text-lg">Position</h4>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
                saepe, velit quia magnam ducimus hic dolorem, obcaecati itaque
                nemo tempora ab id libero! Dolore vel laudantium sint suscipit
                esse eaque.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
