import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListIltem"


export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
    const ckeckedList = () => {
        return (
            props.todos
                .filter((item) => !item.isDone)
                .map((item, idx) => {
                    return (
                        <ToDoListItem
                            toDoItem={item}
                            key={idx}
                            updateToDo={props.updateToDo}
                            deleteToDo={props.deleteToDo}
                        />
                    )
                })
        )
    }

    const unckeckedList = () => {
        return (
            props.todos
                .filter((item) => item.isDone)
                .map((item, idx) => {
                    return (
                        <ToDoListItem
                            toDoItem={item}
                            key={idx}
                            updateToDo={props.updateToDo}
                            deleteToDo={props.deleteToDo}
                        />
                    )
                })
        )
    }

    return (

        <div className="todo-container">
            <ul className="todo-list failed">
                {ckeckedList()}
            </ul>
            <ul className="todo-list completed">
                {unckeckedList()}
            </ul>
        </div>
    )
}