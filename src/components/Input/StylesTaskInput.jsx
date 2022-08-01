import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: purple;
  width: 20rem;
  padding: 1rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-right: 1rem;
    color: white;
  }

  input {
    height: 2rem;
    margin-top: 0.5rem;
    border-radius: 2px;
    border: none;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    &:focus {
      outline: none;
    }
  }

  button {
    margin-top: 0.5rem;
    border: none;
    padding: 0.2rem 2rem;
    border-radius: 2px;
    background-color: white;
    text-align: center;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    display: block;
    color: ${(props) => (props.invalidProp ? "red" : "white")};
  }
  & input {
    font: inherit;

    border: 1px solid ${(props) => (props.invalidProp ? "red" : "ccc")};
    background: ${(props) => (props.invalidProp ? "salmon" : "white")};
    display: block;
  }
  &input:focus {
    outline: none;
  }
`;
