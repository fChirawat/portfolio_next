export default function Home() {
  const sections = [
    {
      title: "Skill",
      icons: [
        "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
        "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      ],
    },
    {
      title: "Framework",
      icons: [
        "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
        "https://img.icons8.com/color/200/vue-js.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      ],
    },
    {
      title: "Software Tools",
      icons: [
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        "https://cdn.worldvectorlogo.com/logos/xampp.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      ],
    },
  ];

  const projects = [
    {
      title: "Team Project: Sell By long",
      duration: "June 2024 - October 2024",
      university: "University of Phayao, Phayao Thailand",
      description: " Sell By Long is an online store offering both new and pre-owned shoes of high quality. We provide a wide variety of styles, from sneakers to classic footwear, all carefully inspected for condition. Enjoy easy browsing, fast shipping, and great prices on shoes that suit every occasion.",
      qrCode: "/img/sellbtlong.png", 
    },
    {
      title: "Database : Secondhand fashion shop ",
      duration: "March 2024 - April 2024",
      university: "University of Phayao, Phayao Thailand",
      description: "Secondhand Fashion Shop is a store selling lightly used secondhand fashion items at discounted prices. The products are barely used, offering great quality at affordable rates.",
      qrCode: "/img/qrDb.png", 
    }
  ];

  return (
    <div className="text-gray-300 bg-gray-900 min-h-screen">
      <div className="container mx-auto py-10 px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-800 shadow-lg p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                {section.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {section.icons.map((icon, idx) => (
                  <img
                    key={idx}
                    className="w-14 h-14 rounded-full border-2 border-gray-700 hover:border-gray-500 transition duration-300"
                    src={icon}
                    alt={`${section.title} icon`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Project / Experience</h2>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg p-6 rounded-lg mb-6 flex justify-between items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.duration}</p>
                <p className="mt-2 font-semibold">{project.university}</p>
                <p className="mt-2">{project.description}</p>
              </div>
              <div className="ml-6 flex-shrink-0">
                <img
                  className="w-24 h-24 rounded-lg border-2 border-gray-700"
                  src={project.qrCode}
                  alt="QR Code"
                />
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
