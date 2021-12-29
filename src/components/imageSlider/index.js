import React, { useState } from 'react'
import { SliderData } from './sliderData'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'


const ImageSlider = ({ slides }) => {
    const [currentImg, setCurrentImg] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='pipe-container'>
            <GoArrowLeft className='left-arrow' onClick={prevSlide} />
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
            <GoArrowRight className='right-arrow' onClick={nextSlide} />
        </div>

    )
}

export default ImageSlider;