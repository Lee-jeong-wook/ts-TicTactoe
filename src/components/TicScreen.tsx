import React, { useEffect, useState } from "react";
import { TicItems } from "./TicItems";
import styled from "styled-components";

export const TicScreen: React.FC = () => {
  const [items, setItems] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState<boolean>(false);
  const checkRow = (row:number) => {
    const tmp:number[] = [];
    for (let j = 0; j < 3; j++) {
      if (!items[row * 3 + j]) continue;
      tmp.push(items[row * 3 + j]);
    }
    return tmp.length === 3 && tmp.every((value) => value === tmp[0]);
  };
  const checkCol = (col:number) => {
    const tmp:number[] = [];
    for (let j = 0; j < 3; j++) {
      if (!items[col + j * 3]) continue;
      tmp.push(items[col + j * 3]);
    }
    return tmp.length === 3 && tmp.every((value) => value === tmp[0]);
  };

  const horizenHandler = () => {
    for (let i = 0; i < 3; i++) {
      if (checkRow(i)) {
        alert(`${!turn ? "O" : "X"} 승리`);
        setItems([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        return;
      }
    }
  };
  const verticalHandler = () => {
    for (let i = 0; i < 3; i++) {
      if (checkCol(i)) {
        alert(`${!turn ? "O" : "X"} 승리`);
        setItems([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        return;
      }
    }
  }
  const diagonalHandler = () => {
    if(items[0] === items[4] && items[0] === items[8]){
      if (!items[0]) return;
      alert(`${!turn ? "O" : "X"} 승리`);
      setItems([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      return;
    }
    if(items[2] === items[4] && items[2] === items[6]){
      if (!items[2]) return;
      alert(`${!turn ? "O" : "X"} 승리`);
      setItems([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      return;
    }
  }

  useEffect(() => {
    setTurn(!turn);
  }, [items]);
  useEffect(() => {
    diagonalHandler();
    horizenHandler();
    verticalHandler();
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