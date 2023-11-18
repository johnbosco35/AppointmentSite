/** @format */

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgs from "../../assets/weight.jpg";
import bg from "../../assets/drug.jpg";
import bgs from "../../assets/Covid.jpg";

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div>
      <Container>
        <Up>
          <Text>Service</Text>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Up>
        <Down>
          <Main>
            <Box>
              <Circle>
              <img src={imgs} alt="Loading..." />
              </Circle>
              <h1>Lorem ipsum</h1>
              <p style={{marginLeft:"30px",margin:"0px",textAlign:"center",width:"400px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                enim.
              </p>
            </Box>
            <Box>
            <Circle>
              <img src={bg} alt="Loading..." />
              </Circle>
              <h1>Lorem ipsum</h1>
              <p style={{marginLeft:"30px",margin:"0px",textAlign:"center",width:"400px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                enim.
              </p>
            </Box>
            <Box>
            <Circle>
              <img src={bgs} alt="Loading..." />
              </Circle>
              <h1 style={{marginLeft:"70px"}}>Lorem ipsum</h1>
              <p style={{marginLeft:"30px",margin:"0px",textAlign:"center",width:"400px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                enim.
              </p>
            </Box>
          </Main>
        </Down>
      </Container>
    </div>
  );
};

export default Service;

const Circle = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;

  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Box = styled.div`
  width: 400px;
  height: 280px;
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const Main = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  /* margin: 10px; */
`;

const Text = styled.h1`
  font-size: 40px;
  padding-top: 20px;
  color: black;
  margin: 0;
`;

const Down = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Up = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 18px;
    color: gray;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
