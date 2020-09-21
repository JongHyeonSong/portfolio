import React from 'react'
import Hero from '../components/Hero'
import SkillSet from '../components/SkillSet'

export default function SkillSetPage(props) {
  return (
    <>
      <Hero title={props.title}/> 

      <SkillSet></SkillSet>
    </>
  )
}
