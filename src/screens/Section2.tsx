import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDE_IMAGES = [
  "/images/rectangle_23_copy.jpg",
  "images/rectangle_23.jpg",
  "/images/rectangle_23_copy.jpg",
  "images/rectangle_23.jpg",
];

const Section2 = () => {
  return (
    <section className="overflow-x-hidden" id="history">
      <div className="bg-[url('/images/peak_2.jpg')] bg-cover bg-center">
        <div className="container">
          <div className=" min-h-screen relative">
            <h1 className="numbered-heading">HISTORY</h1>
            <h4 className="max-w-screen-md ml-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nisi repudiandae excepturi consectetur vero dolorem eos tempore
              alias sint quibusdam fugit ducimus laboriosam consequatur
              cupiditate, libero pariatur aperiam, sapiente nobis minima
              consequuntur obcaecati! Placeat nisi, vero dignissimos voluptatum
              dolor sed ut? Laudantium ducimus reprehenderit quaerat ipsa cum
              sint, assumenda incidunt asperiores tempore iusto, deleniti
              laborum molestias velit accusantium expedita omnis corporis!
              Dicta, modi aliquid.
            </h4>
          </div>
        </div>

        <div className="bg-red bg-primary opacity-70 py-4">
          <div className="max-w-[300px] sm:max-w-[600px] lg:max-w-[800px] m-auto">
            {/* {SLIDE_IMAGES.map((image: string, index: number) => (
              <img src={image} key={index} />
            ))} */}

            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {SLIDE_IMAGES.map((image: string, index: number) => (
                  <CarouselItem
                    className="basis-full sm:basis-1/2  lg:basis-1/3"
                    key={index}
                  >
                    <div className="p-1 relative h-[135px]">
                      <img
                        src={image}
                        className="absolute object-cover w-full "
                      />
                    </div>
                    {/* {index} */}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
