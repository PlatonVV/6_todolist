import React, { ChangeEvent, useState } from "react";

export type EditableSpanPropsType = {
  title: string;
  updateItem: (title: string) => void;
};
export const EditableSpan = (props: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");

  const EditHandler = () => {
    setTitle(props.title);
    setEditMode(!editMode);
    updateTask();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const updateTask = () => {
    props.updateItem(title);
  };

  return editMode ? (
    <input
      value={title}
      onBlur={EditHandler}
      autoFocus
      onChange={onChangeHandler}
    />
  ) : (
    <span onDoubleClick={EditHandler}>{props.title}</span>
  );
};
