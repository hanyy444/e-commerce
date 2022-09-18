import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// <-- Shared Styles -->
const OptionContainerStyle = css`
    padding: 10px 15px;
    cursor: pointer;
`


// <-- Exportable Styles -->
const OptionLink = styled(Link)`${OptionContainerStyle}`

const OptionButton = styled.button`${OptionContainerStyle}`

const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    
`

const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

    
    
export {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionButton
};