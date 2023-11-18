import styled from "styled-components"
import imgs from "../../assets/Hero.jpg"
import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Box>
                    <h1>Create a close relationship with your physician, plan your time well, and provide top-notch medical treatment.</h1>
                    <p>Initiate your journey towards better health!</p>
                    <NavLink to={"/booking"} style={{textDecoration:"none"}}>
                    <button>Book an appointment</button>
                    </NavLink>
                </Box>
            </Main>
        </Container>
    </div>
  )
}

export default Hero

const Box = styled.div`
    width: 500px;
    margin-left: 100px;
    margin-top: 100px;
    padding: 20px;
    color: rgb(255, 255, 255);

    h1{
        font-size: 30px;
        width: 650px;
        margin: 0;
    }

    p{
        margin-top: 20px;
    }

    button{
        padding: 10px 30px;
        background-color: #439CE4;
        border-radius: 30px;
        color: white;
        border: none;
        margin-top: 15px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }
`

const Main = styled.div`
width: 100%;
height: 70vh;
background-color: rgba(0,0,0,0.4);
`

const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), url(${imgs});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;
`