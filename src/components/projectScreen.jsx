import React from 'react';
import './style/projectPage.css';

const ProjectScreen = React.forwardRef(({ selectedProject, onClose }, ref) => {
  return (
    <div id='projectPage' ref={ref}>
        <div>
        <button className='closeBtn' onClick={onClose}>Close</button>
        <div class="flex flex-row items-center justify-between w-full mb-[4vh] pr-12" bis_skin_checked="1">
            <h1 class="khula-regular max-sm:text-[12vw] text-8xl tracking-[calc(6rem * 0.03)]">MeetMate</h1>
                <a href="https://meetmate.dev" target="_blank" class="cursor-pointer hover:bg-light hover:text-dark rounded-full size-12 transition-colors ease-in duration-300" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right mb-2">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                </svg>
                </a>
       </div>

       <div className='desc'>
       <div bis_skin_checked="1">
        <p class="khula-light text-sm tracking-[calc(0.875rem * 0.05)] uppercase text-gray-1">Description</p>
        <hr />
                <p class="poppins-regular text-base text-gray-1 overflow-y-auto overflow-x-hidden mt-8 mb-[4vh] max-w-[500px] w-full">MeetMate is a web application streamlining appointment management for businesses and clients. It simplifies scheduling, allowing clients to book with various companies while businesses manage availability efficiently. This approach reduces time spent on booking and organizing appointments for all parties.</p>
       </div>
       <div bis_skin_checked="1"><p class="khula-light text-sm tracking-[calc(0.875rem * 0.05)] uppercase text-gray-1">Technologies</p><hr /><p class="poppins-regular text-base text-gray-1 mt-8 mb-[4vh] max-w-[500px] w-full flex-col flex"><p class="flex gap-x-1 poppins-regular text-base text-gray-1"><span class="khula-light mt-[3px]">Frontend: </span>NextJS, TailwindCSS, ThreeJS</p><p class="flex gap-x-1 poppins-regular text-base text-gray-1"><span class="khula-light mt-[3px]">Backend: </span>Spring Boot, GraphQL, PostgreSQL, MongoDB</p></p></div>
       </div>
    </div>
    </div>
  );
});

export default ProjectScreen;
