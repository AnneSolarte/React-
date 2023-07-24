import React from 'react'
import { skills } from '../data/skills'



export const Skills = () => {
  return (
    <div>
      <h3 className='title-p'>Skills</h3>

    <section className='skills'>
      {
        skills.map(skill => {

          return (
            <article key={skill.id} className='item-skill'>
                <h3>{skill.name}</h3>
                <p>{skill.years} </p>
            </article>
          )
          
        })
      }
    </section>
      
    </div>
  )
}
