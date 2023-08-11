import styled from "@emotion/styled";

const TextError = styled.div`
    background-color: #be1d1d;
    border-radius: 5px;
    color: white;
    padding: 15px;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: center;
`

function Error({ children }) {
  return(
    <TextError>
      {children}
    </TextError>
  )
}

export default Error;