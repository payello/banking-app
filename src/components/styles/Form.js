import styled from "styled-components";

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 500;
  background: #fff;
  width: 45%;
  margin: 0 auto;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: 1rem 0;
  }

  input {
    text-index: 10px;
  }
  button {
    width: 10rem;
    background: orangered;
    color: #444;
    border: 1px solid orangered;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
      color: orangered;
      background-color: #444;
    }
  }
}`;

export default Form;
