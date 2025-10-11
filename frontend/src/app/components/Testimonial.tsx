"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Samay Raina",
      designation: "Product Manager at TechFlow",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Samay_raina_%28cropped%29.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Sydney Mommy",
      designation: "CTO at InnovateSphere",
      src: "https://image-cdn.netflixjunkie.com/wp-content/uploads/imago0256627473h-1-e1684781898824.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Apple Uncle",
      designation: "Operations Director at CloudScale",
      src: "https://cdn.mos.cms.futurecdn.net/yygi3vC7NsuwpFJamMxB9W.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Mark Choudhry",
      designation: "Engineering Lead at DataPro",
      src: "https://i.insider.com/5d84f6dd21214c4ad512d856?width=700",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Sundar Bhai",
      designation: "VP of Technology at FutureNet",
      src: "https://imageio.forbes.com/specials-images/imageserve/67e5cbc9823431a56b4ad600/0x0.jpg?format=jpg&crop=1072,1072,x1828,y0,safe&height=416&width=416&fit=bounds",
    },
  ];
  return (
    <div>
          <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100"
        >
          What Others Say About Us
        </motion.h2>
        
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}
