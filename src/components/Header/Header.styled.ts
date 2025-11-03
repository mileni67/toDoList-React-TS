import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.3s ease;
  z-index: 1000;
`;

export const Container = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 18px;
  transition: color 0.3s ease;

  &.active {
    color: ${({ theme }) => theme.colors.accentHover};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
    box-shadow: none;
  }
`;
