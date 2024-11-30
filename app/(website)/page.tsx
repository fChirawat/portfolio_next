export default function Home (){
  return(
    <>
      <children/>
      {/* headbar */}
      <div className="flex h-screen">
                {/* Left Section: Pink Background */}
                <div className="w-1/2 bg-pink-500 flex flex-col items-center justify-center">
                    <ul className="h-1/3 mt-10">
                        <li>
                            <a href="/" className="text-white"><h1></h1></a>
                        </li>
                    </ul>
                    <div className="h-2/3 flex items-center">
                        <h1 className="text-3xl font-bold">แนะนำตัว</h1>
                    </div>
                </div>

                {/* Right Section: Blue Background */}
                <div className="w-1/2 bg-blue-500 flex items-center justify-center">
                    <ul>
                        <li>
                            <a href="/" className="text-white">Logo</a>
                        </li>
                    </ul>
                </div>
            </div>


      <div><h1>about</h1></div>

    </>
  );
}