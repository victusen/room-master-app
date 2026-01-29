import closeIcon from './assets/icon-close.svg';

function MobileNav() {
  const parentOnClose = () => {
    document.getElementById('mobile-nav-con').classList.add('hidden');
  }
  const childOnClose = (e) => {
    e.stopPropagation();
  }

  return (
    <div
      onClick={ parentOnClose }
      className="hidden fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-black/60 z-20" id="mobile-nav-con"
    >
      <div
        className="flex items-center h-30 w-full px-8 gap-10 bg-white"
        onClick={ childOnClose } 
      >
        <div
          className=' relative flex items-center p-4 hover:bg-gray-200 rounded-sm cursor-pointer select-none'
          onClick={ parentOnClose }
        >
          <img
            className='pointer-events-none' 
            src={ closeIcon } 
            alt="Close Icon" 
          />
        </div>
        <nav 
          className='w-full'
        >
          <ul 
            className='flex flex-cols items-center gap-6 font-bold text-black text-lg'
          >
            <li className='cursor-not-allowed'>home</li>
            <li className='cursor-not-allowed'>shop</li>
            <li className='cursor-not-allowed'>about</li>
            <li className='cursor-not-allowed'>contact</li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default MobileNav;