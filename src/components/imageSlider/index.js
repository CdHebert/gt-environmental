import React, { useState, useEffect, useRef } from 'react'
import { SliderData } from './sliderData'
// import { GoArrowLeft, GoArrowRight } from 'react-icons/go'


const ImageSlider = ({ slides }) => {
    const [currentImg, setCurrentImg] = useState(0)
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
                setCurrentImg((prevImg) =>
                    prevImg === length - 1 ? 0 : prevImg + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        }
    } )

    return (
        <div className='pipe-container'>
            
            {SliderData.map((images, index) => {
                return (
                    <div
                        className={index === currentImg ? 'slide active' : 'slide'}
                        key={index}
                    >

                        {index === currentImg && (
                            <img src={images.image} alt={images} className='pipe-img' />
                        )}
                    </div>
                )
            })}
            <div className="slideshowDots">
                {SliderData.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${currentImg === idx ? " active" : ""}`}
                        onClick={() => {
                            setCurrentImg(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>

    )
}

export default ImageSlider;