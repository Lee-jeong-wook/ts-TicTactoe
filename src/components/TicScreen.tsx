import React, { useEffect, useState } from "react";
import { TicItems } from "./TicItems";

export const TicScreen: React.FC = () => {
  const [items, setItems] = useState<number[]>([1, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState<boolean>(false);

  useEffect(() => {
    setTurn(!turn);
  }, [items]);

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
      <span>{turn ? "X" : "O"}차례</span>
      {items.map((element, idx) => (
        <TicItems key={idx} value={items[idx]} onClick={() => clickHandler(idx)} />
      ))}
    </>
  );
};
