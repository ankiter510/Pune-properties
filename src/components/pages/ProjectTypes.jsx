import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      src: project1,
      caption: (
        <div className="text-white px-2 py-1 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-60">
          <p className="transition-opacity duration-300">TOP SELLING PROJECTS</p>
        </div>
      ),
    },
    {
      id: 2,
      src: project2,
      caption: (
        <div className="text-white px-2 py-1 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-60">
          <p className="transition-opacity duration-300">LUXURY</p>
        </div>
      ),
    },
    {
      id: 3,
      src: project3,
      caption: (
        <div className="text-white px-2 py-1 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-60">
          <p className="transition-opacity duration-300">READY TO MOVE</p>
        </div>
      ),
    },
    {
      id: 4,
      src: project4,
      caption: (
        <div className="text-white px-2 py-1 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-60">
          <p className="transition-opacity duration-300">BANGLOWS/PLOTS</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 py-4 mb-10 mt-">
      <h1 className="text-4xl font-bold mb-8 mt-12">Project Types</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group w-60 h-60 overflow-hidden rounded-lg shadow-md flex items-center justify-center bg-white border"
          >
            <img
              src={project.src}
              alt={`Project ${project.id}`}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-125"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {project.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
