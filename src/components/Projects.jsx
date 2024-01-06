import React from 'react'

const Portfolio = () => {

  const projects = [

    {
      id: 1,

      desc: <div className='px-3 py-3'><p className='font-semibold text-center'>WonderSL </p>
        <p className='mt-3'>
          Mobile Application including Map view, chatbot function, travel destinations and tour planning.
        </p>
        <p>WonderSL is an application to be developed by positioning the satellite view of the best travelling places in Sri Lanka through the map within the application. This mainly focuses the voyages and those who are curious to travel but cannot make it work due to the busy life schedule. </p>
      </div>,
    },
    {
      id: 2,

      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias hic sint assumenda recusandae, itaque consequatur vero quam voluptas praesentium maiores quae labore cum iste error possimus eveniet tenetur repellat!",
    },
    {
      id: 3,

      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias hic sint assumenda recusandae, itaque consequatur vero quam voluptas praesentium maiores quae labore cum iste error possimus eveniet tenetur repellat!",
    },
    {
      id: 4,

      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias hic sint assumenda recusandae, itaque consequatur vero quam voluptas praesentium maiores quae labore cum iste error possimus eveniet tenetur repellat!",
    },
    {
      id: 5,

      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias hic sint assumenda recusandae, itaque consequatur vero quam voluptas praesentium maiores quae labore cum iste error possimus eveniet tenetur repellat!",
    },
    {
      id: 6,

      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias hic sint assumenda recusandae, itaque consequatur vero quam voluptas praesentium maiores quae labore cum iste error possimus eveniet tenetur repellat!",
    },
    {
      id: 7,

      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias hic sint assumenda recusandae, itaque consequatur vero quam voluptas praesentium maiores quae labore cum iste error possimus eveniet tenetur repellat!",
    },
    {
      id: 8,

      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias hic sint assumenda recusandae, itaque consequatur vero quam voluptas praesentium maiores quae labore cum iste error possimus eveniet tenetur repellat!",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-xl  border-b-2 border-gray-500">
            03. Projects
          </p>

        </div>

        <div className="flex gap-4 mt-10">
          <button className="bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
            All
          </button>
          <button className="bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
            Web Applications
          </button>
          <button className="bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
            Mobile Applications
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 mt-10">
          {projects.map(({ id, src, desc }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p>{desc}</p>
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio