import styled from "styled-components"


function Header() {
    const StyleHeader = styled.nav`
        background: #ca862c;
        height: 100px;
    `

    return(
        <header>
            <StyleHeader>           
                <div>
                    <img src="..\..\assets\assets-desktop\assets-utility\Group2.jpg" alt="" />
                </div>
                <hr/>
                <div>
                    <ol>
                        <li>HOME</li>
                        <li>DESTINATION</li>
                        <li>CREW</li>
                        <li>TECHNOLOGY</li>
                    </ol>
                </div>
            </StyleHeader>
        </header>
    )
}


export default Header