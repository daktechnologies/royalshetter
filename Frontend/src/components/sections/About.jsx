import { useNavigate } from 'react-router-dom';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Award size={32} />,
      title: "Engineering Excellence",
      description: "Passion for superior craftsmanship and innovative design"
    },
    {
      icon: <Users size={32} />,
      title: "Customer Satisfaction",
      description: "Unwavering commitment to exceeding client expectations"
    },
    {
      icon: <Target size={32} />,
      title: "Quality Standards",
      description: "Redefining industry benchmarks in modular construction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About <span className="text-secondary-700">Royal Shelter</span> Solutions
          </h2>
          
          <div className="about-content max-w-4xl mx-auto">
            <p className="text-lg text-secondary-700 leading-relaxed mb-6">
              Royal Shelter Solutions stands at the forefront of India's modular construction industry, 
              delivering innovative and sustainable infrastructure solutions that redefine standards of quality, 
              efficiency, and comfort.
            </p>
            
            <p className="text-lg text-secondary-600 leading-relaxed">
              With a passion for engineering excellence and an unwavering commitment to customer satisfaction, 
              we specialize in manufacturing and supplying premium portable cabins, thermally-insulated PUF cabins, 
              luxury prefab houses, contemporary farmhouses, and robust pre-engineered building (PEB) sheds.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="about-feature bg-primary-50 p-8 rounded-xl text-center">
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
      </div>
    </section>
  );
};

export default About;
