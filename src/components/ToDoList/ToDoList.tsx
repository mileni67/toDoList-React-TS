import React from "react";
import { ToDo } from "../../models/todo-item";
import { ToDoListItem } from "./ToDoListItem/ToDoListIltem";
import { ToDoContainer, ToDoListStyled } from "./ToDoList.styled";


interface ToDoListProps {
    todos: ToDo[];
    updateToDo: (todo: ToDo) => void;
    deleteToDo: (todo: ToDo) => void;
}

export const ToDoList: React.FC<ToDoListProps> = ({ todos, updateToDo, deleteToDo }) => {
    const failedList = todos
        .filter((item) => !item.isDone)
        .map((item) => (
            <ToDoListItem
                key={item.id}
                toDoItem={item}
                updateToDo={updateToDo}
                deleteToDo={deleteToDo}
            />
        ));

    const completedList = todos
        .filter((item) => item.isDone)
        .map((item) => (
            <ToDoListItem
                key={item.id}
                toDoItem={item}
                updateToDo={updateToDo}
                deleteToDo={deleteToDo}
            />
        ));

    return (
        <ToDoContainer>
            <ToDoListStyled $type="failed">{failedList}</ToDoListStyled>
            <ToDoListStyled $type="completed">{completedList}</ToDoListStyled>
        </ToDoContainer>
    );
};
