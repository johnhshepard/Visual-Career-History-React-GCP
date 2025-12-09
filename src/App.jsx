import React, { useState } from 'react';
import { Briefcase, Coffee, GraduationCap, ChevronDown, ChevronUp, Calendar, MapPin, Award } from 'lucide-react';

// --- USER DATA SECTION ---
// Edit this array to update your career history.
const careerData = [
    {
    id: 1,
    type: 'gap',
    title: 'Job Search & Skill Enhancement',
    company: 'Self-Directed',
    location: 'Saint Simons Island, GA',
    period: 'October 2025 - Present',
    description: 'Actively seeking new opportunities in Data Analytics and Cybersecurity domains while enhancing skills through advanced coursework and certifications.',
    context: 'This period is dedicated to professional growth and skill enhancement. I am focusing on completing advanced certifications and hands-on projects to stay abreast of the latest trends and technologies in data analytics and cybersecurity. This intentional gap allows me to realign my career trajectory towards my passion for data-driven decision-making and secure systems.',
    tags: ['Generative AI Badge', 'Machine Learning Specialization from Stanford Online and DeepLearning.AI on Coursera', 'Over 40 hours on DataCamp', 'Over 1300 events on TryHackMe', 'AWS Certified Cloud Practitioner Renewed', 'AWS Cloud Quest: Generative AI Practitioner - Training Badge']
  },
  {
    id: 2,
    type: 'work',
    title: 'Senior Dashboard Analytics SME | Appian Developer',
    company: 'NexGen Data Systems, Inc.',
    location: 'North Charleston, SC (Remote)',
    period: 'June 2023 - September 2025',
    description: 'Led the development of interactive QuickSight and Qlik Sense dashboards and Databricks ETL pipelines, enabling command-level visibility into USMC logistics operations. Standardized data models across MCBOSS and Advana environments while implementing governance patterns that restored data integrity for longitudinal analysis.',
    tags: ['Data Engineering (Python/SQL)', 'Dashboard Design', 'AWS Analytics', 'Appian Development', 'CompTIA Data+ Certified' ]
  },
    {
    id: 4,
    type: 'gap',
    title: 'Job Search & Career Transition',
    company: 'Self-Directed',
    location: 'Saint Simons Island, GA',
    period: 'March - May 2024 (3 months)',
    description: 'Focused on transitioning from IT management to a more technical role in data analytics and cybersecurity.',
    context: 'During this period, I dedicated myself to upskilling in data analytics and cybersecurity through various online courses and certifications. This intentional gap allowed me to realign my career trajectory towards my passion for data-driven decision-making and secure systems, preparing me for my subsequent role as a Senior Dashboard Analytics SME.',
    tags: ['CISSP', 'CISM', 'AWS Solutions Architect - Associate', 'CompTIA CASP+']
  },
      {
    id: 3,
    type: 'education',
    title: 'MS in Cybersecurity and Information Assurance',
    company: 'Western Governors University',
    location: 'Salt Lake City, UT (Online)',
    period: '2023 - February 2024',
    description: 'Excellence Award Recipient.',
    tags: ['Secure Network Design', 'Cloud Security', 'Governance, Risk and Compliance', 'Secure Software Design', 'Cybersecurity Architecture and Engineering']
  },

  {
    id: 6,
    type: 'work',
    title: 'Product Owner & Cloud Engineer',
    company: 'Percentric Technologies, LLC dba Gnymble',
    location: 'Norfolk, VA (Remote)',
    period: '2020 - 2022',
    description: 'Engineered and administered full AWS infrastructure for a SaaS healthcare product, achieving 99.9% uptime and strict HIPAA compliance. Managed the product roadmap for the PercyMD app, coordinating development teams to increase release cadence by 25%.',
    tags: ['AWS Architecture', 'Product Strategy', 'HIPAA Compliance']
  },
    {
    id: 5,
    type: 'education',
    title: 'MBA in IT Management',
    company: 'Western Governors University',
    location: 'Salt Lake City, UT (Online)',
    period: 'October 2021 - October 2022',
    description: 'Excellence Award Recipient.',
    tags: ['IT Project Management', 'Managing Organizations and Leading People', 'Managing Human Capital', 'Marketing', 'IT Strategic Solutions', 'Global Economics for Managers', 'Accounting for Decision Makers', 'Ethical Leadership', 'Financial Management', 'Data-Driven Decision Making']
  },
    {
    id: 7,
    type: 'work',
    title: 'Service Desk Manager (Promotion)',
    company: 'Federal Law Enforcement Training Centers (FLETC)',
    location: 'Glynco, GA',
    period: '2017 - 2020',
    description: 'Directed a DHS Enterprise IT Service Desk team of 16 employees supporting over 5,000 staff across multiple federal locations. Spearheaded vulnerability management and OS hardening initiatives, including the implementation of DISA STIGs across thousands of endpoints.',
    tags: ['Vulnerability Management', 'OS Hardening', 'Team Leadership']
  },
    {
    id: 8,
    type: 'work',
    title: 'Help Desk Specialist',
    company: 'Federal Law Enforcement Training Centers (FLETC)',
    location: 'Glynco, GA',
    period: '2016 - 2017',
    description: 'Provided critical Tier 1/2 support and performed core Identity and Access Management (IAM) tasks within Active Directory. Improved data recovery processes for encrypted drives, resulting in a documented 75% decrease in recovery time.',
    tags: ['Incident Response', 'IAM Administration', 'Process Improvement']
  },
    {
    id: 10,
    type: 'work',
    title: 'Small Business IT, Web Development, and Digital Product Consultant',
    company: 'Various',
    location: 'Golden Isles, GA',
    period: '2013 - 2016',
    description: 'Managed a dual portfolio of technical responsibilities, spanning Tier 1-3 enterprise infrastructure support, cloud migrations (O365/Google), and the architecture of revenue-generating web platforms.',
    context: 'This period allowed me to gain hands-on experience across a broad spectrum of IT functions, from network infrastructure to client consulting. The diverse challenges I encountered honed my problem-solving skills and deepened my understanding of technology\'s role in business success.',
    tags: ['Product Strategy', 'Cloud Migrations (O365)', 'Network Infrastructure', 'Web Development', 'Client Consulting']
  },
    {
    id: 9,
    type: 'work',
    title: 'Valuation Manager',
    company: 'FairValue Advisors, LLC',
    location: 'Brunswick, GA',
    period: '2007 - 2013',
    description: 'Managed complex financial valuation and modeling projects for Fortune 500 and defense clients, establishing the rigorous analytical foundation for my transition into data engineering.',
    tags: ['Complex Financial Modeling','Quantitative Analysis & Forecasting', 'Due Diligence & Risk Assessment', 'Market Research & Data Synthesis']
  },
  {
    id: 11,
    type: 'education',
    title: 'BBA in Economics and Finance',
    company: 'Georgia Southern University',
    location: 'Statesboro, GA',
    period: '2003 - 2007',
    description: 'Graduated Cum Laude. Minor in Management.',
    tags: ['Econometrics', 'Financial Modeling', 'Statistical Analysis', 'Strategic Management']
  },
];

