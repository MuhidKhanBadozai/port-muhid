import React, { useRef, useEffect, useState } from 'react';
import './style/reveal_text.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Reveal_text() {
    const buttonRef = useRef(null);
    const headingRef = useRef(null);
    const aboutRef = useRef(null);
    const benjiRef = useRef(null);
    const abtRef1 = useRef(null);
    const abtRef2 = useRef(null);

    // State to track screen width
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        const button = buttonRef.current;

        const handleMouseMove = (event) => {
            const buttonRect = button.getBoundingClientRect();
            const buttonCenterX = buttonRect.left + buttonRect.width / 2;
            const buttonCenterY = buttonRect.top + buttonRect.height / 2;
            const offsetX = (event.clientX - buttonCenterX) * 0.2;
            const offsetY = (event.clientY - buttonCenterY) * 0.2;

            gsap.to(button, {
                x: offsetX,
                y: offsetY,
                duration: 0.3,
                ease: 'power3.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power3.out',
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        // GSAP Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: '30% 80%',
                end: 'bottom top',
                scrub: false,
                markers: false,
                onEnter: () => tl.play(),
                onLeave: () => tl.reverse(),
                onEnterBack: () => tl.play(),
                onLeaveBack: () => tl.reverse(),
            },
        });

        tl.fromTo(
            headingRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
        )
            .fromTo(
                benjiRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
                "-=1"
            )
            .fromTo(
                abtRef1.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
                "-=1"
            )
            .fromTo(
                abtRef2.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
                "-=1"
            )
            .fromTo(
                buttonRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
                "-=1"
            );

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Function to scroll to the contact section
    const scrollToContact = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="reveal-cont" ref={aboutRef} id='aboutMe'>
            <div className="info-cont">
                <div className="heading" ref={headingRef}>
                    <h1>
                        I believe in a user-centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
                    </h1>
                </div>

                {/* Conditional Rendering Based on Screen Size */}
                {isMobile ? (
                    // Mobile layout (Button comes last)
                    <div className="">
                        {/* <div className="bg-white mt-8 p-5">
                            <p className="text-gray-3 poppins-light-italic ml-2 mb-1 select-none">This is me.</p>
                            <hr className='bg-gray-3 origin-left w-full' />
                        </div> */}
                        <div className="about flex flex-col ">
                            <h2 className='intro' ref={benjiRef}>Hi, I'm Muhid.</h2>
                            <div className="desc">
                                <p className="mt-5 text-lg" ref={abtRef1}>
                                    I'm a 22-year-old passionate fullstack web developer dedicated to turning ideas into creative solutions.
                                </p>
                                <p className="mt-5 text-lg" ref={abtRef2}>
                                    I'm involved in every step of the process: from discovery and design to development, testing, and deployment.
                                </p>
                            </div>
                            <button
                                ref={buttonRef}
                                className="touch bg-black text-white w-40 h-12 rounded-full mt-10"
                                onClick={scrollToContact}
                            >
                                <i className="icon-arrow fa-solid fa-arrow-right mr-2 mt-1"></i>
                                <span>Get in Touch</span>
                            </button>
                        </div>

                    </div>
                ) : (
                    // Desktop layout (Original order)
                    <div className="">
                        {/* <div className="bg-white mt-8 p-5">
                            <p className="text-gray-3 poppins-light-italic ml-2 mb-1 select-none">This is me.</p>
                            <hr className='bg-gray-3 origin-left w-full' />
                        </div> */}
                        <div className="about flex justify-between">
                            <div className="name-btn">
                                <h2 className='intro' ref={benjiRef}>Hi, I'm Muhid.</h2>
                                <button
                                    ref={buttonRef}
                                    className="touch bg-black text-white w-40 h-12 rounded-full mt-10"
                                    onClick={scrollToContact}
                                >
                                    <i className="icon-arrow fa-solid fa-arrow-right mr-2 mt-1"></i>
                                    <span>Get in Touch</span>
                                </button>
                            </div>
                            <div className="desc">
                                <p className="mt-5 text-lg" ref={abtRef1}>
                                    I'm a 22-year-old passionate fullstack web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.

                                </p>
                                <p className="mt-5 text-lg" ref={abtRef2}>
                                    I'm involved in every step of the process: from discovery and design to development, testing, and deployment. I focus on delivering high-quality, scalable results that drive positive user experiences.

                                </p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Reveal_text;