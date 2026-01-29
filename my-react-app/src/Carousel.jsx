import { useState } from 'react';

import firstDesktopImage from './assets/desktop-image-hero-1.jpg';
import secondDesktopImage from './assets/desktop-image-hero-2.jpg';
import thirdDesktopImage from './assets/desktop-image-hero-3.jpg';
import firstMobileImage from './assets/mobile-image-hero-1.jpg';
import secondMobileImage from './assets/mobile-image-hero-2.jpg';
import thirdMobileImage from './assets/mobile-image-hero-3.jpg';
import arrowIcon from './assets/icon-arrow.svg';

import Updater from './Updater.jsx';
import './Carousel.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const DesktopSlides = [firstDesktopImage, secondDesktopImage, thirdDesktopImage];
  const MobileSlides = [firstMobileImage, secondMobileImage, thirdMobileImage];

  const handleNext = () => { setCurrentIndex(prev => (prev === 2 ? 0 : prev + 1)); }
  const handlePrev = () => { setCurrentIndex(prev => (prev === 0 ? 2 : prev - 1)); }

  const carouselTexts = [
    {
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of what you love.'
    }, 
    {
      title: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    },
    {
      title: 'We are available all around the globe',
      text: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
    }
    
  ]

  return (
    <div className='flex max-xl:flex-col w-full xl:h-140 bg-white'>
      <div className='relative carousel-div h-140 box-border'>
        <img className='lg:block hidden h-full' src={ DesktopSlides[currentIndex] } alt="Carousel Slide" />
        <img className='lg:hidden max-[550px]:h-full max-[550px]:w-auto block w-full h-auto sm:h-full sm:w-auto' src={ MobileSlides[currentIndex] } alt="Carousel Slide" />
        <div className='xl:hidden absolute flex right-0 left-0 bottom-4 w-full h-10'>
          <Updater onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-end'>
        <div className="max-lg:px-10 max-lg:py-15 lg:p-20 xl:p-20 flex flex-col gap-6 ">
          <h1 className='carousel-title'>{ carouselTexts[currentIndex].title }</h1>
          <p className='text-gray-500 text-sm'>{ carouselTexts[currentIndex].text }</p>
          <div className='shop-now flex items-center gap-4 cursor-pointer'>
            <p className='spaced-carousel-text text-xs select-none'>SHOP NOW</p>
            <img className='arrow-icon' src={ arrowIcon } />
          </div>
        </div>
        <div className='max-xl:hidden xl:flex'>
          <Updater onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;