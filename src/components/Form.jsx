import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { currencies } from "../data/currencies";

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
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

function Form() {

  const [ currency, SelectCurrency ] = useSelectCurrency("Choose your currency", currencies)

  SelectCurrency();

  return(
    <form>

        <SelectCurrency />

        {currency}

        <InputSubmit 
            type="submit" 
            value="Query"
        />
    </form>
  )
}

export default Form;