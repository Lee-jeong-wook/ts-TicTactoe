import { useState } from "react";
import styled from "styled-components";

interface TicItemsProps {
  value: number;
  onClick: () => void;
}

export const TicItems: React.FC<TicItemsProps> = ({ value, onClick }) => {
  return (
    <StyledItem onClick={onClick}>
      {!value ? "" : value === 1 ? "O" : "X"}
    </StyledItem>
  );
};

const StyledItem = styled.div`
  font-size: 50px;
  line-height: 50px;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
`;
