import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>Logo</Left>
                <Middle>
                    <NavLink to={"/"} style={{marginRight:"30px", textDecoration:"none"}}>Home</NavLink>
                    <NavLink to={""} style={{marginRight:"15px", textDecoration:"none"}}>About</NavLink>
                    <NavLink to={""} style={{ textDecoration:"none",marginLeft:"15px"}}>Service</NavLink>
                    <NavLink to={""} style={{marginLeft:"30px", textDecoration:"none"}}>Contact Us</NavLink>
                </Middle>
                <Right>
                    <NavLink to={"/sign-up"} style={{textDecoration:"none"}}>
                        <Box style={{marginRight:"15px"}}>Sign up</Box>
                    </NavLink>
                    <NavLink to={"/log-in"} style={{textDecoration:"none"}}>
                    <Box >Sign in</Box>
                    </NavLink>
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Header


const Box = styled.div`
padding: 8px 30px;
background-color: #439CE4;
border-radius: 30px;
color: white;
font-size: 18px;
font-weight: 300;

`

const Right = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Middle = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: black;
font-size: 18px;
font-weight: 300;

`

const Left = styled.div`
font-size: 20px;
font-weight: 500;
`

const Main = styled.div`
width: 90%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
background-color: #D9D9D9;
`