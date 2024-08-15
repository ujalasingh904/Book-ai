import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBook, faDownload, faLanguage ,faCog } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <>
            <div className=' w-[80%] max-w-[1200px] mx-auto py-20 text-center gap-6 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  dark:text-white '>

                <div className='flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 '>
                    <div className='rounded-full w-[60px] h-[60px] bg-gradient-2 flex items-center justify-center mb-4 text-white'>
                        <FontAwesomeIcon icon={faRobot} className='text-2xl'/>
                    </div>
                    <h1 className='text-xl font-bold'>AI-Powered Writing</h1>
                    <p className='font-semibold'>Generate high-quality content with advanced AI technology.</p>

                </div>

                <div className='flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 '>
                    <div className='rounded-full w-[60px] h-[60px] bg-gradient-2 flex items-center justify-center mb-4 text-white'>
                        <FontAwesomeIcon icon={faBook} className='text-2xl' /> 
                    </div>
                    <h1 className='text-xl font-bold'>Custom Genres</h1>
                    <p className='font-semibold'>Create stories in any genre or blend multiple styles.</p>

                </div>

                <div className='flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 '>
                    <div className='rounded-full w-[60px] h-[60px] bg-gradient-2 flex items-center justify-center mb-4 text-white'>
                        <FontAwesomeIcon icon={faDownload} className='text-2xl' />
                    </div>
                    <h1 className='text-xl font-bold'>Instant Download</h1>
                    <p className='font-semibold'>Get your completed book in various formats instantly</p>

                </div>

                <div className='flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 '>
                    <div className='rounded-full w-[60px] h-[60px] bg-gradient-2 flex items-center justify-center mb-4 text-white'>
                        <FontAwesomeIcon icon={faLanguage} className='text-2xl' />
                    </div>
                    <h1 className='text-xl font-bold'>Multilingual</h1>
                    <p className='font-semibold'>Generate content in multiple languages effortlessly.</p>

                </div>


            </div>
        </>
    )
}

export default Features