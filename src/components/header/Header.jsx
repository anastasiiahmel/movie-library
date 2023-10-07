// import headerLogo  from "..//../images/ukraine-g77c9acca9_1280.jpg";
import { Header, Link } from "./Header.styled";

export const HeaderContainer = () => {
    return(
        <Header>
       
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>
    )
};