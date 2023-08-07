import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

function Form() {

  const [ SelectCurrency ] = useSelectCurrency();

  SelectCurrency();

  return(
    <form>
        <InputSubmit 
            type="submit" 
            value="Query"
        />
    </form>
  )
}

export default Form;