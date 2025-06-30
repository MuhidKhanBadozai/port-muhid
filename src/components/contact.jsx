import React, { useRef, useEffect } from 'react';
import './style/contact.css';
import { gsap } from 'gsap';

function Getintouch() {
    const emailButtonRef = useRef(null);
    const phoneButtonRef = useRef(null);
    const linkedInButtonRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);

    useEffect(() => {
        const buttons = [emailButtonRef.current, phoneButtonRef.current, linkedInButtonRef.current];

        buttons.forEach((button) => {
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

            // GSAP Timeline for scroll-based animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#contact',
                    start: '30% 80%',
                    end: '20% top',
                    scrub: false,
                    markers: false,
                    onEnter: () => tl.play(),
                    onLeave: () => tl.reverse(),
                    onEnterBack: () => tl.play(),
                    onLeaveBack: () => tl.reverse(),
                },
            });

            // Animate heading, subheading, and buttons one by one
            tl.fromTo(
                subheadingRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
            )
                .fromTo(
                    headingRef.current,
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                    "-=0.8"
                )
                .fromTo(
                    emailButtonRef.current,
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                    "-=0.7"
                )
                .fromTo(
                    phoneButtonRef.current,
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                    "-=0.7"
                )
                .fromTo(
                    linkedInButtonRef.current,
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                    "-=0.7"
                );

            button.addEventListener('mousemove', handleMouseMove);
            button.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                button.removeEventListener('mousemove', handleMouseMove);
                button.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, []);

    return (
        <div className='page' id='contact'>
            <div className='w-screen contact-bg before:block after:block min-h-screen overflow-hidden flex flex-col justify-end items-center gap-y-4 relative z-[2]'>
                <h2 ref={subheadingRef} className='text-gray-600 font-semibold text-2xl tracking-[calc(3rem * 0.02)] text-center'>
                    Want to collaborate?
                </h2>
                <h1 ref={headingRef} className='khula-semibold text-7xl font-semibold text-center px-4 mb-20'>
                    Let's have a chat!
                </h1>
                <div className='buttons'>
                    <button
                        ref={emailButtonRef}
                        className="btnc"
                        onClick={() => {
                            window.open(
                                "https://mail.google.com/mail/?view=cm&fs=1&to=muhidkhan2021@gmail.com",
                                "_blank"
                            );
                        }}
                    >
                        <i className="fa-regular fa-envelope mr-2 mt-1 emailicon"></i>
                        <span>Email</span>
                    </button>


                    <button
                        ref={phoneButtonRef}
                        className="btnc"
                        onClick={() => {
                            navigator.clipboard.writeText("03090600715")
                                .then(() => alert("Phone number copied to clipboard!"))
                                .catch((err) => console.error("Failed to copy phone number:", err));
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-phone">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>Phone</span>
                    </button>

                    <button
                        ref={linkedInButtonRef}
                        className="btnc"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/muhid-khan-b038a9310/", "_blank");
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span>LinkedIn</span>
                    </button>

                </div>
                <div className='flex flex-col items-center mt-[5vh]' style={{ opacity: '1', transform: 'none' }}>
                    <p className="poppins-regular text-3xl">Muhammad</p>
                    <p className="poppins-extralight text-3xl font-light">Muhid</p>
                    <p className="text-gray-500 text-xl px-4 tracking-[calc(-1rem*0.03)] mt-[8vh] select-none mb-1 text-center">© Muhammad Muhid 2024. All rights reserved. Location: Pakisan</p>
                    <p className="text-gray-500 text-xl px-4 select-none tracking-[calc(-1rem*0.03)] mb-8 max-w-[500px] text-center">This site showcases my personal projects and professional work. Content may not be used without permission.</p>
                </div>
            </div>
        </div>
    );
}

export default Getintouch;
