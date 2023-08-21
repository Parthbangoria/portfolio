import { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
// import "animate.css";
// import TrackVisibility from "react-on-screen";
// import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = ()=>{
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);
  const [text,setText] = useState('');
  const [delta,steDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick();
    },delta);

    return ()=>{clearInterval(ticker)};
  },[text]);

  const tick = ()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0, text.length +1 );

    setText(updatedText);

    if(isDeleting){
      steDelta(prevDelta => prevDelta/2)
    }
    if (!isDeleting && updatedText==fullText){
      setIsDeleting(true);
      steDelta(period);
      
    }
    else if (isDeleting && updatedText ===''){
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    steDelta(500);
    }
  }
   
   const toRotate = ["Web Developer","Web Designer","UI/UX Designer"];
    return(
   <section className="banner" id="home">
  <Container >
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
    
       <span className="tagline">Welcome to my Portfolio</span>
       <h1>{'Hi I`m webdecoded '}<span className="wrap">_{text}_</span></h1>
       <p>Hello, I'm Parth, a passionate web developer dedicated to crafting immersive digital experiences. With a keen eye for design and a love for coding, I transform ideas into elegant, functional websites that leave a lasting impression. Explore my work and discover how I can bring your web projects to life."</p>
        <button onClick={()=>console.log('connect')}>Let`s connect <ArrowRightCircle size={25} /></button>
      
        </Col>
        <Col xs={12} md={6} xl={5}>
   <img src={headerImg} alt="Headder Img"></img>
        </Col>
    </Row>
  </Container>


   </section>
    );
};