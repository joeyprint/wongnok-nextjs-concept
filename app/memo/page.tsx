"use client";

import { Button } from "@/components/bases";
import { useMemo, useState } from "react";

const todoList = [
  { id: 1, text: "TODO 01", status: "done" },
  { id: 2, text: "TODO 02", status: "todo" },
  { id: 3, text: "TODO 03", status: "todo" },
  { id: 4, text: "TODO 04", status: "todo" },
  { id: 5, text: "TODO 05", status: "todo" },
];

type Todo = {
  id: number;
  text: string;
  status: string;
};

const MemoPage = () => {
  const [todo, setTodo] = useState(todoList);

  const todoStatusList = useMemo<Todo[]>(() => {
    return todo.filter((item) => item.status === "todo") ?? [];
  }, [todo]);

  const handleTodoToDone = (id: number) => {
    setTodo((prev) => {
      const todoIndex = todo.findIndex((item) => item.id === id);
      const newTodo = [...prev];
      newTodo[todoIndex] = { ...newTodo[todoIndex], status: "done" };
      return newTodo;
    });
  };

  return (
    <ul>
      {todoStatusList.map((item) => (
        <>
          <li key={item.id}>{item.text}</li>
          <Button onClick={() => handleTodoToDone(item.id)}>
            Move to done
          </Button>
        </>
      ))}
    </ul>
  );
};

export default MemoPage;
