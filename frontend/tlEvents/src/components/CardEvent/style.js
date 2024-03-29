import styled from "styled-components";

export const StyledCardEvent = styled.li`
  max-width: 16.75rem;
  width: 100%;
  height: auto;
  min-height: 11.75rem;
  background-color: var(--bg-gray-4);
  border-radius: 0.625rem;
  border: 0.125rem solid var(--bg-gray-3);
  padding: 1.125rem;
  display: flex;
  flex-direction: column;
  animation: cardAnimation 1.5s ease-in;

  .cardTitle {
    margin-top: 0.563rem;
    margin-bottom: 0.813rem;
    color: var(--bg-black);
    text-align: center;
    font-family: var(--family-1);
    font-size: 0.875rem;
    font-weight: 400;
  }

  .cardDescription {
    margin-bottom: 0.188rem;
    width: 100%;
    height: 3.063rem;
    color: var(--bg-black);
    font-family: var(--family-1);
    font-size: 0.875rem;
    font-weight: 400;
  }

  .cardHours {
    color: var(--bg-black);
    font-family: var(--family-1);
    font-size: 0.875rem;
    font-weight: 400;
  }

  .cardDate {
    margin-bottom: 0.813rem;
    color: var(--bg-black);
    font-family: var(--family-1);
    font-size: 0.875rem;
    font-weight: 400;
  }

  .cardDivButtons {
    margin-top: 1.688rem;
    margin-bottom: 0.75rem;
    width: 100%;
    max-height: 1.5rem;
    height: 100%;
    padding: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cardEditButton {
    max-width: 3rem;
    width: 100%;
    max-height: 1.5rem;
    height: 100%;
    padding: 0.313rem;
    border-radius: 0.938rem;
    background-color: var(--bg-pink);
    color: var(--bg-white);
    font-family: var(--family-1);
    font-size: 0.75rem;
    font-weight: 400;
  }

  .cardEditButton:hover {
    background-color: var(--bg-dark-pink);
    font-weight: 500;
  }

  .cardDeleteButton {
    max-width: 3rem;
    width: 100%;
    max-height: 1.5rem;
    height: 100%;
    padding: 0.313rem;
    border-radius: 0.938rem;
    background-color: var(--bg-orange);
    color: var(--bg-black);
    font-family: var(--family-1);
    font-size: 0.75rem;
    font-weight: 400;
  }

  .cardDeleteButton:hover {
    background-color: var(--bg-dark-orange);
    font-weight: 500;
  }

  @media (max-width: 56.25rem) {
    .cardDescription {
      height: 5.063rem;
      font-size: 0.75rem;
    }

    .cardHours {
      font-size: 0.75rem;
    }

    .cardDivButtons {
      gap: 0.625rem;
    }
  }

  @keyframes cardAnimation {
    from {
      opacity: 0;
      transform: translateX(-70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
