import styled from "styled-components";

export const StyledLoginPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;
  background-color: var(--bg-black);
  padding: 0rem 0.625rem 0rem 0.625rem;

  .secLogin {
    margin-bottom: 0.625rem;
    max-width: 31.25rem;
    width: 100%;
    height: 33.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    border: 0.1125rem solid var(--bg-gray-2);
    padding: 1.625rem 1.5rem;
    background-color: var(--bg-gray-3);
  }

  .titleLogin {
    margin-bottom: 0.875rem;
    font-family: var(--family-2);
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    color: var(--bg-white);
  }

  .formLogin {
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .lbLogin {
    margin-bottom: 0.3125rem;
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--bg-white);
  }

  .iptLogin {
    max-width: 28.25rem;
    width: 100%;
    height: 3.813rem;
    margin-bottom: 0.9375rem;
    padding: 1.25rem 0.9375rem;
    margin-bottom: 0.3125rem;
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1rem;
    background-color: var(--bg-gray-5);
    color: var(--bg-black);
    outline: none;
    border: 0.1125rem solid var(--bg-gray-1);
    border-radius: 0.5rem;
  }

  .iptLogin::placeholder {
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1rem;
  }

  .iptLogin:focus {
    border: 0.1125rem solid var(--bg-gray-6);
    border-radius: 0.5rem;
  }

  .iptLogin:hover {
    border: 0.1125rem solid var(--bg-gray-6);
    border-radius: 0.5rem;
  }

  .btLogar {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: var(--bg-purple);
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1rem;
    color: var(--bg-white);
  }
  .btLogar:hover {
    background: rgb(30, 30, 30);
    background: linear-gradient(
      281deg,
      rgba(30, 30, 30, 1) 0%,
      rgba(25, 25, 112, 1) 50%,
      rgba(30, 30, 30, 1) 100%
    );
  }

  .messageCreateRegister {
    margin-top: 0.625rem;
    margin-bottom: 1.3125rem;
    width: 100%;
    height: 2.375rem;
    text-align: center;
    line-height: 1.125rem;
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--bg-white);
  }

  .btGoToRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: var(--bg-gray-7);
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1rem;
    color: var(--bg-white);
  }

  .btGoToRegister:hover {
    background-color: var(--bg-gray-8);
    color: var(--bg-black);
    border: 0.063rem solid var(--bg-gray-7);
  }

  .secApresentation {
    max-width: 31.25rem;
    width: 100%;
    height: 34.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.625rem 1.5rem;
    background-color: var(--bg-black);
  }

  .areaImageAndMessage {
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    max-width: 23.5625rem;
    width: 100%;
    height: 5.9375rem;
    display: flex;
    padding: 1.0625rem 0rem 1.125rem 0.875rem;
    gap: 1.1875rem;
    background-color: var(--bg-white);
    border: 0.0625rem solid var(--bg-gray-9);
    border-radius: 0.3125rem;
  }

  .areaError {
    color: var(--bg-red);
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 0.75rem;
  }

  .logo {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 67.5rem) {
    gap: 0rem;
    flex-direction: column-reverse;
    height: auto;

    .secApresentation {
      height: auto;
    }

    .messageCreateRegister {
      margin-top: 0.875rem;
    }
  }

  @media (max-width: 28.125rem) {
    .messageCreateRegister {
      margin-left: 1rem;
      width: 89%;
    }
  }
`;
