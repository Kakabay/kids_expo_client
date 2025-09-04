import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";

const HomeTestimonials = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="container my-20">
      <h2 className="h2 mb-8 text-center">Title</h2>

      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container max-w-[710px] mx-auto gap-[20vw] flex justify-center">
          {[...Array(3)].map((_) => (
            <article className="relative flex flex-col text-center gap-3 flex-[0_0_100%] justify-center items-center">
              <Quote
                className="absolute left-0 rotate-180 bottom-14
               text-text-interactive stroke-1 fill-text-interactive"
              />
              <Quote className="absolute right-0 bottom-2 text-text-interactive stroke-1 fill-text-interactive" />

              <img
                src=""
                alt=""
                className="size-[100px] bg-black rounded-full"
              />

              <div className="">
                <h3 className="font-bold text-base">Name</h3>
                <h4 className="text-base">Position</h4>
              </div>
              <p className="text-base text-text-secondary px-14">
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