const TimelineItem = ({ item, isEven, index, expanded, toggleExpand }) => {
  const isGap = item.type === 'gap';
  const isEdu = item.type === 'education';
  const showDescription = true;
  const showTags = true;

  // Dynamic Styles based on type
  const cardBg = isGap ? 'bg-amber-50' : 'bg-white';
  const borderStyle = isGap ? 'border-dashed border-2 border-amber-300' : 'border border-slate-200 shadow-sm';
  const iconBg = isGap ? 'bg-amber-500' : (isEdu ? 'bg-indigo-500' : 'bg-blue-600');
  
  const Icon = () => {
    if (isGap) return <Coffee size={20} className="text-white" />;
    if (isEdu) return <GraduationCap size={20} className="text-white" />;
    return <Briefcase size={20} className="text-white" />;
  };

  // Grid Placement Logic
  // We use explicit grid-row (passed via style) to lock items to their chronological row.
  // We use col-start/end to position Left vs Right.
  
  // EVEN (0, 2, 4): Card on Right
  // ODD (1, 3, 5): Card on Left
  
  const dateClasses = isEven 
    ? 'col-start-1 col-end-5 mr-10 text-right' 
    : 'col-start-6 col-end-10 ml-10 text-left';

  const cardClasses = isEven
    ? 'col-start-6 col-end-10 md:ml-10'
    : 'col-start-1 col-end-5 md:mr-10';

  // IMPORTANT: We pass { gridRow: index } to each child to force them into the correct horizontal slice.
  // We only apply this on desktop (md) where grid is active. Mobile uses flexbox natural order.
  const desktopRowStyle = { gridRow: index };

  return (
    <div className={`flex md:contents ${isGap ? 'opacity-90' : ''}`}>
      
      {/* 1. Date Component (Desktop Only) */}
      <div 
        className={`p-4 my-4 shadow-none rounded-xl hidden md:block ${dateClasses}`}
        style={window.innerWidth >= 768 ? desktopRowStyle : {}}
      >
        <h3 className="font-bold text-slate-700 text-lg">{item.period}</h3>
        <p className="text-sm text-slate-500">{item.location}</p>
      </div>

      {/* 2. Timeline Line & Icon (Center) */}
      <div 
        className="col-start-5 col-end-6 md:mx-auto relative mr-6 md:mr-0"
        style={window.innerWidth >= 768 ? desktopRowStyle : {}}
      >
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-slate-200 pointer-events-none"></div>
        </div>
        <div className={`w-10 h-10 absolute top-1/2 -mt-5 rounded-full shadow-md flex items-center justify-center ${iconBg} ring-4 ring-white`}>
          <Icon />
        </div>
      </div>

      {/* 3. Main Content Card */}
      <div 
        className={`w-full p-4 my-4 ${cardClasses}`}
        style={window.innerWidth >= 768 ? desktopRowStyle : {}}
      >
        <div 
          className={`p-6 rounded-xl transition-all duration-300 ${cardBg} ${borderStyle} ${isGap ? 'cursor-pointer hover:shadow-md' : ''}`}
          onClick={() => isGap && toggleExpand(item.id)}
        >
          
          {/* Mobile Date (Visible only on small screens) */}
          <div className="md:hidden mb-2 flex items-center text-slate-500 text-sm font-semibold">
            <Calendar size={14} className="mr-1"/> {item.period}
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
              <div className="flex items-center text-slate-600 font-medium text-sm mt-1">
                {isGap ? (
                  <span className="text-amber-700">{item.company}</span>
                ) : (
                  <>
                    <Briefcase size={14} className="mr-1" />
                    {item.company}
                  </>
                )}
                <span className="mx-2 text-slate-300">|</span>
                <MapPin size={14} className="mr-1" />
                {item.location}
              </div>
            </div>
            {isGap && (
              <button className="text-amber-600 hover:bg-amber-100 p-1 rounded-full transition-colors">
                {expanded ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
              </button>
            )}
          </div>

          {showDescription ?  
          <p className="mt-3 text-slate-600 leading-relaxed text-sm">
            {item.description}
          </p> 
          : ""}

          {/* Tags */}
          {showTags ? 
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span key={idx} className={`text-xs px-2 py-1 rounded-full font-medium ${isGap ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>
                {tag}
              </span>
            ))}
          </div>
          : "" }

          {/* EXPANDABLE CONTEXT AREA FOR GAPS */}
          {isGap && (
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-amber-200' : 'max-h-0 opacity-0'}`}>
              <div className="flex items-start bg-white/50 p-3 rounded-lg">
                <Award size={18} className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Context & Growth</h4>
                  <p className="text-sm text-slate-700 italic">
                    "{item.context}"
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      
    </div>
  );
};

const App = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    const gapIds = careerData.filter(i => i.type === 'gap').map(i => i.id);
    if (expandedIds.length === gapIds.length) {
      setExpandedIds([]); // Collapse all if already all expanded
    } else {
      setExpandedIds(gapIds);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-4 shadow-xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">John Shepard</h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Data Analytics & Cybersecurity SME | CISSP, CISM, AWS
          </p>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
           Driving Secure, Data-Driven Decisions
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <button 
              onClick={expandAll}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-2 rounded-full text-sm font-semibold transition-all border border-slate-700 flex items-center"
            >
               {expandedIds.length > 0 ? 'Collapse Gap Details' : 'Explain All Gaps'}
            </button>
            <a 
              href="/resume.pdf"
              download="John_Shepard_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/50 cursor-pointer block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* Main Timeline */}
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:grid grid-cols-10 mx-auto p-2 text-slate-50">
          
          {careerData.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item}
              index={index + 1} /* Pass 1-based index for grid-row */ 
              isEven={index % 2 === 0}
              expanded={expandedIds.includes(item.id)}
              toggleExpand={toggleExpand}
            />
          ))}

        </div>
        
        <div className="text-center mt-12 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} John Shepard. Built with React & Tailwind.</p>
        </div>
      </main>

    </div>
  );
};

export default App;