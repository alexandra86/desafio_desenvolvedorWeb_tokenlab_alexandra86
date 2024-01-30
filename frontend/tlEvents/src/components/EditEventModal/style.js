import styled from "styled-components";

export const StyledContainerModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContent {
    max-width: 23.0625rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: var(--bg-gray-2);
    animation: registerAnimation 1.5s ease-in;
    transform: 1.5s ease-in;
  }
  .headerModal {
    max-width: 23.0625rem;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .titleModal {
    font-family: var(--family-2);
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--bg-white);
  }
  .btCloseModal {
    max-width: 0.6875rem;
    width: 100%;
    height: 1.625rem;
    font-family: var(--family-2);
    font-weight: 600;
    font-size: 1rem;
    color: var(--bg-white);
  }
  .btCloseModal:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
  }
  .formModal {
    max-width: 23.0625rem;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: var(--bg-gray-3);
    display: flex;
    flex-direction: column;
    gap: 0.8125rem;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
  }
  .labelModal {
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 0.76125rem;
    color: var(--bg-white);
  }
  .inputModal {
    max-width: 20.620625rem;
    width: 100%;
    height: 3rem;
    padding: 0rem 1rem;
    background-color: var(--bg-gray-5);
    border: 0.07625rem solid var(--bg-gray-1);
    border-radius: 0.25rem;
    color: var(--bg-black);
  }
  .inputModal::placeholder {
    color: var(--bg-gray-8);
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1.015rem;
  }

  .areaError {
    color: var(--bg-red);
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 0.75rem;
  }
  .btCreateModal {
    margin-bottom: 0.625rem;
    max-width: 20.25rem;
    width: 100%;
    height: 3rem;
    padding: 0rem 1.375rem;
    background-color: var(--bg-purple);
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 1rem;
    color: var(--bg-white);
    border-radius: 0.25rem;
  }
  .btCreateModal:hover {
    background: rgb(30, 30, 30);
    background: linear-gradient(
      281deg,
      rgba(30, 30, 30, 1) 0%,
      rgba(25, 25, 112, 1) 50%,
      rgba(30, 30, 30, 1) 100%
    );
  }

  @media (max-width: 43.75rem) {
    .modalContent {
      width: 83%;
    }
  }

  @keyframes registerAnimation {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
