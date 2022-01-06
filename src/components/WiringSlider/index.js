import React, { useState, useEffect, useRef } from 'react'
import { WiringData } from '../imageSlider/sliderData'
import { useSpring, a } from '@react-spring/web'

import styles from '../../assets/css/styles.module.css'



const WireSlider = ({ slides }) => {
    const [currentWire, setCurrentWire] = useState(0)
    const length = slides.length;
    const timeoutRef = useRef(null)
    const delay = 55500;

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

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })


    return (
        // <div className={styles.container} onClick={() => set(state => !state)}>

        /* <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
                opacity,
                transform,
                rotateX: '180deg',
            }}
        > */



        < div onClick={() => set(state => !state)} className={`wire-container ${styles.container}`} >
            <a.div
                className={`${styles.c} ${styles.back}`}
                style={{ opacity: opacity.to(o => 1 - o), transform }}
            >
                <h2>Hello and Welcome</h2>
                <p>this is what we offer with our wire work on panels you can expect great things</p>
                </a.div>
            {
                WiringData.map((wire, index) => {
                    return (
                        <a.div
                            // className={``}
                            style={{
                                opacity,
                                transform,
                                rotateX: '180deg',
                            }}
                            className={index === currentWire ? ` ${styles.front} newSlide reactive ` : `newSlide`}
                            key={index}
                        >
                            {index === currentWire && (
                                <img src={wire.images} alt={wire} className='wire-img' />
                            )}

                        </a.div>
                    )
                })
            }

            {/* </div > */}
            {/* </a.div> */}
            < div className="slideshowDots" >
                {
                    WiringData.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${currentWire === idx ? " active" : ""}`}
                            onClick={() => {
                                setCurrentWire(idx);
                            }}
                        ></div>
                    ))
                }
            </div >
        </div >
    )
}

export default WireSlider