import styled from "styled-components";
import logo from "../../assets/logo.png";

export const StyledHomePage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-gray-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerHome {
    max-width: 90rem;
    width: 100%;
    padding: 0 2.625rem;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-gray-2);
    border-radius: 2.5rem 2.5rem 0rem 0rem;
  }

  .logo {
    height: 5.375rem;
    width: 8.188rem;
    border-radius: 20%;
    object-fit: cover;
  }

  .divButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
  }

  .btGoLogin,
  .btGoRegister {
    max-width: 8.438rem;
    width: 100%;
    height: 3rem;
    padding: 0.875rem;
    border-radius: 3.125rem;
    border: 0.07625rem solid var(--bg-gray-3);
    background-color: var(--bg-gray-3);
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--bg-white);
  }

  .btGoLogin:hover {
    border: 0.07625rem solid var(--bg-gray-1);
    background-color: var(--bg-gray-1);
  }
  .btGoRegister:hover {
    border: 0.07625rem solid var(--bg-gray-1);
    background-color: var(--bg-gray-1);
  }

  .mainHome {
    max-width: 90rem;
    width: 100%;
    display: flex;
    height: 49rem;
    align-items: center;
    gap: 1.875rem;
  }

  .sectionTlEvent {
    max-width: 44.063rem;
    width: 100%;
    height: 100%;
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .sectionSlogan {
    max-width: 44.063rem;
    width: 100%;
    height: 100%;
    background-color: var(--bg-gray-3);
    display: flex;
    align-items: center;
    padding: 0rem 2.375rem 0rem 3rem;
  }

  .slogan {
    color: var(--bg-white);
    font-family: var(--family-1);
    font-size: 3.125rem;
    font-weight: 400;
    line-height: 4.125rem;
  }

  @media (max-width: 67.5rem) {
    .headerHome {
      gap: 1.875rem;
    }

    .btGoLogin,
    .btGoRegister {
      font-size: 0.75rem;
      width: 50%;
      padding: 0.563rem;
      height: auto;
    }

    .logo {
      height: 3.375rem;
      width: 6.188rem;
    }
    .mainHome {
      margin-top: 1.875rem;
      flex-direction: column;
    }
    .slogan {
      font-size: 2.188rem;
      line-height: 3.438rem;
    }
  }

  @media (max-width: 28.125rem) {
    .slogan {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }
`;
