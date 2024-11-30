import Image from 'next/image'
export default function LayoutWeb({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="h-[250px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-white">
                <div className="container mx-auto h-full flex items-center">
                    <div className="w-1/5 flex flex-col justify-center items-center">
                        <div className="rounded-full w-[10rem] overflow-hidden shadow-lg">
                            <img src="/img/me" alt="Profile" /> 
                        </div>
                        <p className="mt-4 font-bold text-lg">Chirawat Pingmueang</p>
                    </div>
                    <div className="w-4/5">
                        <h1 className="text-4xl font-bold tracking-wide">Welcome to Our Website</h1>
                        <p className="mt-2 text-lg opacity-90">
                            Enhance your experience with our modern and stylish design.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8">{children}</div>
        </>
    );
}
