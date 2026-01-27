import backArrow from './assets/icon-angle-left.svg';
import forwardArrow from './assets/icon-angle-right.svg';

function Updater({ onNext, onPrev }) {
  return (
    <div
      className="flex items-center xl:justify-start justify-end h-auto w-full box-border"
    >
      <div 
        onClick={ onPrev } 
        className='bg-black hover:bg-gray-500 flex items-center justify-center py-6 px-8 cursor-pointer select-none' 
      >
        <img 
          src={backArrow} 
          alt="Back" />
      </div>
      <div
        onClick={ onNext }
        className='bg-black hover:bg-gray-500 flex items-center justify-center py-6 px-8 cursor-pointer select-none' 
      >
        <img
          src={forwardArrow}
          alt="Forward" 
        />
      </div>
    </div>
  );
}

export default Updater;
