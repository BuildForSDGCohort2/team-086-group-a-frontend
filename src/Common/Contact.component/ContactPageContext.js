import React, { useContext, useRef } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Header from "../../Common/Header.Component/Header.jsx";
import Footer from "../../Common/Footer.component/Footer.jsx";
import Style from "../../Styles/contact.module.css";
import MapContainer from "../../Components/MapComponent/Map";
import Button from "../../Common/Button.component/Button";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";

// The Consumer class

export const ContactTag = (props) => {
    const [datas, setData] = useContext(NonRegisterContextMembers);

    const formRef = useRef();
    const inputsRef = useRef();
    const { contactPage } = datas;


    const handleChange = ({ target }) => {
        //function to handle input value onchange
        setData((formData) => ({
          ...formData,
          contactPage: { ...contactPage, [target.name]: target.value },
        }));
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = contactPage;

        
        if (message.length > 200 ){
            alert("You should write not more than 200 words");
            inputsRef.current.children[0].firstChild.focus();
            return false;
        }
        let contactObj = {
            name,
            subject,
            email,
            message,
          };
        
        console.log(contactObj)
        formRef.current.reset();
        alert("Message Sent")

    }

    return(
        <div className={Style.bg}>
            <Header />
                <div className={Style.images}>
                    <h3>WELCOME</h3>
                </div>

            <Container fluid>
                <Container>


                    <Row className={Style.contactTop}>
                        <Col ><p className={Style.conUs}>CONTACT US</p></Col>
                    </Row>

                
                    <Row className={Style.contactTop1}>
                        <p>Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            repudiandae est unde qui! Perspiciatis non 
                            dicta facilis voluptate fuga autem dolor nemo? Mollitia!
                        </p>
                    </Row>

                

                    <Row className={Style.allBoxes}>
                        <Col className={Style.smallBox} xs={12} md={3}>
                                <h5>
                                    box 1:
                                </h5> 
                                <p className="justify-content-md-center">Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            </p>
                        </Col>
                        <Col xs={0} md={1}>
                            
                        </Col>
                        <Col className={Style.smallBox} xs={12} md={3}>
                                <h5>
                                    box 2:
                                </h5> 
                                <p className="justify-content-md-center">Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            </p>    
                        </Col>
                        <Col xs={0} md={1}>
                            
                        </Col>
                        <Col className={Style.smallBox} xs={12} md={3}>
                                <h5>
                                    box 3:
                                </h5> 
                                <p className="justify-content-md-center">Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            </p>    
                        </Col>
                    </Row>

                    <Row className={Style.mapForm}>

                        <Col md="5" sm="12" xs="12" className={Style.map}>
                            <MapContainer />
                        </Col>

                        <Col md="1" sm="0" xs="0">
                        </Col>

                        <Col md="5" sm="12" xs="12" className={Style.formGroup} >
                                <Form id="form" ref={formRef} className={Style.formOrder} onSubmit={handleSubmit}>
                                        
                                            <Form.Group as = {Row}>
                                                <Col sm="10" md="10">
                                                        <Form.Control id="fullName" name="name" type="text" placeholder="Name" value={contactPage.name} onChange={handleChange} />
                                                </Col>
                                            </Form.Group>
                                    
                                            <Form.Group as = {Row}>
                                                <Col sm="10" md="10">
                                                    <Form.Control id="email" name="email" type="text" placeholder="Enter Email" value={contactPage.email} onChange={handleChange}/>
                                                </Col>
                                            </Form.Group>
                                        
                                            <Form.Group as = {Row}>
                                                <Col sm="10" md="10">
                                                    <Form.Control id="subject" name="subject" type="text" placeholder="Subject" value={contactPage.subject} onChange={handleChange}/>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as = {Row}>
                                                <Col sm="10" md="10">
                                                    <Form.Control id="message" name="message" as="textarea" rows="3" placeholder="Enter Message" value={contactPage.message} onChange={handleChange}/>
                                                </Col>
                                            </Form.Group>

                                            <Button
                                                text={"Submit"}
                                                name={"submit"}
                                                backgroundColor= {"#007bff"}
                                                className={Style.button}
                                                />
                                

                                </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
            </div>

    )
}


