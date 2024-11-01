import { Header, Link } from './Header.styled';

export const HeaderContainer = () => {
  return (
    <Header>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/movies">MOVIES</Link>
        <Link to="/favorite">FAVORITE</Link>
      </nav>
    </Header>
  );
};
