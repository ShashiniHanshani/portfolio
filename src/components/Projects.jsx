import React, { useState } from 'react';


const Portfolio = () => {
  const redirectToGitHub = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  const [selectedCategory, setSelectedCategory] = useState('All');


  const projects = [
    {
      id: 1,
      link: "https://github.com/ShashiniHanshani/wonderSL_Flutter",
      tools: <div>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2">
          Flutter
        </button>
        <button class="bg-gray-600 text-gray-300   rounded px-2 mr-2">
          Firebase
        </button>
        <button class="bg-gray-600 text-gray-300   rounded px-2 mr-2">
          Mapbox
        </button>
      </div>,
      desc: (
        <div className='px-3 py-3'>
          <p className='font-semibold text-center'>WonderSL </p>
          <p className='mt-3 text-gray-300'>
            Mobile Application including Map view, chatbot function, travel destinations and tour planning.
          </p>
          <p className='text-gray-300'>
            WonderSL is an application to be developed by positioning the satellite view of the best travelling places in Sri Lanka through the map within the application. This mainly focuses the voyages and those who are curious to travel but cannot make it work due to the busy life schedule.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      link: "https://github.com/ShashiniHanshani/FitnessSL_Flutter",
      tools: <div>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2">
          Flutter
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2">
          Firebase
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2">
          Mapbox
        </button>
      </div>,
      desc: (
        <div className='px-3 py-3'>
          <p className='font-semibold text-center'>FitnessSL Mobile Application</p>
          <p className='text-gray-300 mt-3'>
            FitnessSL, a dynamic fitness app, empowers users to achieve their wellness goals on the go. It simplifies gym selection, allowing users to join based on facilities and tailored workout packages. The app ensures a personalized fitness journey with features like workout tracking, rep counting, and instructor details. Timely reminders for rest days and payments enhance user organization. FitnessSL goes further by offering access to nearby gyms, real-time crowd updates, and information on diverse fitness events for a comprehensive fitness experience.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      link: "https://github.com/ShashiniHanshani/Global_construction--Flutter",
      tools: <div>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2">
          Flutter
        </button>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2">
          Firebase
        </button>

      </div>,
      desc: (
        <div className='px-3 py-3'>
          <p className='font-semibold text-center'>Procurement for Construction Industry Application</p>
          <p className='text-gray-300 mt-3'>
            Mobile and web Application created to incorporate the site managers, suppliers and construction companies. This case study deals with providing solutions for the difficulties faced with the procurement procedures within the construction industry due to its inherently distributed environment.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      link: "https://github.com/ShashiniHanshani/Budgetary",
      tools: <div>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2 mb-2">
          Kotlin
        </button>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2 mb-2">
          Firebase
        </button>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2 mb-2">
          Android Studio
        </button>
      </div>,
      desc: (
        <div className='px-3 py-3'>
          <p className='font-semibold text-center'>Budgetary</p>
          <p className='text-gray-300 mt-3'>
            Mobile application implemented for planning money management during the crisis. Budgetary, a user-friendly cash management mobile app, aids individuals and households in navigating economic crises by facilitating precise spending practices. With features like income tracking, expense management, bill categorization, and budget planning, it offers a minimal and reliable platform. Users can easily monitor their financial health, set saving goals, and enhance savings during challenging times, making it a valuable tool for effective financial management.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      link: "https://github.com/ShashiniHanshani/ITP_WD_B02_13",
      tools: <div>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2 mb-2">
          MongoDB
        </button>
        <button class="bg-gray-600 text-gray-300   rounded px-2 mr-2 mb-2">
          ExpressJS
        </button>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2 mb-2">
          ReactJS
        </button>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2 mb-2">
          NodeJS
        </button>
        <button class="bg-gray-600 text-gray-300  rounded px-2 mr-2 mb-2">
          Tailwind CSS
        </button>
      </div>,
      desc: (
        <div className='px-3 py-3'>
          <p className='font-semibold text-center'>Sansalu </p>
          <p className='font-semibold text-center'>T-Shirt Manufacturing System Web Application</p>
          <p className='text-gray-300 mt-3'>
            A business web application which manages the buying, production management and selling of t-shirts of a company. The web application was built using MERN stack technology. The system is made up of eight major components that support each individual functionality, Client Management, HR Management, Design Management, Order Management, Delivery Management, Payment Management, Stock Management and Production Management.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      link: "",
      tools: <div>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          Java
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          SQL
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          Javascript
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          Bootstrap
        </button>
      </div>,
      desc: (
        <div className='px-3 py-3'>
          <p className='font-semibold text-center'>Tasty Delights </p>
          <p className='font-semibold text-center'>Online Food Delivering System Web Application</p>
          <p className='text-gray-300 mt-3'>
            Web application implemented to handle the process of an online restaurant. This is a group project successfully completed with the contribution of 4 group members. I was responsible for handling the delivery management function. Web application implemented to handle the process of an online restaurant. This is a group project successfully completed with the contribution of 4 group members. I was responsible for handling the delivery management function.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      link: "",
      tools: <div>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          HTML
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          SQL
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          CSS
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          Bootstrap
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          Javascript
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          PHP
        </button>
        <button class="bg-gray-600 text-gray-300 rounded px-2 mr-2 mb-2">
          XAMPP
        </button>
      </div>,
      desc: (
        <div className='px-3 py-3'>
          <p className='font-semibold text-center'>Online Voting System Web Application</p>
          <p className='text-gray-300 mt-3'>
            Online web application for a reality show designed for the users to allow to vote for the competitors during the live session. It helps the competitors to manage their profile pages and can view the no.of votes received.
          </p>
        </div>
      ),
    },

  ];
  const filterAndSortProjects = () => {
    let filteredProjects;

    if (selectedCategory === 'All') {
      filteredProjects = [...projects];
    } else if (selectedCategory === 'Mobile Applications') {
      filteredProjects = projects.filter((project) => [1, 2, 4].includes(project.id));
    } else if (selectedCategory === 'Web Applications') {
      filteredProjects = projects.filter((project) => [5, 6, 7].includes(project.id));
    } else {
      filteredProjects = [];
    }

    // Sorting by project id
    filteredProjects.sort((a, b) => a.id - b.id);

    return filteredProjects;
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-xl border-b-2 border-gray-500">03. Projects</p>
        </div>

        <div className="flex gap-4 mt-10">
          <button
            className={`bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded ${selectedCategory === 'All' ? 'bg-gray-500 text-white' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          <button
            className={`bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded ${selectedCategory === 'Mobile Applications' ? 'bg-gray-500 text-white' : ''}`}
            onClick={() => setSelectedCategory('Mobile Applications')}
          >
            Mobile Applications
          </button>
          <button
            className={`bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded ${selectedCategory === 'Web Applications' ? 'bg-gray-500 text-white' : ''}`}
            onClick={() => setSelectedCategory('Web Applications')}
          >
            Web Applications
          </button>
        </div>


        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0 mt-10">
          {filterAndSortProjects().map(({ id, link, tools, desc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4">
              {desc}
              <div >
                <button className="m-2 duration-200 hover:scale-105  text-blue-500 rounded" onClick={() => redirectToGitHub(link)}>
                  Github
                </button>
              </div>
              <div>{tools}</div>
            </div>
          ))}
        </div>
        <div className="pb-8 mt-10">
          <p className="text-xl border-b-2 border-gray-500">Publications</p>
          <p className='text-gray-300 mt-8'>
            "WonderSL: The Recommendation-Based Personalized Tour Planner," has been officially published in the prestigious Tuijin Jishu/Journal of Propulsion Technology, Vol. 44, Issue 4, 2023.</p>
          <div>
            <button
              className="m-2 duration-200 hover:scale-105 text-blue-500 rounded"
              onClick={() => window.location.href = "https://propulsiontechjournal.com/index.php/journal/article/view/2569"}
            >
              View
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Portfolio;
