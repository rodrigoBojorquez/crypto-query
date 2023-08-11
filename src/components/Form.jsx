import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
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
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

function Form({ setCurrencies }) {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrency] = useSelectCurrency(
    "Choose your currency",
    currencies
  );
  const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency(
    "Choose your crypto currency",
    cryptos
  );

  // API REQUEST
  useEffect(() => {
    const APIquery = async () => {
      const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";

      const response = await fetch(url);
      const result = await response.json();

      const arrayCryptos = result.Data.map((crypto) => {
        const cryptoObject = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };

        return cryptoObject;
      });

      setCryptos(arrayCryptos);
    };

    APIquery();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([currency, cryptoCurrency].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setCurrencies({currency, cryptoCurrency})
  };

  return (
    <>
      {error && <Error>All fields are required</Error>}

      <form onSubmit={handleSubmit}>
        <SelectCurrency />

        <SelectCryptoCurrency />

        <InputSubmit type="submit" value="Query" />
      </form>
    </>
  );
}

export default Form;
