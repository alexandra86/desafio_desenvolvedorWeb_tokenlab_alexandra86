import styled from "styled-components";

export const StyledDashboardPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-gray-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerDashboard {
    max-width: 90rem;
    width: 100%;
    max-height: 9rem;
    height: 100%;
    padding: 1.688rem 6.563rem 0.875rem 3.75rem;
    border-radius: 2.5rem, 2.5rem, 0rem 0rem;
    background-color: var(--bg-gray-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation {
    max-width: 34.125rem;
    width: 100%;
    max-height: 3.188rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-height: 6.438rem;
    height: 100%;
    max-width: 10.938rem;
    width: 100%;
    border-radius: 1.25rem;
    object-fit: cover;
  }

  .imageUser {
    max-height: 5.313rem;
    height: 100%;
    max-width: 5.313rem;
    width: 100%;
    object-fit: cover;
    border: 0.25rem solid var(--bg-gray-1);
    border-radius: 50%;
  }

  .buttonsNavigation {
    max-width: 8.5rem;
    width: 100%;
    max-height: 3rem;
    height: 100%;
    border-radius: 3.125rem;
    background-color: var(--bg-gray-3);
    color: var(--bg-white);
    font-family: var(--family-1);
    font-size: 0.875rem;
    font-weight: 400;
  }

  .buttonsNavigation:hover {
    background-color: var(--bg-gray-1);
    font-weight: 600;
  }

  .welcome {
    max-width: 90rem;
    width: 100%;
    max-height: 7.5rem;
    height: 100%;
    background-color: var(--bg-gray-4);
    padding: 1.688rem 6.563rem 1.688rem 4.188rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .areaFraseWelcome {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }

  .fraseWelcome {
    color: var(--bg-black);
    text-align: center;
    font-family: var(--family-1);
    font-size: 1.125rem;
    font-weight: 400;
  }

  .buttonNewEvent {
    max-width: 16rem;
    width: 100%;
    max-height: 3.063rem;
    height: 100%;
    background-color: var(--bg-gray-3);
    border-radius: 6.25rem;
    color: var(--bg-white);
    font-family: var(--family-1);
    font-size: 0.875rem;
    font-weight: 400;
  }

  .buttonNewEvent:hover {
    background-color: var(--bg-gray-1);
    font-weight: 600;
  }

  .mainDashboard {
    max-width: 90rem;
    width: 100%;
    padding: 1.688rem 6.563rem 1.688rem 4.188rem;
    background-color: var(--bg-gray-1);
  }

  .tittleDashboard {
    margin-top: 3.125rem;
    margin-bottom: 3.313rem;
    color: var(--bg-white);
    text-align: center;
    font-family: var(--family-2);
    font-size: 3.125rem;
    font-weight: 400;
  }

  .areaCards {
    height: auto;
    background-color: var(--bg-gray-1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.313rem;
    flex-wrap: wrap;
  }

  .fraseNotEvent {
    color: var(--bg-white);
    text-align: center;
    font-family: var(--family-1);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 68.5rem) {
    .logo {
      max-height: 3.438rem;
      max-width: 3.938rem;
    }

    .headerDashboard {
      padding: 0.085rem;
    }

    .navigation {
      justify-content: space-evenly;
    }

    .welcome {
      padding: 0.085rem;
    }

    .areaFraseWelcome {
      gap: 0.5rem;
    }

    .buttonNewEvent {
      width: 50%;
      height: 75%;
      background-color: var(--bg-gray-3);
      font-size: 0.75rem;
    }

    .mainDashboard {
      padding: 1rem;
    }
    .areaCards {
      display: flex;
      gap: 1rem;
    }
  }

  @media (max-width: 56.25rem) {
    .buttonsNavigation {
      background-color: var(--bg-none);
      font-size: 0.75rem;
    }

    .imageUser {
      max-height: 3.313rem;
      height: 100%;
      max-width: 3.313rem;
    }

    .fraseWelcome {
      font-size: 0.875rem;
    }

    .areaCards {
      flex-wrap: nowrap;
      overflow: scroll;
      justify-content: flex-start;
    }
  }

  @media (max-width: 34.375rem) {
    .areaCards {
      flex-wrap: nowrap;
      overflow: scroll;
      justify-content: flex-start;
    }
  }
`;
