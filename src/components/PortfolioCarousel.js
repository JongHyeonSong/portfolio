import React, { useState } from 'react'
import {  Row } from 'reactstrap';

import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import isutube from '../static/images/isutube.png';
import coreup from '../static/images/coreup.png';
import react_todo from '../static/images/react_todo.png';
import commers from '../static/images/commers.png';
import './PortfolioCarousel.css';

import {AiFillGithub} from 'react-icons/ai'
import {SiTelegram} from 'react-icons/si'


const items = [
  {
    src: coreup,
    titlePF: 'COVID-19로 인한 아픔 나누기',
    descPF: 'React+django로 현재 각 나라별 코로나통계 그래프를 확인하고 더불어 사진+글을 추가해 응원 할수있는 사이트',
    gitAddress: 'https://github.com/JongHyeonSong/coreup2',
    siteAddress: 'http://35.232.243.209:80',
  },
  {
    src: isutube,
    titlePF: '좋아하는 live영상 모아보기',
    descPF: 'django를 이용해서 원하는 라이브 영상을 올려서 로그인된 자기 아이디로 댓글/좋아요를 누를수 있는 웹사이트',
    gitAddress: 'https://github.com/JongHyeonSong/isutube',
    siteAddress: 'http://34.64.204.254:8001',
    
  },
  {
    src: react_todo,
    titlePF: '오늘의 할일은',
    descPF: '앞단을 React로 만들어서 django로 만든 RestAPI로부터 ajax통신하여 데이터를 주고받는 todo앱',
    gitAddress: 'https://github.com/JongHyeonSong/RestAPI-React-Todo',
    siteAddress: 'http://34.64.204.254:8000',
  },
  {
    src: commers,
    titlePF: '내 아이에게만은...',
    descPF: 'django와 bootstrap베이스로 CRUD를 구현한',
    gitAddress: 'https://github.com/JongHyeonSong/my_shop2',
    siteAddress: 'http://34.64.204.254:8002',
  },
];



export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [titlePF, setTitlePF] = useState(items[0].titlePF)
  const [descPF, setDescPF] = useState(items[0].descPF)
  const [gitAddress, setGitAddress] = useState(items[0].gitAddress)
  const [siteAddress, setSiteAddress] = useState(items[0].descPF)

  const setSide =(index)=>{
    setTitlePF(items[index].titlePF)
    setDescPF(items[index].descPF)
    setGitAddress(items[index].gitAddress)
    setSiteAddress(items[index].siteAddress)
  }


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setSide(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    setSide(nextIndex);

  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    setSide(newIndex);

  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="w-100" style={{height:"400px"}}  />
        {/* <CarouselCaption /> */}
      </CarouselItem>
    );
  });

  return (
    <Row className="d-flex justify-content-center">
      <Carousel
        className="col-lg-7 col-md-10 "
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl  direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl  direction="next" directionText="Next" onClickHandler={next} />

      </Carousel>

      <div className="col-lg-3 col-md-10 p-3 ">
        <h3>{titlePF}</h3>
        <br/>
        <span className="overflow-hidden">{descPF} </span>
        <br/>
        <a href={gitAddress} target="_blank"><AiFillGithub className="display-4 mr-3"/></a>
        <a href={siteAddress}><SiTelegram  className="display-4"/></a>
      </div>

    </Row>

  );
}
