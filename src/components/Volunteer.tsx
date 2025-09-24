import React from 'react';
import { motion } from 'framer-motion';

type VolunteerExperience = {
  role: string;
  organization: string;
  duration: string;
  description: string;
  link?: string; // Optional link to the organization's website or project details
};

const volunteerData: VolunteerExperience[] = [
  {
    role: 'Event Coordinator',
    organization: 'Code for Good',
    duration: 'March 2022 - Present',
    description:
      'Organized and managed events to promote coding workshops for underserved communities, helping individuals build essential tech skills.',
    link: 'https://www.codeforgood.org',
  },
  {
    role: 'Mentor',
    organization: 'Women Who Code',
    duration: 'June 2021 - December 2022',
    description:
      'Mentored aspiring female developers, providing guidance on coding practices, career development, and work-life balance.',
    link: 'https://www.womenwhocode.com',
  },
  {
    role: 'Fundraising Volunteer',
    organization: 'Tech For All',
    duration: 'January 2020 - March 2021',
    description:
      'Led fundraising campaigns to raise money for tech education scholarships for students from underprivileged backgrounds.',
    link: 'https://www.techforall.org',
  },
];

const Volunteer: React.FC = () => {
  return (
    <motion.section
      id="volunteer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Volunteer Experience
        </h2>

        {/* Volunteer Experience Items */}
        <div className="space-y-8">
          {volunteerData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              {/* Volunteer Role */}
              <h3 className="text-xl font-semibold text-blue-600">{experience.role}</h3>
              <p className="text-gray-700 mt-2">{experience.organization}</p>
              <p className="text-gray-500 text-sm">{experience.duration}</p>
              {/* Volunteer Description */}
              <p className="text-gray-700 mt-4">{experience.description}</p>
              {/* Optional Link to Organization */}
              {experience.link && (
                <div className="mt-4">
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-800 transition"
                  >
                    Visit Organization
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Volunteer;
