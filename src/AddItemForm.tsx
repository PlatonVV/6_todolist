import React, { ChangeEvent, KeyboardEvent, useState } from "react";

export type AddItemFormPropsType = {
  addTask: (title: string, todolistId: string) => void;
  id: string;
};

export function AddItemForm(props: AddItemFormPropsType) {
  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === "Enter") {
      addTask();
    }
  };
  const addTask = () => {
    let newTitle = title.trim();
    if (newTitle !== "") {
      props.addTask(newTitle, props.id);
      setTitle("");
    } else {
      setError("Title is required");
    }
  };
  return (
    <div>
      <input
        value={title}
        onChange={onChangeHandler}
        onKeyDown={onKeyPressHandler}
        className={error ? "error" : ""}
      />
      <button onClick={addTask}>+</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}