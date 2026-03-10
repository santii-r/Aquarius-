import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Melissa Delacroix",
    text: "If you're looking for a pool builder with integrity, patience and the willingness to go above and beyond, then you've landed in the right place. We got multiple quotes and we knew almost immediately that we'd choose Kevin to build our pool. His pool frame is a stronger grade steel, he adds piers for extra stabilization, and he literally goes above and beyond 'industry standards'. We are over-the-moon happy.",
    rating: 5
  },
  {
    name: "Jim Clark",
    text: "Owner, Kevin Ward mustered the individuals to help create a beautiful pool. A travertine supplier, a great brickie to install the stone, a pool liner specialist, a firm that digs and removed tons of material, electricians, pool equipment plumbing - a complex dance that yielded a happy customer. Heartily recommend Aquarius Pools of the Upstate.",
    rating: 5
  },
  {
    name: "Ashlee Bailey",
    text: "I could not recommend this company enough. We were left with a half-completed pool by our previous pool company. I called Kevin Ward and he and Kevin Jones showed up the next day and agreed to work with us. They were informative, flexible, and honest. Their communication skills have been outstanding. I highly recommend using Aquarius!!",
    rating: 5
  },
  {
    name: "S (Local Guide)",
    text: "Unbelievably perfect experience with Aquarius Pools of the Upstate. We found ourselves needing an old liner replaced and could not have chosen a better company to do it. From start to finish, everything exceeded what we could have ever hoped for. Communication was incredible, products used are top notch.",
    rating: 5
  },
  {
    name: "Gwynne Armstrong",
    text: "Excellent customer service and our pool looks great! We got quotes from several companies but ultimately decided to go with Aquarius because they were the most professional from the get-go! Kevin and Kevin both sat down with me and explained the quote and the process. Communication has been super easy.",
    rating: 5
  },
  {
    name: "Jamey Dixon",
    text: "The 2 Kevin’s are Top Notch ! We had a Diving board removed, Fountain installed, New Liner and new vacuum. The pricing was excellent! The work performed was awesome! The communication was amazing! Would definitely recommend and will use them again!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-font italic text-accent text-xl mb-2 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-white/80">
            Don't just take our word for it. Read about the experiences of families who trusted us with their backyard dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative group hover:bg-white/15 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10 group-hover:text-white/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6 italic font-light relative z-10">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-lg font-heading">{review.name}</p>
                <p className="text-sm text-accent uppercase tracking-wider mt-1">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
