import { Container, HeaderWrapper, NavItem, ToggleButton } from './Header.styled'
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeAction } from '../../features/themeList'
import { RootState } from "../../store";
import { Sun, Moon } from "lucide-react";

export const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.themeList.theme);
    const isLight = theme.name === "light";

    return (
        <HeaderWrapper>
            <Container>
                <div>
                    <NavItem to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        ToDo
                    </NavItem>
                    <NavItem to="/list" className={({ isActive }) => (isActive ? "active" : "")}>
                        List
                    </NavItem>
                </div>

                <ToggleButton onClick={() => dispatch(toggleThemeAction())}>
                    {isLight ? <Moon size={18} /> : <Sun size={18} />}
                    {isLight ? "Dark" : "Light"}
                </ToggleButton>
            </Container>
        </HeaderWrapper>
    );
};