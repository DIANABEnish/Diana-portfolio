import { useState } from 'react';
import { FaCode, FaBullseye } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa6';
import { motion } from 'framer-motion';

type TabContent = {
  heading: string;
  text: string;
};

type Tab = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: TabContent;
};

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<string>('code');

 const tabs: Tab[] = [
    {
      id: 'code',
      title: 'Code',
      subtitle: 'Crafting Digital Experiences through Technology',
      icon: <FaCode className="text-xl text-primary-500" />,
      content: {
        heading: 'Transforming Ideas into Interactive Realities',
        text: 'Code is my language of innovation, where each line represents a bridge between imagination and functionality. I approach software development as a creative process, meticulously crafting components that not only solve complex problems but also tell a compelling story. My passion lies in developing elegant, efficient solutions that transform user interactions into seamless, intuitive experiences.'
      }
    },
    {
      id: 'design',
      title: 'Design',
      subtitle: 'Bridging Aesthetics with User-Centered Thinking',
      icon: <FaFigma className="text-xl text-secondary-500" />,
      content: {
        heading: 'Designing Beyond the Surface',
        text: 'Design is the art of solving problems through visual and interactive storytelling. I believe in a holistic approach that goes beyond mere aesthetics, focusing on understanding user needs, behaviors, and emotions. Each design is a carefully orchestrated journey, blending research, empathy, and creative thinking to create interfaces that are not just visually striking, but truly meaningful and user-centric.'
      }
    }
];

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-900 text-gray-100"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-100">
            About Me
          </h2>
          <p className="text-xl text-gray-400">
            Discover My World: Coding & Design
          </p>
        </motion.div>
        
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs Column */}
          <div className="w-full lg:w-5/12 space-y-4">
            {tabs.map((tab: Tab) => (
              <motion.div 
                key={tab.id}
                className={`flex justify-between items-center p-6 rounded-lg cursor-pointer transition-all 
                  ${activeTab === tab.id ? 
                    'bg-gray-800 border-l-4 border-primary-500 shadow-lg' : 
                    'bg-gray-800/50 hover:bg-gray-800'}`}
                onClick={() => setActiveTab(tab.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1">{tab.title}</h3>
                  <p className="text-gray-400">{tab.subtitle}</p>
                </div>
                <div className="flex items-center">
                  {tab.icon}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Content Column */}
          <motion.div 
            className="w-full lg:w-7/12 bg-gray-800 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              {activeContent?.heading}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {activeContent?.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;