import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faPencil, faCogs, faCircleCheck, } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <>
      <div className="flex flex-col gap-10 w-[90%] max-w-[1200px] mx-auto my-20 text-center bg-slate-300 dark:bg-[#ffffff0d] rounded-xl p-6 sm:p-10">
        <h1 className='text-2xl md:text-3xl font-extrabold dark:text-white'>How it works</h1>

        <div className='flex  dark:text-white flex-wrap'>

          <div className='md:w-1/2 flex text-left justify-center items-center  gap-4 mb-12' >
            <div className='rounded-full bg-gradient-1 w-[80px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center'><FontAwesomeIcon icon={faWandMagicSparkles} className='sm:text-xl text-white' /></div>
            <div>
              <h3 className='sm:text-xl font-bold'>Choose Your Genre</h3>
              <p className='text-sm sm:text-base'>Select from a wide range of genres or create a custom blend.</p>
            </div>
          </div>

          <div className='md:w-1/2 flex text-left justify-center items-center  gap-4 mb-12' >
            <div className='rounded-full bg-gradient-1 w-[80px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center'><FontAwesomeIcon icon={faPencil} className='sm:text-xl text-white' /></div>
            <div>
              <h3 className='sm:text-xl font-bold'>Choose Your Genre</h3>
              <p className='text-sm sm:text-base'>Select from a wide range of genres or create a custom blend.</p>
            </div>
          </div>

          <div className='md:w-1/2 flex text-left justify-center items-center  gap-4 mb-12' >
            <div className='rounded-full bg-gradient-1 w-[80px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center'><FontAwesomeIcon icon={faCogs} className='sm:text-xl text-white' /></div>
            <div>
              <h3 className='sm:text-xl font-bold'>Choose Your Genre</h3>
              <p className='text-sm sm:text-base'>Select from a wide range of genres or create a custom blend.</p>
            </div>
          </div>

          <div className='md:w-1/2 flex text-left justify-center items-center  gap-4 mb-12' >
            <div className='rounded-full bg-gradient-1 w-[80px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center'><FontAwesomeIcon icon={faCircleCheck} className='sm:text-xl text-white' /></div>
            <div>
              <h3 className='sm:text-xl font-bold'>Choose Your Genre</h3>
              <p className='text-sm sm:text-base'>Select from a wide range of genres or create a custom blend.</p>
            </div>
          </div>


        </div>




      </div>


    </>
  )
}

export default HowItWorks