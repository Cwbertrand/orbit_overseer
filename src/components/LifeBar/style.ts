import styled from "styled-components/native";
import { Props } from "./LifeBar";

export const LifeBarContainer = styled.View`
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const GreenBar = styled.View<Props>`
  width: ${(props) => props.width + "%"};
  height: 100%;
  background-color: ${(props) => props.color};
  z-index: 1;
  border-right-width: 3px;
  border-right-color: black;
  opacity: ${(props) => props.opacity};
`;

export const GreyBar = styled.View<Props>`
  width: ${(props) => props.width + "%"};
  height: 100%;
  background-color: gray;
  z-index: 2;
`;