import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  max-width: 320px;
  padding: 20px;
  color: var(--darkGrey);
  margin: 5rem auto;
  background-color: lightgrey;
  border-radius: 5px;
  box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.33);

  input {
    width: 100%auto;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
  }

  input[type='text'],
  input[type='password'] {
    padding-left: 8px;
  }

  label {
    font-weight: 900;
  }

  .error {
    color: red;
  }
`;
