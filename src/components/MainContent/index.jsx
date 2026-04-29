import styled from "styled-components"
import Header from "./header"


function MainContent() {
    const Main = styled.main`
        width: 100%;
        height: 100vh;
        margin: 0;
    `
    return (
        <Main>
            <Header/>
        </Main>
        
    )
}

export default MainContent