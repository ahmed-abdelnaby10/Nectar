import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bg1 from "../../assests/slider/3698 1.png"
import bg2 from "../../assests/slider/pngfuel.png"
import { homeSlider } from '../../utils/offers';

const indicators = () => (<div className="indicator offer-ind"></div>);

export default function OffersSlider() {
    return (
        <div className='slide-container w-full'>
            <Slide
                infinite={true}
                autoplay={true}
                arrows={false}
                duration={3000}
                canSwipe={true}
                indicators={indicators}
            >
                {
                    homeSlider.map((slide)=>{
                        return(
                            <div key={slide.id} className="flex items-center justify-end w-full relative px-3.5 h-115 tab:h-40 tab:justify-center">
                                <div className="rounded-lg slider-page absolute left-0 top-0 overflow-hidden w-full h-full">
                                    <img src={slide.image} alt="" className="absolute h-full" />
                                    <img src={bg1} alt="" className="absolute right-0" />
                                    <img src={bg2} alt="" className="absolute right-0 bottom-0" />
                                </div>
                                <div className="z-50 flex flex-col items-center">
                                    <h1 className="aclonica text-xl text-center dark:text-black">{slide.offerTitle}</h1>
                                    <p className="text-main text-sm font-medium text-center dark:text-purple-500">Get Up To {slide.discount} OFF</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slide>
        </div>
    )
}