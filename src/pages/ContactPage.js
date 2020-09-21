import React from 'react'
import Hero from '../components/Hero'
import { Col, Row  } from 'reactstrap';
import myFace from '../static/images/sjh.png'
import styled from 'styled-components'

const MyFace = styled.img`
  box-shadow : 5px 5px 9px #000;
`

export default function ContactPage(props) {
  return (
    <>
      <Hero title={props.title} />

      <Row className="d-flex justify-content-center">
        <Col md={3} sm={10}>
   <MyFace src={myFace} className="w-100" />
        </Col>

        <Col md={6} sm={10} className="p-3">
          <h3>공부하는 개발자</h3>
          <br/>
          <span style={{fontSize:"1.2em"}}>
  개발자로서의 창의력도 중요하지만 이미 만들어진 바퀴를 잘 사용하는것이 점점더 중요해지고 
          있다 생각합니다. 이미 만들어진 라이브러리를 잘 사용하는 방법은 공식문서를 잘 읽어보는것이죠.
          개발공부를 하면서 영어공부도 같이 시작했고 모르는게 생겼을때 이제는 공식문서를 먼저 보려고 노력합니다

      <br></br>
          남들보다 공부하는, 또 공부했던 시간이 부족한만큼 시간으로 채웠습니다. 회사에서 일을 한다는것은 나의 노동력과 회사의 자본을 교환하는 행위라 생각합니다. 
          내가 가진 카드가 상대방이 가진 카드보다 부족하지않도록 채워나가겠습니다. 
          </span>
        </Col>
      </Row>
    </>
  )
}
