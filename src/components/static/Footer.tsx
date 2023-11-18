import styled from "styled-components"
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";


const Footer = () => {
  return (
    <div>
      <Container>
        <Mail>
          <Hold>+1 (240) 515-4452</Hold>
          <Hold1>Brightstarfamilyclinic@gmail.com</Hold1>
          <Hold>U.S.A</Hold>
        </Mail>
        <Grid>
          <Card>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quasi quod voluptas eaque, <br /> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quasi quod voluptas eaque,<br /> Lorem  ipsum dolor sit amet consectetur <br /> adipisicing elit. Quasi quod voluptas eaque, <br />Lorem  ipsum dolor sit amet consectetur <br /> adipisicing elit. Quasi quod voluptas eaque</p>
          </Card>
          <Card>
            <h2>Our Service</h2>
            <li>Diabetes</li>
            <li>Infection</li>
            <li>Obesity</li>
            <li>Cancer</li>
          </Card>
          <Card>
            <h2>Information</h2>
            <li>About Us</li>
            <li>Location</li>
            <li>Services</li>
            <li>Contact Us</li>
          </Card>
          <Card>
            <h2>Get In Touch</h2>
            <Nav>
                <FaLocationDot size={20}/>
                <p>USA</p>
                </Nav>
                <Nav>
                <FiPhoneCall size={20}/>
                <p>+2348131994772</p>
                </Nav>
                <Nav>
                <CiMail size={20}/>
                <p>USA</p>
                </Nav>
          </Card>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;

    p{
    margin-left: 10px;
    font-size: 18px;
    font-weight: 600;
}
`

const Card = styled.div`
  /* background-color: red; */
  /* padding: 5px; */
  padding-left: 20px;

  li{
    margin-top: 20px;
  }

  p{
    margin-top: 10px;
  }
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin-top: 80px;
`

const Hold1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #4444c6;
`

const Hold = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #439CE4;
`

const Mail = styled.div`
width: 1100px;
height: 90px;
display: grid;
grid-template-columns: repeat(3,1fr);
margin-left: 100px;
font-size: 20px;
font-weight: 700;
`

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: black;
  color: white;
`