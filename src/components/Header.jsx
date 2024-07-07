import { Link, } from 'react-router-dom';


export default function Header() {
  return (
    <header className='bg-bgNeutralSilver h-20'>

      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap top-7 left-28 gap-2'>
            <img src="/logo.png" alt="x" className='h-6 w-8 mt-1'/>
            <span className='text-slatedark sm:inline font-bold text-sm sm:text-xl flex flex-wrap top-7 left-28 gap-2'>Nexcent</span>
          </h1>
        </Link>

        <ul className='flex h-6 mt-1 left-96 gap-10 font-normal text-base text-left text-slatedark'>
          <Link to='/'>
            <li className='hidden sm:inline hover:underline'>
              Home
            </li>
          </Link>

          <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>
              Service
            </li>
          </Link>

          <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>
              Feature
            </li>
          </Link>

          <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>
              Product
            </li>
          </Link>

          <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>
              Testimonial
            </li>
          </Link>

          <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>
              FAQ
            </li>
          </Link>

        </ul>

        <ul className='flex h-10 mt-1.5 gap-3'>
          <Link to='/signin'>
            <button className='bg-bgNeutralSilver text-myGreen rounded-md py-2 px-5 w-24 sm:inline  text-sm font-medium text-center hover:opacity-80'>
              Login
            </button>
          </Link>

          <Link to='/signup'>
            <button className='bg-myGreen text-myWhite rounded-md py-2 px-5 w-24 text-center font-medium text-sm sm:inline hover:opacity-95'>
              Sign up
            </button>
          </Link>
        </ul>

      </div>
    </header>
  );
}