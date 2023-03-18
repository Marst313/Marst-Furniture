import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loader"></div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }

  return <> {children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .loader {
    width: 50px;
    height: 50px;
    display: inline-block;
    border: 5px solid rgb(255, 17, 0);
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: rot5 1s infinite;
  }
  @keyframes rot5 {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotate(180deg);
      border-top-color: rgb(139, 46, 46);
      border-bottom-color: rgb(243, 92, 33);
      border-right-color: transparent;
      border-left-color: transparent;
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default AuthWrapper;
