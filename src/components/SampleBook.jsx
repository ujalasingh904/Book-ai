import img1 from "../assets/paradox.png"
import img2 from "../assets/mist.png"
import img3 from "../assets/ecos.png"

const SampleBook = () => {
    return (
        <>
            <section className="flex flex-col w-[80%] max-w-[1200px] mx-auto py-10 text-center gap-4 dark:text-white ">

                <h2 className="text-2xl font-semibold ">Sample Books Generated by BookAI</h2>
                <p className="text-lg font-[500] mb-10">Explore some of the captivating books created using our AI technology.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 justify-around'>

                    <div className="flex flex-col justify-center items-center p-4 rounded-xl dark:bg-[#ffffff0d] bg-slate-300 hover:-translate-y-4 transition-all duration-300 ">
                        <img src={img1} className="w-[60%] rounded-md mb-4"/>
                        <h1 className="font-bold text-2xl mb-2">Science Fiction</h1>
                        <p className='italic mb-4'>
                            "As Dr. Elara stepped through the shimmering portal, she knew
                            there was no turning back. The fate of two universes now rested in
                            her hands..."
                        </p>
                        <a href="#" className="text-primary text-lg font-semibold">Read more</a>
                    </div>

                    <div className="flex flex-col justify-center items-center p-4 dark:bg-[#ffffff0d] rounded-xl  bg-slate-300 hover:-translate-y-4 transition-all duration-300 ">
                        <img src={img2} className="w-[60%] rounded-md mb-4"/>
                        <h1 className="font-bold text-2xl mb-2">Mystery</h1>
                        <p className='italic mb-4'>
                            "The old lighthouse stood silent, its beacon long extinguished.
                            But on foggy nights, some swore they could still see its ghostly
                            light..."
                        </p>
                        <a href="#" className="text-primary text-lg font-semibold">Read more</a>
                    </div>

                    <div className="flex flex-col justify-center items-center p-4 dark:bg-[#ffffff0d] rounded-xl  bg-slate-300 hover:-translate-y-4 transition-all duration-300 ">
                        <img src={img3} className="w-[60%] rounded-md mb-4"/>
                        <h1 className="font-bold text-2xl mb-2">Fantasy</h1>
                        <p className='italic mb-4'>
                            "The ancient prophecy spoke of a child born with starlight in
                            their eyes. As the comet blazed overhead, the kingdom held its
                            breath..."
                        </p>
                        <a href="#" className="text-primary text-lg font-semibold">Read more</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SampleBook