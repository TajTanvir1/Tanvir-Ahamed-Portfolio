import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {

   const navLinks = <>
      <li><button className="btn-ghost"><a href="#introduction">Introduction</a></button></li>
      <li><button className="btn-ghost"><a href="#skills">Skills</a></button></li>
      <li><button className="btn-ghost"><a href="#experience">Experience</a></button></li>
      <li><button className="btn-ghost"><a href="#projects">Projects</a></button></li>
      <li><button className="btn-ghost"><a href="#contact">Contact Me</a></button></li>
   </>

   return (
      <div className="mx-1">
         <Helmet>
            <title>Tanvir Ahamed Portfolio</title>
         </Helmet>

         {/* Navbar */}
         <nav>
            <div className="navbar font-work lg:mt-4">
               <div className="navbar-start">
                  <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </div>
                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {navLinks}
                     </ul>
                  </div>
                  <Link to="/" className="btn btn-ghost text-xl font-bold text-[#131313] lg:ml-6">Tanvir <span className="text-green-400">Ahamed</span></Link>
               </div>
               <div className="hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 gap-5">
                     {navLinks}
                  </ul>
               </div>
            </div>
         </nav>

         {/* Top Intro */}
         <div id="top" className="flex flex-col-reverse md:flex-row justify-between md:mx-10 mx-4">
            <div className="flex flex-col text-center md:text-left justify-center">
               <h1 className="md:text-4xl text-xl text-green-800 font-bold">Tanvir <span className="text-green-500">Ahamed</span> Jubayer</h1>
               <h1 className="md:text-2xl text-xl text-green-950 font-bold mt-2">Web Developer - (MERN Stack)</h1>
            </div>
            {/* Image */}
            <div className="mx-auto md:mx-0">
               <div className="rounded-lg">
                  <img src="https://i.ibb.co/tbbkjfp/Tanvir-Passport-Pic-C.jpg" alt="Tanvir Ahamed Picture" className="w-32 rounded-sm shadow-sm shadow-green-700 border-l-2 border-t-2 border-green-200 m-4 pt-2 pb-0.5 px-0.5" />
               </div>
            </div>
         </div>

         {/* Introduction */}
         <div id="introduction" className="my-6">
            <h1 className="text-3xl my-4 text-green-950 font-bold text-center underline">Introduction</h1>
            <p className="md:text-lg text-gray-600 md:w-2/3 text-center mx-auto px-2">Hi, I'm <span className="font-semibold">Tanvir Ahamed Jubayer</span>, a passionate and enthusiastic <span className="font-semibold">web developer</span> at the beginning of my journey in the world of web development. With a strong foundation in <span className="font-semibold">HTML, CSS, and JavaScript</span> and also have good knowledge of <span className="font-semibold">React, Firebase, MongoDB, Node.js, Express.js</span>, I am committed to creating beautiful and functional websites.</p>
         </div>

         {/* My Skills */}
         <div id="skills" className="my-8">
            <h1 className="text-3xl my-4 text-green-950 font-bold text-center underline">My Skills</h1>
            {/* HTML */}
            <div className="md:w-2/3 mx-auto my-4 flex flex-col md:flex-row justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/g6HxZ85/HTML.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">HTML:</span> Proficient in crafting clean, semantic HTML. Experienced in structuring web content effectively. Knowledgeable in HTML5 for enhanced web functionalities.</p>
            </div>
            {/* CSS */}
            <div className="md:w-2/3 mx-auto my-4 border-y py-2 flex flex-col md:flex-row-reverse justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/KmqVQTC/css.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">CSS:</span> Skilled in styling web pages with CSS. Proficient in responsive design to ensure cross-device compatibility. Experienced with CSS frameworks, particularly Tailwind CSS, for efficient styling.</p>
            </div>
            {/* Javascript */}
            <div className="md:w-2/3 mx-auto my-4 flex flex-col md:flex-row justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/6FRBQ9j/Java-Script.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">Javascript:</span> Comfortable with core JavaScript concepts and building dynamic web applications. Experienced with modern JavaScript ES6+ features.</p>
            </div>
            {/* React */}
            <div className="md:w-2/3 mx-auto my-4 border-y py-2 flex flex-col md:flex-row-reverse justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/yW3CCq6/react.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">React:</span> Proficient in creating interactive user interfaces with React. Familiar with React hooks, context API, and state management.</p>
            </div>
            {/* Firebase */}
            <div className="md:w-2/3 mx-auto my-4 flex flex-col md:flex-row justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/0CW4NDv/firebase.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">Firebase:</span> Familiar with Firebase for backend services, including authentication and real-time database.</p>
            </div>
            {/* MongoDB */}
            <div className="md:w-2/3 mx-auto my-4 border-y py-2 flex flex-col md:flex-row-reverse justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/3fW85tY/mongo.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">MongoDb:</span>Knowledgeable in using MongoDB for database management. Experienced in handling CRUD operations and data modeling.</p>
            </div>
            {/* Express */}
            <div className="md:w-2/3 mx-auto my-4 flex flex-col md:flex-row justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/HrNq2nm/express.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">Express.js:</span> Capable of building server-side applications with Express.js.Experienced in setting up RESTful APIs and middleware.</p>
            </div>
            {/* Node */}
            <div className="md:w-2/3 mx-auto border-y py-2 my-4 flex flex-col md:flex-row-reverse justify-center align-middle items-center">
               <div>
                  <img src="https://i.ibb.co/rcsTxX9/node.png" alt="HTML" className="min-w-14 border-l-2 border-green-300 pl-1" />
               </div>
               <p className="mx-3"><span className="font-bold text-green-900 underline">Node.js:</span> Skilled in using Node.js for server-side development. Proficient in building and deploying scalable network applications.</p>
            </div>
         </div>

         {/* Experience */}
         <div id="experience" className="my-6">
            <h1 className="text-3xl my-4 text-green-950 font-bold text-center underline">Professional Experience</h1>
            <p className="md:text-lg text-gray-600 my-4 md:w-2/3 text-center mx-auto px-2"><span className="font-bold underline">Working as Admin Manager (2 years):</span> Oversee administrative operations and ensure the efficient functioning of the office.
               Managed schedules, coordinated meetings, and handled communication with clients and stakeholders.
               Implemented organizational policies and procedures to improve workflow and productivity.</p>
            <p className="md:text-lg text-gray-600 md:w-2/3 text-center mx-auto px-2"><span className="font-bold underline">Worked as Computer Operator (Worked 3 years):</span> Managed and maintained computer systems, ensuring smooth and efficient operation. Performed data entry, system backups, and software updates. Provided technical support and troubleshooting for hardware and software issues.</p>

         </div>

         {/* Projects */}
         <div id="projects" className="my-6 md:w-2/3 px-2 mx-auto">
            <h1 className="text-3xl my-4 text-green-950 font-bold text-center underline">My Projects</h1>
            <div>
               <div className="flex items-center gap-4">
                  <h1 className="text-xl md:text-2xl font-bold text-green-900">1. Explore Alternate</h1>
                  <button className="btn btn-outline btn-success"><a href="https://explore-alternate.web.app/" target="_blank">Click here to Live site</a></button>
               </div>
               <p className="md:text-lg text-gray-600 my-4 mx-auto px-2">Explore Alternate is a user-driven question-and-answer website where users can ask queries and receive answers from others. The platform features user registration, question posting, and a voting system to highlight useful answers. Users can explore topics through categories and tags, and search for specific questions easily. Built with HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, Explore Alternate provides a responsive and interactive experience. It fosters community engagement and knowledge sharing, making it a valuable resource for finding answers and exploring diverse perspectives.</p>
            </div>
            <div>
               <div className="flex items-center gap-4">
                  <h1 className="text-xl md:text-2xl font-bold text-green-900">2. Tech Digital</h1>
                  <button className="btn btn-outline btn-success"><a href="https://tech-digital-tanvir.netlify.app/" target="_blank">Click here to Live site</a></button>
               </div>
               <p className="md:text-lg text-gray-600 my-4 mx-auto px-2">Tech Digital is a comprehensive platform designed to help companies monitor employee work and manage salaries efficiently. With features like real-time work tracking, performance monitoring, and salary management, it streamlines administrative tasks and enhances productivity. Built using HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, Tech Digital ensures a seamless and user-friendly experience. This platform allows managers to track employee performance, generate reports, and manage payroll with ease, making it an essential tool for modern businesses looking to optimize their workforce management.</p>
            </div>
            <div>
               <div className="flex items-center gap-4">
                  <h1 className="text-xl md:text-2xl font-bold text-green-900">3. Tourism Kingdom</h1>
                  <button className="btn btn-outline btn-success"><a href="https://a10-tourism-kingdom.web.app/" target="_blank">Click here to Live site</a></button>
               </div>
               <p className="md:text-lg text-gray-600 my-4 mx-auto px-2">Tourism Kingdom is an interactive platform that allows users to add and explore tourist destinations. Users can share their favorite places, add descriptions, and upload photos. The platform enables visitors to browse through various tourist spots, filter by categories, and find destinations that match their interests. Built using HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, Tourism Kingdom offers a seamless and engaging experience. This tool helps travelers discover new places and plan their trips more efficiently, making it an essential resource for travel enthusiasts.</p>
            </div>
         </div>

         {/* Education */}
         <div className="my-6 md:w-2/3 px-2 mx-auto">
            <h1 className="text-3xl my-4 text-green-950 font-bold text-center underline">Education</h1>
            <p className="text-lg font-semibold text-green-950"><span>Completed Graduation from Govt. Haraganga Collage, Munshiganj</span></p>
            <p className="text-lg">in <span className="font-bold">Bachelor of Business Studies of Degree (Pass course)</span></p>
            <p className="text-lg">Graduation Year: <span className="font-semibold">2024</span></p>
            
         </div>

         {/* Contact Me */}
         <div id="contact" className="my-6 md:w-2/3 px-2 mx-auto">
            <h1 className="text-3xl my-4 text-green-950 font-bold text-center underline">Contact Me</h1>
            <h1 className="md:text-2xl text-xl text-green-800 font-bold">Tanvir <span className="text-green-500">Ahamed</span> Jubayer</h1>
            <p className="text-lg">Mobile No: <span className="font-semibold text-green-950">+880 1408-778787</span></p>
            <p className="text-lg">Email: <span className="font-semibold text-green-950">tanvirah1223@gmail.com</span></p>
            <p className="text-lg">Linkedin ID: <button className="btn btn-ghost font-semibold text-green-950"><a href="https://www.linkedin.com/in/tanvirahamedjubayer/">Tanvir Ahamed Jubayer</a></button></p>
            <p className="text-lg">Github Account: <button className="btn btn-ghost font-semibold text-green-950"><a href="https://github.com/TajTanvir1">TajTanvir1</a></button></p>
            
         </div>

      </div>
   );
};

export default Home;
