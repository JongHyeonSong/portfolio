import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const GradationH1 = styled.h1`
  background: linear-gradient(to right, rgb(241, 195, 245),  rgb(237, 62, 253));
  -webkit-background-clip: text;
  color: transparent;
`

export default function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jusmbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8} sm={12} style={{background:""}}>
            {props.title && <GradationH1 className="display-1 font-weight-bolder">{props.title}</GradationH1>}

          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
