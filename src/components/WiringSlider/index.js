import React, { useState } from 'react'
import { WiringData } from '../imageSlider/sliderData'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'


const WireSlider = ({ slides }) => {
    const [currentWire, setCurrentWire] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrentWire(currentWire === length - 1 ? 0 : currentWire + 1)
    }

    const prevSlide = () => {
        setCurrentWire(currentWire === 0 ? length - 1 : currentWire - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='wire-container'>
            <GoArrowLeft className='mid-left-arrow' onClick={prevSlide} />
            <GoArrowRight className='mid-right-arrow' onClick={nextSlide} />
            {WiringData.map((wire, index) => {
                return (
                    <div
                        className={index === currentWire ? 'newSlide reactive' : 'newSlide'}
                        key={index}
                    >
                        {index === currentWire && (
                            <img src={wire.images} alt={wire} className='wire-img' />
                        )}
                    </div>
                )
            })}
        </div>

    )
}

export default WireSlider