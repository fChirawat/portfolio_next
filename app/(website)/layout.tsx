import Image from 'next/image';

export default function LayoutWeb({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="h-[250px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-white">
                <div className="container mx-auto h-full flex items-center">
                    <div className="w-1/5 flex flex-col justify-center items-center">
                        <div className="rounded-full w-[10rem] overflow-hidden shadow-lg">
                            <Image
                                src="/img/Me.jpg"
                                alt="Profile"
                                width={160}
                                height={160} 
                            />
                        </div>
                        <p className="mt-4 font-bold text-lg">Chirawat Pingmueang</p>
                    </div>
                    <div className="w-4/5">
                        <h1 className="text-4xl font-bold tracking-wide">
                        Welcome to the portfolio of Chirawat Pingmueang.
                        </h1>
                        <p className="mt-2 text-lg opacity-90">
                            <div className='flex'>
                                <img className='w-[2rem] mx-2' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" /><a className="mr-5" href="https://github.com/fChirawat" target="_blank" rel="noopener noreferrer">Github</a>
                                <img className='w-[2rem] mx-2' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" /><a className="mr-5" href="" target="" rel="noopener noreferrer">Kang2499k11@gmail.com</a>
                                <img className='w-[2rem] mx-2' src="https://freesvg.org/img/molumen_phone_icon.png" alt="" /><a className="mr-5" href="tel:0890439908">+66 89-043-9908</a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8">{children}</div>
        </>
    );
}
