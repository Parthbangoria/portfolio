import { useState } from "react";
import { Col, Container , Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = ()=>{
   const formInitialDetails ={
    firstName :'',
    lastName :'',
    email:'',
    phone: '',
    message: '',
   }
   
   const [formDetails ,setFormDetails] = useState(formInitialDetails);
   const [buttonText ,setButtonText] = useState('send');
   const [status ,setStatus] = useState({});

   const onFormUpdate =(category ,value )=>{
    setFormDetails({
      ...formDetails,
      [category]:value
    })};


    const handleSubmit  = async (e)=>{
      e.preventDefault();
      setButtonText("Sending....");
      let respose = await fetch("http://localhost:5000/contact",{
         method : "POST",
         headers :{
          "Content-Type": "Application/json;charset=utf-8",
         },
         body :JSON.stringify(formDetails),
    });
      setButtonText("send");
      let results = respose.json();
      setFormDetails(formInitialDetails);
      if(results.code === 200){
        setStatus({success:true, message : "message sent successfully"});
      } 
      else{
        setStatus({success : false , message :"please try again latter."})
      }
  };

    return(
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
            <Col md={6}>
            <img src={contactImg} alt="img"></img>
            </Col>
            <Col md={6}>
             <h2>Get in touch</h2>
             <form onSubmit={handleSubmit}>
              <Row>
              <Col sm={6} className="px-1">
              <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}></input>
              </Col>
              <Col sm={6} className="px-1">
              <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}></input>
              </Col>
              <Col sm={6} className="px-1">
              <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=>onFormUpdate('email',e.target.value)}></input>
              </Col>
              <Col sm={6} className="px-1">
              <input type="tel" value={formDetails.phone} placeholder="Phone number" onChange={(e)=>onFormUpdate('phone',e.target.value)}></input>
              </Col>
              <Col>
                <textarea row="6" value={formDetails.message} placeholder="Message"  onchange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                <button type="submit" ><span>{buttonText}</span></button>
              </Col>
              {
                   status.message  &&
                   <col>
                    <p className={status.success === false ? "danger" : "success"} > {status.message}</p>
                   </col>
                            

              }
              </Row>
             </form>
            </Col>
        </Row>
      </Container>
    </section>

    );
}