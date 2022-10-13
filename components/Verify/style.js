import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 0;
`;

export const Heading = styled.h3`
  font-family: "Nunito Sans";
  text-align: center;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: -0.1rem;
`;

export const P = styled.p`
  font-family: "Nunito Sans";
  text-align: center;
  width: 35%;
  margin: 0 auto;
  margin-bottom: 2rem;
  color: var(--subtle-text);
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const StageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StageItems = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.1px solid #e1e1e1;
  column-gap: 0.7rem;
  padding-bottom: 1rem;
  flex-wrap: nowrap;
`;

export const Stage = styled.span`
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : "var(--primary-brand)")};
  @media screen and (max-width: 520px) {
    font-size: 13px;
  }
`;

export const ArrowRight = styled.img``;

export const FormContainer = styled.div`
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  row-gap: 1rem;
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? props.height : "60px")};
  width: clamp(250px, 420px, 450px);
  background-color: #fff;
  color: var(--primary-brand);
  padding: 0 3px;
  border: 0.933743px solid #e3e6e8;
  font-size: 18px;
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
  ::placeholder{
    font-size:18px;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  width: clamp(250px, 420px, 450px);
  column-gap: 5px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: var(--primary-brand);
  padding: 15px 50px;
  font-size: 15px;
  width: clamp(250px, 420px, 450px);
  color: #fff;
  border-radius: 30px;
  transition: 0.7s;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  border: 1px solid var(--primary-brand);
  :hover {
    cursor: pointer;
    color: var(--primary-brand);
    background-color: #fff;
    border: 1px solid var(--primary-brand);
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background-color: transparent;
  outline: 1px solid var(--subtle-text);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  :checked::after {
    outline: none;
    font-family: "Font Awesome 6 Free";
    content: "\f00c";
    font-weight: 900;
    background-color: var(--primary-brand);
  }
`;

export const Label = styled.label`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : "var(--primary-brand)")};
  width: clamp(250px, 420px, 450px);
  a {
    text-decoration: underline;
  }
`;