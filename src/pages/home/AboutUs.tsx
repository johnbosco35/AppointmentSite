/** @format */

import styled from "styled-components";
import pic from "../../assets/Attending.jpg";
import pi2 from "../../assets/about.jpg";
const AboutUs = () => {
  return (
    <>
<Container>
      <Div>
        <Text>About Us</Text>
        <p>
          Your needs for healing are our top priority as skilled medical
          professionals. We take great pride in offering each and every one of
          our patients the best possible medical care, a dedication to health
          and wellbeing, and excellent customer service. Our aim is to restore
          your health as soon as possible.
        </p>
      </Div>
      <AllDIV>
        <Card>
          <img src={pi2} alt="" />
        </Card>
        <Right>
          <h1>Suppliers With Heart</h1>
          <p>
            Our healthcare professionals will not only address your current
            ailments, but we also strive to optimize your preventive measures.
            We work to promote your best possible life, assist you reach your
            wellness objectives, and enhance your quality of life. All major
            insurances are accepted, and self-paying (uninsured) patients
            receive the same level of care as those with insurance. We provide
            occupational health services, drug testing, Suboxone, women's
            health, Pap smear, STD testing, men's health, pediatrics, and
            adolescent care in addition to treating all acute and chronic
            illnesses, finishing work, school, and several other physicals,
            on-site laboratories, EKGs, and spirometry.
          </p>
        </Right>
      </AllDIV>
    </Container>

    </>
    
  );
};

export default AboutUs;
const Text = styled.h1`
  font-size: 20px;
  font-weight: 900;
  color: white;
  text-align: justify;
  margin: 0;
  padding-top: 30px;

  p{
    margin-bottom: 30px;
  }
`;

const Card = styled.div`
  width: 500px;
  height: 400px;
  overflow: hidden;

  img {
    height: 100%;
    widows: 100%;
    object-fit: cover;
  }
`;
const AllDIV = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 20px;
`;
const Right = styled.div`
  color: white;
  p{
    width: 600px;
    text-align: justify;
    color: white;
    line-height: 1.5rem;
  }
`;


const Container = styled.div`
  background: linear-gradient(
      rgba(67, 156, 228, 0.877),
      rgba(67, 156, 228, 0.877)
    ),
    url(${pic});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;


`;

const Div =styled.div`
  
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      width: 650px;
      color: #fff;
    }
  
`
