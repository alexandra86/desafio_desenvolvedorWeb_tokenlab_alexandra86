import styled from "styled-components";

export const StyledLoading = styled.div`
  .loadind {
    background-color: transparent;
    animation: spinner_loading 2s linear infinite;
    height: 1.313rem;
    width: 0.875rem;
    color: var(--bg-white);
    object-fit: cover;
  }

  @keyframes spinner_loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
