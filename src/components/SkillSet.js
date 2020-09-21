import React from 'react'
import './SkillSet.css';

import { Row, Col } from 'reactstrap';

import GaugeChart from 'react-gauge-chart'

import { FaReact } from 'react-icons/fa';
import {SiDjango, SiHtml5, SiCsswizardry, SiJavascript, SiPython, SiBootstrap, SiRedux} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

import { IconContext } from "react-icons";


const skills = [
  {
    skillname: 'react',
    skillimg: <FaReact className="display-1" />,
    skillgague: 0.7,
  },
  {
    skillname: 'html',
    skillimg: <SiHtml5 className="display-1" />,
    skillgague: 0.7,
  },
  {
    skillname: 'css',
    skillimg: <SiCsswizardry className="display-1" />,
    skillgague: 0.3,
  }, 
  {
    skillname: 'js',
    skillimg: <SiJavascript className="display-1" />,
    skillgague: 0.8,
  },
  {
    skillname: 'bootstrap',
    skillimg: <SiBootstrap className="display-1" />,
    skillgague: 0.6,
  },
{
    skillname: 'redux',
    skillimg: <SiRedux className="display-1" />,
    skillgague: 0.2,
  }, 


  {
    skillname: 'python',
    skillimg: <SiPython className="display-1" />,
    skillgague: 0.5,
  }, 
  {
    skillname: 'django',
    skillimg: <SiDjango className="display-1" />,
    skillgague: 0.8,
  },

  {
    skillname: 'git',
    skillimg: <AiFillGithub className="display-1" />,
    skillgague: 0.6,
  }, 

]

const Skill = ({ skill: { skillgague, skillname, skillimg, skilldesc }, gauge }) => {
  return (
    <>
      <Col sm={6} lg={2} className="d-flex justify-content-center">
        <div className="my-card">
          <div className="face face1">
            <div className="content my-4"  >
              <GaugeChart nrOfLevels={20}
                percent={skillgague} hideText={true} id={`gauge-chart${gauge}`} style={{ width: "100px" }} className="" />
            </div>
          </div>
          <div className="face face2">
            <div className="content py-0 ">
              <IconContext.Provider value={{ color: "inherit", className: "global-class-name" }}>
              {skillimg}
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </Col>
    </>
  )

}

export default function SkillSet() {
  return (
    <Row className="">
      {skills.map((skill, i) => <Skill skill={skill} key={i} gauge={i} />)}
    </Row>
  )
}
