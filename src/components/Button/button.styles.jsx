import styled, {css} from "styled-components";

const ButtonStyle = css`
    color: white;
    background-color: black;
    border: none;
    
    &:hover{
        background-color: #555;
    }
`

const InvertedButtonStyle = css`
    color: black;
    background-color: white;
    &:hover{
        color: white;
        background-color: black;
    }
`

const GoogleSignInButtonStyle = css`
    background-color: #4285f4;
    &:hover{ background-color: #357ae8;}
`

const getButtonStyles = props => {
    
    if (props.isGoogleSignIn) return GoogleSignInButtonStyle;

    return props.inverted ? InvertedButtonStyle : ButtonStyle;
}

const ButtonContainer = styled.button`
    cursor: pointer;
    flex: 1;
    padding: 15px 25px;
    margin: 20px 10px;
    ${getButtonStyles}
`

export default ButtonContainer