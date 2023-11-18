import styled from 'styled-components'
import imgs from "../../assets/Doc.jpg"

const ForgotPassword = () => {
  return (
    <div>
        <Container>
            <Main>
                <h1>Forgot Password</h1>
                <Nav>
                    <span>Email</span>
                    <input type="text" placeholder='Email@gmail.com'/>
                </Nav>
                <button>Confrim</button>
            </Main>
        </Container>
    </div>
  )
}

export default ForgotPassword

const Nav = styled.div`
    display: flex;
    flex-direction: column;

    span{
        margin: 10px 10px;
    }
`

const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;

    button{
        padding: 10px 100px;
        margin-top: 10px;
        background-color: #439CE4;
        color: white;
        border: none;
        font-size: 20px;
        font-weight: 600;
        border-radius: 9px;
    }
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${imgs});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`