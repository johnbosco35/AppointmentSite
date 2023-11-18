import { useState } from "react"
import styled from "styled-components"

const BookingAppointment = () => {
  const [Appiontment,SetAppiontment] = useState<boolean>(true)
  const [YourInfo,SetYourinfo] = useState<boolean>(false)
  const [Confrimation,SetConfrimation] = useState<boolean>(false)

  const Toggle = () =>{
    SetAppiontment(true)
    SetYourinfo(false)
    SetConfrimation(false)
  }
  const Toggle1 = () =>{
    SetAppiontment(false)
    SetYourinfo(true)
    SetConfrimation(false)
  }
  const Toggle2 = () =>{
    SetAppiontment(false)
    SetYourinfo(false)
    SetConfrimation(true)
  }

  return (
    <div>
      <Container>
        <h1>Booking Appointment</h1>
        <Main>
          <Select>
            <Pick>Choose Appiontment</Pick>
            <Pick>Your info</Pick>
            <Pick>Confrimation</Pick>
          </Select>
          <Card>
            <Nav>
              <input type="text" placeholder="FristName"/>
              <input type="text" placeholder="LastName"/>
            </Nav>
            <Nav>
              <input type="text" placeholder="PhoneNumber"/>
              <input type="text" placeholder="Email"/>
            </Nav>
            <Nav>
              <input type="Date" />
              <input type="time" />
            </Nav>
            <button>Next</button>
          </Card>
          {/* <Card>Card</Card> */}
        </Main>
      </Container>
    </div>
  )
}

export default BookingAppointment

const Nav = styled.div`
  display: flex;

  input{
    margin-top: 40px;
    width: 350px;
    margin: 7px;
    margin-left: 20px;
    padding-top: 20px;
  }
`

const Card = styled.div`
width: 100%;
height: 500px;
margin-top: 30px;
background-color: blue;


button{
        padding: 8px 30px;
        background-color: rgb(67, 156, 228);
        border-radius: 30px;
        color: white;
        border: none;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        margin-left: 30px;
    }
`

const Pick = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-left: 1px solid black;
`

const Select = styled.div`
  width: 100%;
  height: 50px;
  background-color: aqua;
  display: grid;
  grid-template-columns: repeat(3,1fr);
`

const Main = styled.div`
  width: 800px;
  min-height: 200px;
  background-color: #fff;
`

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`