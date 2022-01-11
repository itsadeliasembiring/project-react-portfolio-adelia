import React from 'react'
import project from '../img/project.png'

export default function Project() {
    return (
        <>
             {/* Project */}
            <div className="project" id="project">
                {/* Project-title */}
                <div className="project-title">
                    <h2>My Project</h2>
                </div>
                {/* Card Project */}
                <div className="card">
                     {/* Foto */}
                    <img src={project} alt="Avatar" style={{width:'100%'}}/>
                    <div className="card-content">
                        {/* Judul */}
                        <h2><b>Digital Library (Perpusdig)</b></h2> 
                        {/* Deskripsi Project */}
                        <p>The Digital Library is designed with an attractive minimalist design that makes it easier for students of SMKN 1 Bekasi to read digital books anytime and anywhere.</p> 
                    </div>
                </div>
            </div>
        </>
    );
}
