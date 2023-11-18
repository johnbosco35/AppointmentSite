import styled from "styled-components"
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const SendUsMessage = () => {
  return (
    <div>
        <Container>
            <Left>
                <h1>Send Us a Message</h1>
                <Div>
                    <input type="text" placeholder="FullName" />
                    <input type="text" placeholder="Email"/>
                </Div>
                <Div>
                    <input type="text" placeholder="Phone"/>
                    <input type="text" placeholder="Subject"/>
                </Div>
                <textarea placeholder="Message"/>
                <button>Send</button>
            </Left>
            <Right>
                <Text>GET IN TOUCH</Text>
                <Nav>
                <FaLocationDot size={20}/>
                <p>U.S.A</p>
                </Nav>
                <Nav>
                <FiPhoneCall size={20}/>
                <p>+1 (240) 515-4452</p>
                </Nav>
                <Nav>
                <CiMail size={20}/>
                <p>Brightstarfamily <br /> clinic@gmail.com</p>
                </Nav>
            </Right>
        </Container>
    </div>
  )
}

export default SendUsMessage

const Div = styled.div`
    display: flex;
    justify-content: space-between;

    input{
        width: 230px;
        height: 30px;
        margin: 6px;
        padding: 5px;
        outline: none;
        border: 1px solid black;
        color: black;
        border-radius: 6px;

        ::placeholder{
            color: black;
        }
    }
`

const Nav = styled.div`
    display: flex;
    padding: 20px;
    margin-top: 15px;

    p{
    margin: 0;
    margin-left: 15px;
    font-size: 18px;
    font-weight: 600;
}
`

const Text = styled.div`
font-size: 20px;
font-weight: 700;
margin-top: 80px;
margin-left: 20px;
`

const Right = styled.div`
width: 280px;
height: 495px;
background-color: blue;
color: white;
`

const Left = styled.div`
width: 550px;
height: 480px;
padding: 10px 20px;
background-color:white;

h1{
    margin-left: 8px;
    padding-top: 9px;
}

textarea{
    margin-left: 5px;
    padding: 6px;
    border-radius: 6px;
    outline: none;
    margin-top: 10px;
    width: 500px;
    height: 200px;
    resize: none;
}

 button{
        padding: 8px 30px;
        background-color: #439CE4;
        border-radius: 30px;
        color: white;
        border: none;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }
`

const Container = styled.div`
    width: 62%;
    height: 430px;
    position: absolute;
    left: 280px;
    top: 2200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`