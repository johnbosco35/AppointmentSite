import styled from "styled-components"
import imgs from "../../assets/map.jpg"

const GetInTouch = () => {
  return (
    <div>
      <Container>
        <Left>
          <h2>GET IN TOUCH</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Obcaecati nostrum corrupti dolorem placeat minus vel!</p>
        </Left>
        <Right>
          <img src={imgs} alt="loading ..." />
        </Right>
      </Container>
    </div>
  )
}

export default GetInTouch

const Right = styled.div`
width: 675px;
height: 462px;


img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

const Left = styled.div`
width: 675px;
height: 462px;
/* background-color: rgba(0, 148, 212, 0.58); */

h2{
  margin-top: 100px;
  margin-left: 200px;

}

p{
  margin: 0;
  margin-top: 10px;
  margin-left: 200px;
}
`

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`