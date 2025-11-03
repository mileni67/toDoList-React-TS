import { ToDo } from "../../models/todo-item";
import { StyledLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <StyledLink to={`/list/${todo.id}`} $isDone={todo.isDone}>
            {todo.text}
        </StyledLink>
    );
};