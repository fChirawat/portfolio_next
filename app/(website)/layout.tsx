export default function LayoutWeb({
    children,
}: {
    children: React.ReactNode
}){
    return( 
        <>
            <div className="h-[500px]">
                <div className="container mx-auto h-full flex items-center">
                    <div className="w-1/5 flex flex-col justify-center items-center">
                        <div className="rounded-full w-[10rem]"><img src="" alt="" /></div>
                        <div className="text-white text-xl mt-4">Chirawat Pingmueang</div>
                    </div>
                    <div className="2/5 pl-10">
                        <div className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eaque molestias voluptatem tempore! Quo consequatur placeat ut quam sint tempora! Consequuntur eos quo commodi cumque nobis ut facilis nulla cum.</div>
                    </div>
                </div>
            </div>

            <div className="">{children}</div>
        </>
    );
}