import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyledLinkProps {
    $isDone: boolean;
}

export const StyledLink = styled(Link) <StyledLinkProps>`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 18px;
  display: block;
  margin-bottom: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: ${({ $isDone, theme }) =>
        $isDone ? theme.colors.accent : theme.colors.textPrimary};
  border-left: 5px solid
    ${({ $isDone, theme }) =>
        $isDone ? theme.colors.accent : theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: ${({ theme }) => theme.colors.accentHover}22;
  }
`;
