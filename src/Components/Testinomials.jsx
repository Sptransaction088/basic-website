import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Marketing Director, TechNova",
      image: "/assets/user-icon.png",
      rating: 5,
      content: "Working with this team transformed our entire digital presence. They understood our vision immediately and delivered beyond our expectations. Our conversion rates have increased by 70% since the launch of our new website.",
      company: "TechNova"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GrowthStart",
      image: "/assets/user-icon.png",
      rating: 5,
      content: "The attention to detail and strategic thinking was impressive. They didn't just build what we asked for - they enhanced our ideas and provided solutions we hadn't even considered. A truly exceptional team that delivers results.",
      company: "GrowthStart"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Product Manager, InnovateCorp",
      image: "/assets/user-icon.png",
      rating: 5,
      content: "I've worked with many agencies over my 15-year career, and this team stands out for their creativity, reliability, and genuine commitment to our success. They're not just service providers - they're partners in our growth.",
      company: "InnovateCorp"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "CEO, Wilson Enterprises",
      image: "/assets/user-icon.png",
      rating: 5,
      content: "From our first meeting, I knew we were in good hands. Their approach is thorough, their communication is clear, and their execution is flawless. The results speak for themselves - our business has grown 35% since implementing their recommendations.",
      company: "Wilson Enterprises"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <section className="py-9 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-100 opacity-60"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full border-4 border-blue-100 opacity-60"></div>
        <div className="absolute top-40 left-1/4 w-20 h-20 rounded-full bg-blue-100 opacity-40"></div>
        <Quote className="absolute bottom-20 right-20 text-blue-100" size={120} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
         
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500">
            <div className="md:flex items-stretch">
              {/* Image Column */}
              <div className="md:w-2/5 bg-blue-600 relative">
                <div className="absolute inset-0 bg-blue-700 opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-blue-900 to-transparent">
                  <div className="text-white text-center md:text-left">
                    <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-blue-100">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 mr-1" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 italic mb-8 relative">
                    <Quote className="absolute -top-4 -left-2 text-blue-100" size={30} />
                    <p className="relative z-10 ml-4">{testimonials[activeIndex].content}</p>
                  </blockquote>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500">
                    <span className="font-bold text-blue-600">{activeIndex + 1}</span> / {testimonials.length}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      
        
    
      </div>
    </section>
  );
}