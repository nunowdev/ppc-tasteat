import * as React from "react";
import gsap from "gsap";
import {
  TestimonialCard,
  TestimonialsContainer,
  TestimonialsDots,
  TestimonialsInfo,
  TestimonialsMain,
  TestimonialsSlider,
  TestimonialsSubtitle,
  TestimonialsTitle,
  TestimonialsWrapper,
} from "./style";

function Testimonials() {
  const [activeDot, setActiveDot] = React.useState(0);

  function animateSlider() {
    if (activeDot === 0) {
      setActiveDot(1);
      gsap.to(".slider", { x: -1674 });
    } else {
      setActiveDot(0);
      gsap.to(".slider", { x: 0 });
    }
  }

  const props = {
    testimonials: [
      {
        name: "Natasha D",
        location: "Newyork",
        text: "They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy",
        photoUrl:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229a13c2cd3115d977bcb14_client-say-image-2.jpg",
      },
      {
        name: "Jack Sparrow",
        location: "Salt Lake City",
        text: "I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.",
        photoUrl:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/622996397e5c6e573ac3d16c_client-say-image-1.jpg",
      },
      {
        name: "Martin",
        location: "San Diego",
        text: "Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.",
        photoUrl:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229a1479a6cfb8424111fee_client-say-image-3.jpg",
      },
      {
        name: "David Lue",
        location: "Newyork",
        text: "A Restaurant with a lovely bar and intimate dining area. Food is sensational, exciting, highly innovative, the service is friendly & professional.",
        photoUrl:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/623846d7e967845c52bcae43_client-say-image-4.jpg",
      },
      {
        name: "Natasha D",
        location: "Newyork",
        text: "They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy",
        photoUrl:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229a13c2cd3115d977bcb14_client-say-image-2.jpg",
      },
    ],
  };

  return (
    <TestimonialsContainer>
      <TestimonialsWrapper>
        <TestimonialsMain>
          <TestimonialsSubtitle>TESTIMONIAL</TestimonialsSubtitle>
          <TestimonialsTitle>Our Clients Say</TestimonialsTitle>
          <TestimonialsInfo>
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </TestimonialsInfo>
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          {/* FALTA OS DOTS, COLOCAR O TEXTO DIREITO E O SLIDER */}
          <TestimonialsSlider className="slider">
            {props.testimonials.map((testimonial) => (
              <TestimonialCard>
                <div className="testimonial_top">
                  <div className="image">
                    <img
                      src={testimonial.photoUrl}
                      className="profile_pic"
                      alt=""
                    />
                    <div className="quotes">
                      <img
                        src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622996a41d28bf2b88901510_client-say-block-quote.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="info">
                    <div className="name">{testimonial.name}</div>
                    <div className="location">{testimonial.location}</div>
                  </div>
                </div>
                <div className="content">{testimonial.text}</div>
              </TestimonialCard>
            ))}
          </TestimonialsSlider>
          <TestimonialsDots>
            <div
              className={`dot ${activeDot === 0 ? "active" : ""}`}
              onClick={() => animateSlider()}
            ></div>
            <div
              className={`dot ${activeDot === 1 ? "active" : ""}`}
              onClick={() => animateSlider()}
            ></div>
          </TestimonialsDots>
        </TestimonialsMain>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
}

export default Testimonials;
