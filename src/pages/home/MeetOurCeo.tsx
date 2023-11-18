import styled from "styled-components"
import imgs from "../../assets/Ceo-removebg-preview.png"

const MeetOurCeo = () => {
  return (
    <div>
      <Container>
        <Left>
          <Card></Card>
          <Card1></Card1>
          <Box>
            <img src={imgs} alt="loading..." />
          </Box>
        </Left>
        <Right>
          <Text>Meet Our CEO</Text>
          <h4>Dr.Mane Vice</h4>
          <pre>M.D (H.Medicine), M (Arc) <br /> Founder Chairman Modern Homepathy Pvt. Ltd.</pre>
          <p>maiores aut sapiente illum officiis quisquam quia tenetur
voluptatibus deserunt. Dolor similique placeat maiores fugiat
deserunt, laboriosam esse reprehenderit tempore, molestias enim
architecto aspernatur nisi necessitatibus iure dicta voluptate!
Corrupti, vitae laboriosam! Fugit aliquam, distinctio nulla
repellendus labore consectetur adipisci rem, fuga illum a optio!
Quod eveniet quis dolorum, blanditiis quibusdam necessitatibus
maiores aut sapiente illum officiis quisquam quia tenetur
voluptatibus deserunt. Dolor similique placeat maiores fugiat
deserunt, laboriosam esse reprehenderit tempore, molestias enim
architecto aspernatur nisi necessitatibus iure dicta voluptate!
Corrupti, vitae laboriosam</p>
        </Right>
      </Container>
    </div>
  )
}

export default MeetOurCeo

const Text = styled.div`
font-size: 50px;
font-weight: 900;
-webkit-text-stroke: 1px #439CE4;
color: transparent;
margin-top: 100px;
`

const Box = styled.div`
width: 400px;
height: 320px;
top: 815px;
left: 134px;
position: absolute;


img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`

const Card1 = styled.div`
width: 460px;
height:240px;
position: absolute;
background-color: #439CE4;
left: 0px;
top: 896px;
`
  

const Card = styled.div`
  width: 410px;
  height: 370px;
  border: 4px solid #439CE4;
  border-radius: 10px;
  position: relative;
`

const Right = styled.div`
width: 700px;
height: 460px;
padding: 10px;

h4{
    margin: 0;
    margin-top: 25px;
}


p{
  margin: 0;
    margin-top: 25px;
}

pre{
  
  margin: 0;
    margin-top: 30px;
}
`

const Left = styled.div`
width: 700px;
height: 460px;
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f1f1;
`