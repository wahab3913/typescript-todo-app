import React, { useState } from "react";

import "./App.css";
import Herosection from "./component/Herosection";
import { Todo } from "./component/mode";
//string
// let name: string = "wahab";
//number
// let age: number = 23;
//boolean
// let student: Boolean;
// student = true;
//array string
// let hobbies: string[] = ["cukur", "yamach"];
//tuple is fixed amount of types and values at the define
// let role: [number, string];
// role = [2, "admin"];
// object
// interface Person {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "wahab",
// };
//union type mean the there is the second type if the first is not then second is working

// //extended interface
// interface Person2 extends Person {
//   hobbies: string[];
// }
// console.log(name, age, student, hobbies, person, role, "type");

const App: React.FC = () => {
  const [inputVal, setInputVal] = useState<string | number>("");
  const [todo, setTodo] = useState<Todo[]>([]);
  const [editData, setEditData] = useState<number>(0);

  const handleValue = (e: React.FormEvent) => {
    e.preventDefault();
    if (editData > 0) {
      const newTodo = todo.map((item) => {
        if (item.id === editData) {
          return { ...item, todo: inputVal };
        }
        return item;
      });
      setTodo(newTodo);
      setEditData(0);
    } else if (inputVal) {
      setTodo([...todo, { id: Date.now(), todo: inputVal, isDone: false }]);
    }
    setInputVal("");
  };
  const removeVal = (id: number) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };
  const editVal = (id: number) => {
    const editTodo = todo.find((item) => item.id === id);
    if (editTodo) {
      setEditData(editTodo.id);
      setInputVal(editTodo.todo);
    }
  };
  return (
    <>
      <h1 className="text-4xl mt-2 font-bold text-center underline">
        TypeScript Todo App!
      </h1>
      <div className="mt-16">
        <Herosection
          inputVal={inputVal}
          setInputVal={setInputVal}
          handleValue={handleValue}
        />
      </div>
      <p className="text-3xl mt-2 mb-2 font-bold text-center underline">Data</p>
      <div className="flex gap-y-4  flex-col  items-center">
        {todo.map((item) => {
          return (
            <div key={item.id} className="flex pb-2  px-4 	   w-96 gap-2 border">
              <p className="flex flex-1 text-lg mt-2 px-2 py-2  rounded">
                {item.todo}
              </p>
              <div>
                <button
                  onClick={() => removeVal(item.id)}
                  className="bg-black text-white px-2  mx-2 mt-2 py-2 rounded"
                >
                  delete
                </button>
                <button
                  onClick={() => editVal(item.id)}
                  className="bg-black text-white px-2 mt-2 py-2 rounded"
                >
                  edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
