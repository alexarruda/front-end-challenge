import styled from 'styled-components';
import { device } from '../../Service/Device';

export const HeaderApp = styled.header`
    width: 100%;
    background-color: #1565c0;

    .header-top {
        width: 100%;
        height: 88px;

        .header-top-left {
            float: left;
            height: 100%;
            display: flex;
            align-items: center;

            .header-left-logo {
                float: left;
            }

            .header-left-menu {
                overflow: hidden;
                margin-left: 24px;

                a {
                    float: left;
                    display: block;
                    color: #f2f2f2;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                    font-size: 17px;
                }

                .nav-menu {
                    float: left;
                    overflow: hidden;

                    .nav-menu-button {
                        margin: 0;
                        font-size: 18px;
                        font-weight: 900;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: normal;
                        letter-spacing: normal;
                        padding: 33px 24px;
                        border: inherit;
                        background-color: inherit;
                        color: rgba(255, 255, 255, 0.6);
                        transition: 300ms ease all;
                        
                        &:hover {
                            cursor: pointer;
                        }

                        .menu-seta {
                            margin-left: 10px;
                            vertical-align: middle;
                        }

                        .menu-seta-open {
                            transform: rotate(180deg);
                        }
                    }

                    .nav-menu-content {
                        position: absolute;
                        z-index: 1;
                        display: none;
                        width: 300px;
                        overflow: hidden;
                        min-height: 300px;
                        border-radius: 4px;
                        box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);
                        background-color: #ffffff;
                        transition: 300ms ease all;

                        a {
                            float: left;
                            width: 100%;
                            text-decoration: none;
                            display: block;
                            text-align: left;
                            padding: 24px;
                            margin-bottom: -1px;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                            font-size: 18px;
                            font-weight: bold;

                            &:nth-child(1) {
                                color: #1e88e5;
                            }

                            &:nth-child(2) {
                                color: #f4771e;
                            }

                            &:nth-child(3) {
                                color: #7cb342;
                            }

                            &:nth-child(4) {
                                color: #00acc1;
                            }

                            span {
                                float: left;
                                width: 100%;
                                font-size: 14px;
                                font-weight: normal;
                                font-style: normal;
                                font-stretch: normal;
                                line-height: 1.5;
                                margin-top: 7px;
                                letter-spacing: normal;
                                color: rgba(0, 0, 0, 0.6);
                            }

                            &:hover {
                                background-color: rgba(0, 0, 0, 0.02);
                            }
                        }
                    }

                    .button-click {
                        background-color: rgba(0, 0, 0, 0.16);
                        transition: 300ms ease all;
                    }

                    .nav-click {
                        display: block;
                        transition: 300ms ease all;
                    } 
                }
            }
        }

        .header-top-right {
            float: right;
            height: 100%;
            display: flex;
            align-items: center;

            .header-right-button {
                width: 289px;
                height: 56px;
                border-radius: 4px;
                box-shadow: 0 4px 8px 0 rgba(20, 56, 102, 0.16);
                border: solid 2px #ffffff;
                font-size: 14px;
                font-weight: 900;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                background: inherit;
                letter-spacing: normal;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.94);
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    color: #1565c0;
                    background: #FFF;
                }
            }
        }
    }

    .header-bottom {
        width: 100%;
        height: 64px; 
        box-shadow: 0 1px 0 0 #e0e0e0;
        background-color: #ffffff;

        .header-bottom-menu {
            float: left;
            width: 100%;

            ul { 
                margin: 0;
                padding: 0;
                line-height: 64px;

                li {
                    list-style: none;
                    display: inline;
                    margin-right: 30px;

                    a { 
                        color: #1e88e5;
                        font-size: 12px;
                        text-decoration: none;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    @media ${device.tablet} {
        .header-top {
            display: none;
        }

        .header-bottom {
            overflow: hidden;
            height: 48px;

            .header-bottom-menu {
                overflow-x: scroll;

                ul {
                    width: 950px;
                    line-height: 47px;
                }
            }
        }
    }
`;

export const MenuMobile = styled.div`
    display: none;
    float: left;
    width: 100%;
    height: 60px;
    position: relative;

    .btn-responsivo {
        width: 25px;
        height: 25px;
        float: left;
        margin-right: 20px;
    }

    .menu-mobile-nav {
        width: 100%;
        height: 0;
        left: 0;
        top: 59px;
        overflow: hidden;
        position: absolute;
        background: #1565c0;
        transition: 300ms ease all;

        .menu-mobile-button {
            width: calc(100% - 48px);
            height: 56px;
            border-radius: 4px;
            box-shadow: 0 4px 8px 0 rgba(20, 56, 102, 0.16);
            border: solid 2px #ffffff;
            font-size: 14px;
            font-weight: 900;
            background: transparent;
            letter-spacing: normal;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.94);
            margin: 24px;
        }

        .menu-mobile-list {
            position: absolute;
            z-index: 1;
            width: 100%;
            border-radius: 4px;
            box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);

            a {
                float: left;
                width: 100%;
                text-decoration: none;
                display: block;
                text-align: left;
                padding: 24px;
                margin-bottom: -1px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                font-size: 18px;
                font-weight: 900;
                background-color: #ffffff;

                &:nth-child(1) {
                    color: #1e88e5;
                }

                &:nth-child(2) {
                    color: #f4771e;
                }

                &:nth-child(3) {
                    color: #7cb342;
                }

                &:nth-child(4) {
                    color: #00acc1;
                }

                span {
                    float: left;
                    width: 100%;
                    font-size: 14px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.5;
                    margin-top: 7px;
                    letter-spacing: normal;
                    color: rgba(0, 0, 0, 0.6);
                }

                &:hover {
                    background: #f4f4f7;
                }
            }
        }
    }

    .open-responsivo {
        height: 492px;
        transition: 300ms ease all;
    }

    .footer-menu-mobile {
        position: absolute;
        bottom: 50px;
        width: 100%;
        text-align: center;

        img {
            width: 150px
        }
    }

    .logo-menu-mobile {
        width: 150px;
        height: 55px;
        float: left;

        a {
            float: left;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
                height: 45px;
            }
        }
    }

    .btn-menu-responsivo {
        z-index: 1;
        cursor: pointer;
        width: 100%;
        margin: 0;

        p {
            color: white;
            font-size: 32px;
            margin-bottom: 5px;
            letter-spacing: 5px;
            font-family: 'undertaker_regular';
        }

        .burger {
            display: block;
            position: relative;

            span {
                position: absolute;
                left: 0;
                top: 0px;
                margin: 5px 0;
                display: block;
                height: 2px;
                width: 100%;
                background-color: white;
                transition: 300ms ease all;

                &.slice2 {
                    top: 8px;
                }

                &.slice3 {
                    top: 16px;
                }
            }

            &.open {

                .slice1 {
                    top: 10px;
                    transform: rotate(30deg);
                }
                .slice2 {
                    opacity: 0;
                }
                .slice3 {
                    top: 10px;
                    transform: rotate(-30deg);
                }
            }
        }
    }

    @media ${device.tablet} {
        display: block;

        .container {
            display: flex;
            position: relative;
            align-items: center;
        }
    }
`;