import React from 'react'
import './Project.css';
import {AiOutlineCheckCircle} from 'react-icons/ai'
export default function project() {
    return (<>
        <div className=" container project-container">
            <section id="projects"><div className='project-div'>
                <h1>My Projects</h1>
                <h5>Here are a few projects I've worked on recently.</h5>
               <ul className='project-list'>
                   <li> <AiOutlineCheckCircle/><a href="https://github.com/sangam-verma/retail-sales-bot" target="_blank">Sale retail bot.</a></li>
                   <li> <AiOutlineCheckCircle/><a href="https://github.com/sangam-verma/Financial-budget-analysis" target="_blank"> financial Budget Analysis.</a></li>
                   <li> <AiOutlineCheckCircle/> Online Portfolio.</li>
               </ul></div>
            </section>
            <section><div className='project-div'>
                <h1>My Skills</h1>
                <h5>Skill and confidence are an unconquered army.</h5>
               <ul className='project-list'>
                   <li> <AiOutlineCheckCircle/> Java</li>
                   <li> <AiOutlineCheckCircle/> HTML</li>
                   <li> <AiOutlineCheckCircle/> CSS</li>
                   <li> <AiOutlineCheckCircle/> React Js</li>
                   <li> <AiOutlineCheckCircle/> Python</li>
               </ul></div>
            </section>
        </div>

    </>
    )
}
