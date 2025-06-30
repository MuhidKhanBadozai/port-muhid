import React, { useRef, useEffect } from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/navbar';
import Background from './components/background';
import Reveal_text from './components/About';
import SelectedProj from './components/SelectedProj';
import Contact from './components/contact';
import './App.css'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null); // Ref for the scroll container

  useEffect(() => {
    // GSAP animation for changing the background color
    gsap.to('body', {
      backgroundColor: '#fff',
      duration: 0.2,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top top',
        end: '50%',
        scrub: true,
      }
    });

    gsap.to('.bg', {
      opacity: 0,
      duration: 0.2,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top top',
        end: '40%',
        scrub: true,
      }
    });

    // Uncommented the following lines to add ease-in and ease-out effects to the menu
    gsap.to('.menubtn', {
      color: '#000',
      duration: 0.2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top top',
        end: '50%',
        scrub: true,
      }
    });

    gsap.to('.logo', {
      color: '#000',
      duration: 0.2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top top',
        end: '50%',
        scrub: true,
      }
    });

    gsap.to('.menu', {
      color: '#000',
      duration: 0.2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top top',
        end: '50%',
        scrub: true,
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div ref={scrollRef}>
        <Background />
        <Reveal_text />
      </div>
      <SelectedProj/>
      <Contact/>
    </div>
  );
}

export default App;