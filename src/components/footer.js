import { Container,Row,Col} from "react-bootstrap";
import {MailchimpForm} from "./MailchimpForm";
import{Contact} from "./Contact";
import logo from "../assets/img/my-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";



export const Footer = ()=>{
    return(

      <footer className="footer">
    <Container>    
    <Row className="align-item-center">
       <MailchimpForm />
        <Col sm={6}>
        <img src={logo} alt="logo" />
        </Col>
        <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/parth-bangoria-3bb1b0246"><img src ={navIcon1} /></a>
                {/* <a href=""><img src ={navIcon2} /></a> */}
                <a href="https://instagram.com/___parth___531?igshid=MzNlNGNkZWQ4Mg=="><img src ={navIcon3} /></a>
            </div>
            <p>CopyRight 2023,All right Reserved Parth Bangoria</p>
        </Col>
    </Row>
    </Container>

      </footer>

    );
}