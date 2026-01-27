import darkImage from './assets/image-about-dark.jpg';
import dayImage from './assets/image-about-light.jpg';

function GridContainer() {

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
    };
    const titleStyle = {
        letterSpacing: 6,
        fontSize: 14,
        fontWeight: 600
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr_auto]">
            <img className='w-full' src={ darkImage } />
            <div className="box-border max-xl:py-18 max-xl:px-10 md:px-20 gap-6 lg:gap-4 flex flex-col justify-center text-left">
                <h1 className='text-black' style={ titleStyle }>ABOUT OUR FURNITURE</h1>
                <p className='text-gray-500 text-sm'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick  cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <img className='w-full' src={ dayImage } />
        </div>
    );
}

export default GridContainer;