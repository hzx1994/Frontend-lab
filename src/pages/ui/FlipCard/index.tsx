import Basic from "@/components/basic";
import styled from "styled-components";

const BaseDiv = styled(Basic.Div.RandomColorDiv)`
  transition: transform 0.5s;
  transform-style: preserve-3d;
  position: absolute;
`;

const FrontDiv = styled(BaseDiv)`
  backface-visibility: hidden;
  z-index: 2;
`;
const BackDiv = styled(BaseDiv)`
  background-color: #000;
`;

const Container = styled.div`
  width: 300px;
  height: 300px;
  &:hover ${FrontDiv} {
    transform: rotateY(180deg);
  }
  &:hover ${BackDiv} {
    transform: rotateY(180deg);
  }
`;

export default function FlipCard() {
  return (
    <Container>
      <FrontDiv>front</FrontDiv>
      <BackDiv>back</BackDiv>
    </Container>
  );
}
