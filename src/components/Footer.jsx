import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo-2.png'

const footerAboutLinks = [
    {
        display: "About",
        path: "/about"
    },
    {
        display: "Contact",
        path: "/about"
    },
    {
        display: "Recruit",
        path: "/about"
    },
    {
        display: "News",
        path: "/about"
    },
    {
        display: "Store system",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Return Policy",
        path: "/about"
    },
    
    {
        display: "Refund Policy",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                           Customer Care
                        </div>
                        <div className="footer__content">
                            <p>
                               Phone: <strong>8960967697</strong>
                            </p>
                            <p>
                            Order problems:<strong>8960967697</strong>
                            </p>
                            <p>
                            Suggestions:<strong>Konohatrends@gmail.com</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            About Konoha
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Customer care
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                        Towards the goal of bringing a new joy of dressing every day to millions of Global consumers. Let's work with KONOHA TRENDS towards a more active and positive life.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
