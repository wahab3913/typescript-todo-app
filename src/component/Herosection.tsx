import React from "react";
import { inputType } from "./mode";

const Herosection = ({ inputVal, setInputVal, handleValue }: inputType) => {
  const handleInputValue = (e: React.FormEvent) => {
    setInputVal((e.target as HTMLInputElement).value);
  };
  return (
    <div className="flex justify-center pt-6">
      <form onSubmit={handleValue}>
        <input
          value={inputVal}
          onChange={handleInputValue}
          type="text"
          className="px-2 border rounded color-black py-2 mx-4"
          placeholder="enter the name"
        />
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Herosection;
