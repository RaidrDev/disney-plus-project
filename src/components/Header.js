import React, { useEffect } from 'react'
import { auth, provider } from '../firebase';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin, 
    setSignOut
} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/");
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
        })
    }

    const signOut = () => {
        auth.signOut().then(()=>{
            dispatch(setSignOut());
            history.push("/login");
        })
    }

    return (
        <Nav>
            <Link to={``}>
                <Logo src="/images/logo.svg" />
            </ Link>
            {!userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                ) :
                <>
                    <NavMenu>
                        <Link to={``}>
                            <a>
                                <img src="/images/home-icon.svg" />
                                <span>HOME</span>
                            </a>
                        </ Link>

                        <a>
                            <img src="/images/search-icon.svg" />
                            <span>SEARCH</span>
                        </a>

                        <a>
                            <img src="/images/watchlist-icon.svg" />
                            <span>WATCHLIST</span>
                        </a>

                        <a>
                            <img src="/images/original-icon.svg" />
                            <span>ORIGINALS</span>
                        </a>

                        <a>
                            <img src="/images/movie-icon.svg" />
                            <span>MOVIES</span>
                        </a>

                        <a>
                            <img src="/images/series-icon.svg" />
                            <span>SERIES</span>
                        </a>

                    </NavMenu>

                    <UserImg onClick={signOut}
                     src="https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg" />
                </>
            }


        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    padding: 0 36px; //0 arriba y abajo 36 a cada lado 
    justify-content: space-between;
    top: 0;
    left: 0; //al poner el top el left y el right a 0 hace que se estire a cada lado y por tanto se vea todo estirado centrado automaticamente
    right: 0;

`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    align-items: center; 

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: white;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }

        @media(max-width: 790px){
            display:none;
        }

    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 250ms ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`