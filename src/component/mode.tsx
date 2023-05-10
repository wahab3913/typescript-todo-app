export interface inputType {
  inputVal: string | number;
  setInputVal: React.Dispatch<React.SetStateAction<string | number>>;
  handleValue: (e: React.FormEvent) => void;
}

export interface Todo {
  id: number;
  todo: string | number;
  isDone: boolean;
}
