import styled from "@emotion/styled";

const MyFooter = styled.footer`
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-family: "Lato", sans-serif;
    color: white;
    font-size: 1.1rem;
    font-weight: 400;
    font-style: italic;

    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;

    svg {
        stroke: white;
        transition: transform 0.9s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`

function Footer() {
  return (
    <MyFooter>
      <p>Copyright &copy; by Rodrigo Bojorquez</p>

      <a href="https://www.linkedin.com/in/rodrigo-bojorquez-70b899278/">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      </a>
    </MyFooter>
  );
}

export default Footer;
