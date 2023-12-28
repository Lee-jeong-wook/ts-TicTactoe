import React, { useEffect, useState } from "react";
import { TicItems } from "./TicItems";
import styled from "styled-components";

export const TicScreen: React.FC = () => {
  const [items, setItems] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState<boolean>(false);

  useEffect(() => {
    setTurn(!turn);
  }, [items]);
  useEffect(() => {
    if (items.every((element) => element !== 0)) {
        alert("무승부");
        setItems([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }, [turn]);

  const clickHandler = (idx: number) => {
    if (items[idx]) return;
    if (turn) {
      setItems((prevItems) => {
        const tmpArr = [...prevItems];
        tmpArr[idx] = 1;
        return tmpArr;
      });
    } else {
      setItems((prevItems) => {
        const tmpArr = [...prevItems];
        tmpArr[idx] = 2;
        return tmpArr;
      });
    }
  };

  return (
    <>
      <span>{turn ? "O" : "X"}차례</span>
      <StyledScreen>
        {items.map((element, idx) => (
          <TicItems key={idx} value={element} onClick={() => clickHandler(idx)} />
        ))}
      </StyledScreen>
    </>
  );
};

const StyledScreen = styled.div`
    display: flex;
    width: 900px;
    flex-wrap: wrap;
`