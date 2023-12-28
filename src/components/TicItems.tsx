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
  font-size: 100px;
  line-height: 300px;
  width: 250px;
  height: 250px;
  border: 1px solid #000;
`;
