import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Star, MapPin, Award, Settings, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const container = useRef();

  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: "Unmatched Quality",
      description: "Premium materials and superior craftsmanship in every project"
    },
    {
      icon: <Star size={32} />,
      title: "Rapid Deployment",
      description: "Fast manufacturing and installation to meet tight deadlines"
    },
    {
      icon: <Award size={32} />,
      title: "Expert Engineering",
      description: "Precision-designed structures for durability and performance"
    },
    {
      icon: <Settings size={32} />,
      title: "Full Customization",
      description: "Tailored solutions to match your exact specifications"
    },
    {
      icon: <MapPin size={32} />,
      title: "Nationwide Service",
      description: "Reliable delivery and installation across India"
    },
    {
      icon: <Users size={32} />,
      title: "Trusted by Leaders",
      description: "Proven track record with top companies and institutions"
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".why-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(".why-feature",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(".why-clients",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.2"
      );

  }, { scope: container, revertOnUpdate: true });

  return (
    <section ref={container} id="why-choose-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="why-title text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Why Choose <span className="text-secondary-700">Royal Shelter</span> Solutions?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="why-feature bg-primary-50 p-6 rounded-xl text-center hover:bg-primary-100 transition-colors">
              <div className="text-secondary-700 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="why-clients bg-secondary-700 text-primary-100 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Client Portfolio</h3>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Royal Shelter Solutions has earned the trust of leading corporations, construction firms,
            agricultural enterprises, educational institutions, and government organizations across India.
            Our modular solutions have enhanced operational efficiency on project sites, improved comfort
            and safety for staff, and provided dependable infrastructure in challenging and remote environments.
          </p>
          <p className="text-center text-white font-semibold">
            Detailed client portfolio, testimonials and case studies are available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
