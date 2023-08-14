import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CryptoImage from "./Materiales Criptos/img/imagen-criptos.png";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Result from "./components/Result";
import Footer from "./components/Footer";

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 200px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [check, setCheck] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const checkCrypto = async () => {
        setLoading(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currencies.cryptoCurrency}&tsyms=${currencies.currency}`;

        const response = await fetch(url);
        const result = await response.json();
        setCheck(
          result.DISPLAY[currencies.cryptoCurrency][currencies.currency]
        );

        setLoading(false);
      };

      checkCrypto();
    }
  }, [currencies]);

  return (
    <>
      <Container>
        <Image src={CryptoImage} alt="Images of cryptos" />

        <div>
          <Heading>Instant crypto value query</Heading>

          <Form setCurrencies={setCurrencies} />

          {loading ? <Spinner /> : check.PRICE && <Result check={check} />}
        </div>
      </Container>

      <Footer
        check = {check}
      />
    </>
  );
}

export default App;
