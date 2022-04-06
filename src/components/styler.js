import styled from "@emotion/styled";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const CardFront = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7c72a;
  padding: 1em;
  border: 1px solid black;
  border-radius: 30px;
`;

export const CardBack = styled(CardFront)`
  background: #2f3070;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: space-around;
`;
