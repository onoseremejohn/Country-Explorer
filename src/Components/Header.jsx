import styled from "styled-components";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { useGlobalContext } from "../Context";
const Header = () => {
  const { mode, toggleMode } = useGlobalContext();
  return (
    <Wrapper>
      <div className='section-center'>
        <h2>Where in the world?</h2>
        <div onClick={toggleMode}>
          <button>{mode === "light" ? <BsMoon /> : <BsSunFill />}</button>
          <p className='bold'>
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  z-index: 100;
  background: var(--clr-grey-10);
  width: 100%;
  min-height: 4rem;
  display: grid;
  place-items: center;
  box-shadow: var(--bs);
  .section-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
  button {
    background: none;
    border: none;
    svg {
      font-size: 1rem;
      color: var(--clr-grey-1);
    }
  }
  .section-center > div {
    display: flex;
    gap: 0.5em;
    align-items: center;
    cursor: pointer;
  }
`;

export default Header;
