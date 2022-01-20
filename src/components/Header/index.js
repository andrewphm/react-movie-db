import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Svg logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import {
  Wrapper,
  Content,
  LogoImg,
  TMDBLogoImg,
  LoginContainer,
} from './Header.styles';

// Context
import { Context } from '../../context';

const Header = () => {
  const [user] = useContext(Context);

  return (
    <Wrapper>
      {console.log(user)}
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <LoginContainer>
          {user ? (
            <span className="loggedin">
              <u>
                Logged in as:{' '}
                {user.username === 'gramsay' ? 'Demo' : user.username}
              </u>
            </span>
          ) : (
            <Link to="/login">
              <span className="login">
                <u>Log in</u>
              </span>
            </Link>
          )}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
          >
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
          </a>
        </LoginContainer>
      </Content>
    </Wrapper>
  );
};

export default Header;
