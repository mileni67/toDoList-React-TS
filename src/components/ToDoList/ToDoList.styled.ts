import styled, { css } from "styled-components";

export const ToDoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ToDoListStyledProps {
    $type: "failed" | "completed";
}

export const ToDoListStyled = styled.ul<ToDoListStyledProps>`
  width: 100%;
  margin: 20px 0;
  padding: 0;
  list-style: none;
  position: relative;
  min-height: 40px;
  transition: all 0.3s ease;

  ${({ $type, theme }) =>
        $type === "failed"
            ? css`
          &:empty::after {
            content: "Немає задач для виконання";
          }
          &::after {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: ${theme.colors.textSecondary};
            opacity: 0.7;
          }
        `
            : css`
          padding-top: 60px;

          &:empty::after {
            content: "Немає виконаних задач";
          }

          &::before {
            content: "";
            width: 150px;
            height: 1px;
            background: ${theme.colors.border};
            position: absolute;
            top: 25px;
            left: calc(50% - 75px);
          }

          &::after {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: ${theme.colors.textSecondary};
            opacity: 0.7;
          }
        `}
`;
