import styled from "styled-components"
import CountUp from 'react-countup';
import { TfiCup } from "react-icons/tfi";
import { FaUserDoctor } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri"

const Counter = () => {

  return (
    <div>
      <Container>
        <Main>
          <Box>
            <TfiCup size={35}/>
            <div style={{display:"flex", alignItems:"center",}}>
            <CountUp end={10000} style={{fontSize:"35px",fontWeight:"700"}}/>
            <h1>+</h1>
            </div>
            <h3>Patients Worldwide</h3>
          </Box>
          <Box>
          <FaUserDoctor size={35}/>
          <div style={{display:"flex", alignItems:"center",}}>
          <CountUp end={28} style={{fontSize:"35px",fontWeight:"700"}}/> 
            <h1>+</h1>
            </div>
            <h3>Years Of Experience</h3>
          </Box>
          <Box>
          <RiServiceFill  size={35}/>
          <div style={{display:"flex", alignItems:"center",}}>
          <CountUp end={200} style={{fontSize:"35px",fontWeight:"700"}}/>
            <h1>+</h1>
            </div>
            <h3>Services Rate</h3>
          </Box>
        </Main>
      </Container>
    </div>
  )
}

export default Counter

const Box = styled.div`
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;

h3{
  font-size:20px;
  margin: 0;
  font-weight: 700;
}

p{
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}
`

const Main = styled.div`
width: 100%;
height: 120px;
 display: grid;
grid-template-columns: repeat(3, 1fr); 
`

const Container = styled.div`
width: 100%;
height: 240px;
background-color: #439CE4;
display: flex;
align-items: center;
justify-content: center;
`