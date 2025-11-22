import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
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
        heading: 'Building Reliable, User-Focused Web Applications',
        text: `I love solving real problems through code and creating web experiences that feel simple and friendly.
                My work across the stack with React, Node.js, Express, and MongoDB allows me to build features end-to-end - from the UI the user sees to the logic that powers it.
                I care about clean structure, readable code, and building things that last.`

      }
    },
    {
      id: 'design',
      title: 'Design',
      subtitle: 'Bridging Aesthetics with User-Centered Thinking',
      icon: <FaFigma className="text-xl text-secondary-500" />,
      content: {
        heading: 'Designing Interfaces That Make Sense',
        text: `For me, design is about clarity and making the experience effortless for the user.
                I focus on hierarchy, simplicity, and interactions that guide users naturally through a product.
                Whether I'm refining components, improving flow, or making UI decisions in React, I aim to create interfaces that feel clean, intuitive, and welcoming - without visual noise.
                This mindset helps me build products that are not only functional but also pleasant to use.`
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
          viewport={{ once: true, margin: "-50px" }}
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
                 viewport={{ once: true, margin: "-50px" }}
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
             viewport={{ once: true, margin: "-50px" }}
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
