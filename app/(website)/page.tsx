export default function Home() {
  return (
    <>
      <children />
      <div className="bg-white text-gray-700">
        <div className="container mx-auto  ">
          <div className="grid grid-cols-12 ">
            <div className="col-span-4">
              <h1 className="mt-6 text-3xl ">Skill</h1>
              <ul className="list-disc mt-6 mb-6    " >
                <div className="flex ">
                  <img className="rounded-full  w-[2rem] mx-2 my-1"src="https://cdn.worldvectorlogo.com/logos/html-1.svg"alt=""/>
                  <img className="rounded-full  w-[2rem] mx-2 my-1"src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"alt=""/>
                  <img className="rounded-full  w-[2rem] mx-2 my-1"src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"alt="" />
                </div>
                <div className="flex mt-2">
                  <img className="rounded-full  w-[2rem] mx-2 my-1"src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"alt=""/>
                  <img className="rounded-full  w-[2rem] mx-2 my-1"src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"alt=""/>
                </div>
              </ul>
            </div>

            <div className="col-span-4">
              <h1 className="mt-6 text-3xl">Framework</h1>
              <ul className="list-disc mt-6 mb-6">
                <div className="flex ">
                  <img className="rounded-full  w-[2rem]  mx-2 my-1"src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"alt=""/>
                  <img className="rounded-full  w-[2rem]  mx-2 my-1"src="https://img.icons8.com/color/200/vue-js.png" alt=""/>
                  <img className="rounded-full  w-[2rem]  mx-2 my-1"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"alt="" />
                </div>
                <div className="flex  mt-2 ">
                  <img className="rounded-full  w-[2rem] mx-2 my-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"alt=""/>
                  <img className="rounded-full  w-[2rem] mx-2 my-1" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt=""/>
                  <img className="rounded-full  w-[2rem] mx-2 my-1" src='https://cdn.worldvectorlogo.com/logos/next-js.svg' alt="" />
                </div>
                <div className="flex   mt-2">
                  <img className="rounded-full  w-[2rem] mx-2 my-1"   src="https://cdn.iconscout.com/icon/premium/png-256-thumb/express-js-5379348-4492470.png?f=webp"    alt=""/>
                  <img className="rounded-full  w-[2rem] mx-2 my-1"  src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" />
                </div>
              </ul>
            </div>  

            <div className="col-span-4">
              <h1 className="mt-6 text-3xl">Software Tools</h1>
              <ul className="list-disc mt-6 mb-6">
                <div className="flex  ">
                  <img className="rounded-full  w-[2rem] mx-2 my-1"  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"   alt="" />
                  <img className="rounded-full  w-[2rem] mx-2 my-1"  src="https://cdn.worldvectorlogo.com/logos/xampp.svg"  alt="" />
                </div>
                <div className="flex  mt-2">
                  <img className="rounded-full  w-[2rem] mx-2 my-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"    alt=""  />
                  <img className="rounded-full  w-[2rem] mx-2 my-1"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt=""  />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
