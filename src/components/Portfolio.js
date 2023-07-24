import React from 'react'
import { projects } from '../data/projects'


export const Portfolio = () => {
  return (
    <div>
      <h3 className='title-p'>Portfolio</h3>

    <section className='projects'>
      {
        projects.map(project => {

          return (
            <article key={project.id} className='item-project'>
                <div className='mask'>
                    <img src={project.img} />
                </div>

                <h3>{project.name}</h3>
                <p>{project.tec} </p>

            </article>
          )
          
        })
      }
    </section>
      
    </div>
  )
}
