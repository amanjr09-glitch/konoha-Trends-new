import { render } from '@testing-library/react'
import React, { useRef, useEffect,useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/images/logo-2.png'
import { authentication } from '../firebase/firebase';
const mainNav = [
    {
        display: "HOME",
        path: "/"
    },
    {
        display: "PRODUCTS",
        path: "/catalog"
    },
    {
        display: "CATEGORIES",
        path: "/Categories"
    },
   /*  {
        display: "SIGN-UP",
        path: "/sign-up"
    } */
]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const [isUserSignedIn,setUserSignedIn] = useState(false);

    authentication.onAuthStateChanged((user) => {
        console.log('user in auth listener',user)
        if(user){

        return setUserSignedIn(true);
        }
        setUserSignedIn(false);
    });

    const doLogout = () => {
        authentication.signOut();
    }

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                        { isUserSignedIn ? null : 
                        <div className="user-action" >
                            <Link to='sign-up'>
                                <span>SIGN UP</span>
                            </Link>
                        </div>
                        }
                        { !isUserSignedIn ? null : 
                        <div className="user-action" onClick={doLogout} >
                            <span>LOG OUT</span>
                        </div>
                        }
                        
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>

                        { !isUserSignedIn ? null : 
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/profile">
                            <i className="bx bx-user"></i>
                            </Link>
                            
                        </div>

                        }


                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
