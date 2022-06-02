import React from "react";
import { Card } from "./Card";
import "./expense-list.css";

export const ExpenseList = () => {
  const list = [
    {
      title: "Made a purchase",
      logo: "the-logo",
      createdAt: Date.now(),
      amount: 1200,
    },
    {
      title: "Made a purchase",
      logo: "the-logo",
      createdAt: Date.now(),
      amount: 1200,
    },
  ];

  return (
    <div>{list.length ? list.map((item, i) => <Card item={item } key={i}/>) : null}</div>
  );
};
