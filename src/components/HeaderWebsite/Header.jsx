
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