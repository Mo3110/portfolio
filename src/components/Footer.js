import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/icons8-twitter.svg";

export const Footer = () => {

  const linkedinLink = "https://www.linkedin.com/in/mohamed-mustafa-9b038073/";
  const facebookLink = "https://www.facebook.com/profile.php?id=637926445";
  const twitterLink = "https://www.twitter.com/el_sdiek";

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon"/></a>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon"/></a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
