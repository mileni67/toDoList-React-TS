import { Link } from "react-router-dom";
import './NotFound.scss';

export const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-animation">
                <span>😿</span>
            </div>
            <h1 className="notfound-title">404</h1>
            <p className="notfound-subtitle">Not Found</p>
            <Link to="/" className="notfound-link">To Home</Link>
        </div>
    );
};
