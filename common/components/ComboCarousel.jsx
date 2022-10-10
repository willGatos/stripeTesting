import {useState} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactSimplyCarousel from 'react-simply-carousel';
import combos from '../helpers/combosRelationship';
import ArrowLeft from "../../public/LeftArrow.svg"
import ArrowRight from "../../public/ArrowRight.svg"

function ComboCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <ReactSimplyCarousel
    activeSlideIndex={activeSlideIndex}
    onRequestChange={setActiveSlideIndex}
    itemsToShow={1}
    itemsToScroll={1}
    forwardBtnProps={{
      //here you can also pass className, or any other button element attributes
      style: {
        alignSelf: 'center',
        background: '#18465E',
        border: 'none',
        borderRadius: '50%',
        color: 'white',
        cursor: 'pointer',
        fontSize: '20px',
        height: 30,
        lineHeight: 1,
        textAlign: 'center',
        width: 30,
      },
      children: <span><img src={ArrowRight.src} alt={`>`}/></span>,
    }}
    backwardBtnProps={{
      //here you can also pass className, or any other button element attributes
      style: {
        alignSelf: 'center',
        background: '#18465E',
        border: 'none',
        borderRadius: '50%',
        color: 'white',
        cursor: 'pointer',
        fontSize: '20px',
        height: 30,
        lineHeight: 1,
        textAlign: 'center',
        width: 30,
      },
      children: <span><img src={ArrowLeft.src} alt="<"/></span>,
    }}
    responsiveProps={[
      {
        itemsToShow: 2,
        itemsToScroll: 2,
        minWidth: 768,
      },
    ]}
    speed={400}
    easing="linear"
  >
    {combos.map((combo, key)=>(
        <LazyLoadImage
        key={key}
        alt={combo.name}
        width={"320px"}
        src={combo.image.src} />
    ))}
    </ReactSimplyCarousel>
)
}

export default ComboCarousel