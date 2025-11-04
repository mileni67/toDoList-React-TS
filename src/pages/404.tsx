import { NotFoundAnimation, NotFoundContainer, NotFoundLink, NotFoundSubTitle, NotFoundTitle } from "./NotFound.styled";


export const NotFound = () => {
    return (
        <NotFoundContainer>
            <NotFoundAnimation>
                <span>😿</span>
            </NotFoundAnimation>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundSubTitle>Not Found</NotFoundSubTitle>
            <NotFoundLink to="/" >To Home</NotFoundLink>
        </NotFoundContainer>
    );
};
