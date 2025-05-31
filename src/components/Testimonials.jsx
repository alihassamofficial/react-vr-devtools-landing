import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 tracking-wide">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col h-full  border-neutral-800 rounded-md p-6 text-md border">
              <p className="text-base">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="w-12 mr-6 h-12 rounded-full border border-neutral-300"
                />
                <div>
                  <h6 className="">{testimonial.user}</h6>
                  <span className="text-sm font-normal text-neutral-600 ">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
