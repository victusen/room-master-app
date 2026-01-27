import './Header.css';
import hamburger from './assets/icon-hamburger.svg';
import logo from './assets/logo.svg';

function Header() {
  return (
    <header className='flex absolute z-10 top-0 left-0 right-0 w-full px-20 h-30 gap-20 md:bg-transparent items-center'>
      <div className="max-md:w-full flex items-center justify-between ">
        <img className='md:hidden' src={ hamburger } />
        <a href="/"><img className='' src={ logo } alt="logo" /></a> 
      </div>
      <div className="flex items-center g-20 max-md:hidden">
        {/* <img className='block md:hidden' src={ logo } alt="logo" /> */}
        <nav>
          <ul className='flex gap-6 text-white' >
            <li><a id='a' href="#home">home</a></li>
            <li><a id='a' href="#shop">shop</a></li>
            <li><a id='a' href="#about">about</a></li>
            <li><a id='a' href="#contact">contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 