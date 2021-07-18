import React from 'react';
import { Link } from 'react-router-dom';

// Svg logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

// Functional components with hooks
const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/react-movie-db'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer"><TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' /></a>
        </Content>
    </Wrapper>
)

export default Header; 