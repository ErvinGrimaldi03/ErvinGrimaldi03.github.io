import React, { useState } from 'react';
import './Timeline.css'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBlackTie, FaUniversity } from 'react-icons/fa';

const Timeline = () => {
    const allElements = [
        
        {
            className: 'vertical-timeline-element--work',
            icon: <FaBlackTie />,
            date: 'Sept 2024 - Current',
            title: 'Software Engineer Intern',
            location: 'Snapchat Inc. - Remote',
            description: "I created AR filters for Snapchat that increased user engagement by 20% and worked on VR prototypes that expanded the platform’s immersive content. I also streamlined 3D asset integration, improving rendering speed"
        },
        
        {
            className: 'vertical-timeline-element--work',
            icon: <FaUniversity />,
            date: 'Sept 2024 - Current',
            title: 'Undergraduate Research Assistant',
            location: 'Robot Ecology Lab - Irvine, CA',
            description: "Under the direction of Dean of Engineering Magnus Egerstedt, I study long-duration autonomy by deploying robots in natural environments to monitor micro-climates over extended periods. I also investigate ecological principles in multi-agent systems to understand and optimize collaborative behaviors among heterogeneous robots."
        },

        {
            className: 'vertical-timeline-element--work',
            icon: <FaUniversity />,
            date: 'June 2024 - Current',
            title: 'Arm Team Lead - Robotics Engineer',
            location: 'Legacy Robotics - Remote',
            description: "As the Arm Team Lead, my responsability is to ensure designing an effective and efficient robotic arm that can grab, lift, and carry different object in autonomy. Using ROS2 I lead sensor fusion and autonomy operations"
        },

        {
            className: 'vertical-timeline-element--work',
            icon: <FaBlackTie />,
            date: 'June 2024 - Sept 2024',
            title: 'Software Engineer Intern',
            location: 'Remos Space AB - Remote',
            description: "As a Software Engineer Intern, I created a Python API to interface the Expedite modem with mission control systems like NASA's OpenMCT and ESA's SCOS2000, facilitating efficient satellite communication and data management."
        },

        {
            className: 'vertical-timeline-element--work',
            icon: <FaBlackTie />,
            date: 'June 2024 - Current',
            title: 'Undergraduate Research Assistant',
            location: 'Intelligent and Autonomous Systems Lab - Irvine, CA',
            description: "I am contributing to an autonomous driving Rover, where I implement SLAM and other algorithms on a NVIDIA Jetson Xavier under the supervision of professor Marco Levorato in the Autonomous and Intelligent Systems Lab at UCI. Additionally, I am exploring Split Computing and its application to autonomous systems to maintain high performance at lower energy costs."
        },

        {
            className: 'vertical-timeline-element--work',
            icon: <FaBlackTie />,
            date: 'Sept 2023 - Jun 2024',
            title: 'Engineer Intern',
            location: 'TTM Technologies - Santa Ana, CA',
            description: 'Masterfully programmed and troubleshot PLCs, maintaining SCADA systems to supercharge automation processes and boost productivity, while ensuring ITAR compliance and utilizing Ignition Designer to craft advanced HMIs for seamless, secure industrial monitoring and control.'
        },
        {
            className: 'vertical-timeline-element--work',
            icon: <FaUniversity />,
            date: 'Sept 2023 - Jun 2024',
            title: 'Project Chair',
            location: 'Google Developer Student Club @ UCI - Irvine, CA',
            description: 'Engaged over 100 students in advanced computing topics by initiating and directing hands-on projects and workshops, enhancing their proficiency in software development, cloud technologies, and AI, and expanding their technical knowledge, skills, and industry confidence.'
        },
        {
            className: 'vertical-timeline-element--work',
            icon: <FaUniversity />,
            date: 'Sept 2023 - Jun 2024',
            title: 'Researcher',
            location: 'Blockchain @ UCI - Irvine, CA',
            description: 'Guided pioneering research at UCI with Offchain Labs on optimizing L2 Arbitrum\'s gas consumption and transaction efficiency using Stylus technology, developed methodologies for enhancing blockchain performance and cost-effectiveness, and authored versatile smart contracts in Rust, C++, and C.'
        },
        {
            className: 'vertical-timeline-element--work',
            icon: <FaBlackTie />,
            date: 'Jul 2022 - Aug 2022',
            title: 'Machine Learning Fellow',
            location: 'Fellowship.ai - San Francisco, CA',
            description: 'Constructed an advanced generator model using InsetGAN and PyTorch to produce realistic full-body images, improved model efficiency and skin-tone matching, and collaborated with international teams to develop a full-body Restyle Encoder, unit tests, and upgraded documentation, significantly reducing source code errors.'
        },
        {
            className: 'vertical-timeline-element--project',
            icon: <FaUniversity />,
            date: 'Sep 2021 - Jun 2023',
            title: 'Dean\'s Award Choice',
            location: 'UAV Forge - Irvine, CA',
            description: 'Developed an efficient object detection CNN using Python, TensorFlow, and Raspberry Pi 4, integrating ROS for UAV-based aerial recognition of ground targets, achieving 28th in design and 41st overall at the SUAS competition'
        },
        {
            className: 'vertical-timeline-element--work',
            icon: <FaBlackTie />,
            date: 'Jan 2022 - Apr 2022',
            title: 'Software Engineer Intern',
            location: 'Sapphire Software LLC - Irvine, CA',
            description: 'Developed a multiplatform Mobile App using Flutter and FireBase'
        },
        {
            className: 'vertical-timeline-element--education',
            icon: <FaGraduationCap />,
            date: 'Sep 2021 - Jun 2025',
            title: 'B.S. Computer Science & Engineering',
            location: 'University of California - Irvine, CA',
            description: 'Minor in Bioinformatics'
        }
    ];

    const colors = [
        '#FF6F61', // Coral
        '#6B5B95', // Muted Purple
        '#88B04B', // Pastel Green
        '#D5AF00', // Sky Blue
        '#92A8D1', // Light Blue
        '#955251', // Rose Taupe
        '#B565A7', // Lavender
        '#7398E3', // Ocra
        '#DD4124', // Orange
        '#D65076'  // Raspberry
      ];

    const [visibleElements, setVisibleElements] = useState(3);

    const loadMoreElements = () => {
        setVisibleElements(prev => Math.min(prev + 3, allElements.length));
    };

    return (
        <div className='timeline'>
            <VerticalTimeline lineColor='#1e90ff'>
                {allElements.slice(0, visibleElements).map((element, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className={element.className}
                        iconStyle={{ background: colors[index % colors.length], color: '#fff' }}
                        icon={element.icon}
                        date={element.date}
                    >
                        <h2>{element.title}</h2>
                        <h4>{element.location}</h4>
                        <p>{element.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            {visibleElements < allElements.length && (
                <button onClick={loadMoreElements} style={{ display: 'block', margin: '20px auto', padding: '10px 20px', backgroundColor: '#1e90ff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default Timeline;
