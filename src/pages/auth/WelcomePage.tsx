import styled from "styled-components"

const WelcomePage = () => {
  return (
    <div>
        <Container>
            <Main></Main>
        </Container>
    </div>
  )
}

export default WelcomePage

const Main = styled.div`
    
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`