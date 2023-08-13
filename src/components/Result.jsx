import styled from "@emotion/styled";

const Check = styled.div`
    color: white;
    font-family: "Lato", sans-serif;
    margin-top: 30px;
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;

    div {
        width: 100%;
        /* background-color: #6c6ed3; */
        border-radius: 7px;
    }
`

const Image = styled.img`
    display: block;
    width: 66%;
    height: auto;

    @media (max-width: 876px) {
        width: 40%;
        height: auto;
    }

    @media (max-width: 576px) {
        width: 40%;
        height: auto;
    }
`

const Text = styled.p`
    width: auto;
    padding: 0 15px;
    font-size: 1.2rem;
    font-weight: 400;
    span {
        font-weight: 600;
    }
`

const Price = styled.p`
    width: auto;
    padding: 0 15px;
    font-weight: 400;
    font-size: 1.2rem;
    span {
        font-weight: 700;
    }
`


function Result({ check }) {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, TOSYMBOL, LASTUPDATE } = check;

    return(
        <Check>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto image" />
            <div>
                <Price>The current price is: <span>{PRICE}</span></Price>
                <Text>The highest price in 24hrs: <span>{HIGHDAY}</span></Text>
                <Text>The lowest price in 24hrs: <span>{LOWDAY}</span></Text>
                <Text>The percentage change in 24hrs: <span>{CHANGEPCT24HOUR}%</span></Text>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>        
        </Check>
    )
}

export default Result;