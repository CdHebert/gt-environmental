import React, { useState, useEffect, useRef } from 'react'
import { SliderData } from './sliderData'
import { useSpring, a, animated, config } from '@react-spring/web'

import styles from '../../assets/css/styles.module.css'


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
    })

    const [{ background }] = useSpring(
        () => ({
            from: {
                background: currentImg,
            },
            to: {
                background: currentImg,
            },
            config: config.molasses,
            loop: {
                reverse: true,
            },
        }),
        []
    )


    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })


    return (
        <div className={`pipe-container ${styles.container}`}>
            <a.div
                onClick={() => set(state => !state)}
                className={`${styles.c} ${styles.back}`}
                style={{ opacity: opacity.to(o => 1 - o), transform }}
            >
                <h2>Hello and Welcome</h2>
                <p>this is what we offer with our wire work on panels you can expect great things</p>
            </a.div>
            {SliderData.map((images, index) => {
                return (

                    <a.div 
                    onClick={() => set(state => !state)}
                    // className={``}
                    style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                    }}
                        className={index === currentImg ? 'slide active' : 'slide'}
                        key={index}
                    >
                        <animated.div style={{background }}>
                            {index === currentImg && (
                                <img src={images.image} alt={images} className='pipe-img' />
                            )}
                        </animated.div>
                    </a.div>
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