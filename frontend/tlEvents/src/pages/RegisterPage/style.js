import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;
  background-color: var(--bg-black);
  padding: 0rem 0.625rem 0rem 0.625rem;

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

  .secRegister {
    margin-bottom: 0.625rem;
    max-width: 31.25rem;
    width: 100%;
    height: 40.9375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.25rem;
    border: 0.1125rem solid var(--bg-gray-2);
    padding: 0.75rem 1.5rem;
    background-color: var(--bg-gray-3);
  }

  .areaRegisterAndGoToLogin {
    margin-top: 1.75rem;
    margin-bottom: 0.875rem;
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleRegister {
    font-family: var(--family-2);
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--bg-white);
  }

  .btGoToLogin {
    max-width: 6.75rem;
    width: 100%;
    height: 1.375rem;
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--bg-gray-1);
    border-bottom: 0.1125rem solid var(--bg-gray-1);
  }
  .btGoToLogin:hover {
    font-weight: 500;
    color: var(--bg-white);
    -webkit-tranform: scale(1.1);
    -webkit-transition: scale(1.1);
  }

  .formRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .lbRegister {
    margin-bottom: 0.3125rem;
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--bg-white);
  }

  .iptRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 2.969rem;
    margin-bottom: 0.9375rem;
    padding: 0.25rem 0.9375rem;
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

  .iiptRegister::placeholder {
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1rem;
  }

  .iptRegister:focus {
    border: 0.1125rem solid var(--bg-gray-6);
    border-radius: 0.5rem;
  }
  .iptRegister:hover {
    border: 0.1125rem solid var(--bg-gray-6);
    border-radius: 0.5rem;
  }

  .btRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3.5rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: var(--bg-purple);
    border-radius: 0.5rem;
    padding: 0rem 2rem;
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1rem;
    color: var(--bg-white);
  }

  .btRegister:hover {
    background: rgb(30, 30, 30);
    background: linear-gradient(
      281deg,
      rgba(30, 30, 30, 1) 0%,
      rgba(25, 25, 112, 1) 50%,
      rgba(30, 30, 30, 1) 100%
    );
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
    flex-direction: column;
    gap: 0;
    height: auto;

    .secApresentation {
      height: auto;
    }

    .secRegister {
      border: none;
      width: 98%;
    }
  }
`;
