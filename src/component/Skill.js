import React from 'react'

export default function Skill() {
    return (
        <>
            {/* Skill */}
            {/* title */}
            <div className="skill-title" id="skill">
                <h2>Skill</h2>
            </div>
            {/* Skill-content */}
            <div className="myskill">
                <div className="skill-content">   
                    <div className="icon-skill">
                        {/* Html */}
                        {/* Icon */}
                        <div className="skill-html">
                            <i className="uil uil-html3"></i>
                            <p><b>HTML</b></p>
                        </div>
                        {/* Progress */}
                        <div className="skill-progress">
                            <div className="skill html">80%</div>
                        </div>

                        {/* CSS  */}
                        <div className="skill-css">
                            <i className="uil uil-css3-simple"></i>
                            <p><b>CSS</b></p>
                        </div>
                        <div className="skill-progress">
                            <div className="skill css">70%</div>
                        </div>

                        {/* Javascript */}
                        <div className="skill-javascript">
                            <i className="uil uil-java-script"></i>
                            <p><b>JAVASCRIPT</b></p>
                        </div>
                        <div className="skill-progress">
                            <div className="skill javascript">23%</div>
                        </div>

                        {/* Canva */}
                        <div className="skill-canva">
                            <i className="uil uil-palette"></i>
                            <p><b>CANVA</b></p>
                        </div>
                        <div className="skill-progress">
                            <div className="skill canva">90%</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
