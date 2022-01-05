import React, { useState, useEffect, useRef } from 'react'
import { WiringData } from '../imageSlider/sliderData'
// import { GoArrowLeft, GoArrowRight } from 'react-icons/go'


const WireSlider = ({ slides }) => {
    const [currentWire, setCurrentWire] = useState(0)
    const length = slides.length;
    const timeoutRef = useRef(null)
    const delay = 3500;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentWire((prevImg) =>
                    prevImg === length - 1 ? 0 : prevImg + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        }
    })
    return (
        <div className='wire-container'>
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
                <div className="slideshowDots">
                    {WiringData.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${currentWire === idx ? " active" : ""}`}
                            onClick={() => {
                                setCurrentWire(idx);
                            }}
                        ></div>
                    ))}
                </div>
        </div>

    )
}

export default WireSlider