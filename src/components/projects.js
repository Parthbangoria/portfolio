import { Container, Row ,Col ,Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = ()=>{
   
   const projects= [
    { 
      title: "business startup",
      description : "design and devlopment",
      imgUrl : projImg1,
    },
    { 
        title: "business startup",
        description : "design and devlopment",
        imgUrl : projImg2,
    },
    { 
        title: "business startup",
        description : "design and devlopment",
        imgUrl : projImg3,
    },
    // { 
    //     title: "business startup",
    //     description : "design and devlopment",
    //     imgUrl : projImg1,
    // },
    // { 
    //     title: "business startup",
    //     description : "design and devlopment",
    //     imgUrl : projImg2,      
    // },
    // { 
    //     title: "business startup",
    //     description : "design and devlopment",
    //     imgUrl : projImg3,
    // },
   ];


    return(
        <section className="project" id="project">
         <Container>
            <Row>
                <Col>  
                    <h2>Projects</h2>
                    <p>"Hello, I'm Parth, a skilled web developer with expertise in MERN (MongoDB, Express.js, React.js, Node.js) stack for seamless back-end and front-end development. I've also successfully worked with databases like MySQL, enhancing my ability to create robust and dynamic web applications. With a passion for crafting user-friendly and visually appealing websites, I specialize in turning ideas into digital realities. Explore my portfolio to see how I can elevate your web projects."</p>
                  
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                   <Row>
                    {
                        projects.map((project , index)=>{
                            return(
                             <ProjectCard key={index} 
                             {...project}/>
                            )
                        })
                    }
                   </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">lorem ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">lorem ipsum</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}