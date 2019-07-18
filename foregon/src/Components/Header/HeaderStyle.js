import styled from 'styled-components';
import { device } from '../../Service/Device';

export const HeaderApp = styled.header`
    float: left;
    width: 100%;

    .header-top {
        width: 100%;
        height: 88px;
        background-color: #1565c0;
    }

    .header-top-left {
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .header-left-logo {
        float: left;
    }

    .header-left-menu {
        overflow: hidden;
        margin-left: 24px;
    }

    .header-left-menu a {
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
    }

    .nav-menu-button {
        margin: 0;
        font-family: SFProDisplay;
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
    }

    .nav-menu-content {
        display: none;
        position: absolute;
        z-index: 1;
        width: 300px;
        min-height: 300px;
        border-radius: 4px;
        box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
    }

    .nav-menu-content a {
        float: left;
        width: 100%;
        text-decoration: none;
        display: block;
        text-align: left;
        padding: 24px;
        font-family: SFProDisplay;
        margin-bottom: -1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        font-family: SFProDisplay;
        font-size: 18px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
    }

    .nav-menu-content a:nth-child(1) {
        color: #1e88e5;
    }

    .nav-menu-content a:nth-child(2) {
        color: #f4771e;
    }

    .nav-menu-content a:nth-child(3) {
        color: #7cb342;
    }

    .nav-menu-content a:nth-child(4) {
        color: #00acc1;
    }

    .nav-menu-content a span {
        float: left;
        width: 100%;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        font-family: SFProText;
        color: rgba(0, 0, 0, 0.6);
    }

    .nav-menu:hover .nav-menu-button {
        background-color: rgba(0, 0, 0, 0.16);
    }

    .nav-menu-content a:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }

    .nav-menu:hover .nav-menu-content {
        display: block;
    } 

    .header-top-right {
        float: right;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .header-right-button {
        width: 289px;
        height: 56px;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(20, 56, 102, 0.16);
        border: solid 2px #ffffff;
        font-family: SFProText;
        font-size: 14px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        background: inherit;
        letter-spacing: normal;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.94);
    }

    .header-bottom {
        width: 100%;
        height: 64px; 
        box-shadow: 0 1px 0 0 #e0e0e0;
        background-color: #ffffff;
    }

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

    @media ${device.mobile} {
        .header-left-menu { 
            display: none;
        }

        .header-top {
            height: 60px;

            .container {
                display: flex;
                align-items: center;
            }
        }

        .header-top-left {
            margin-left: 25px;
        }

        .header-top-right {
            display: none;
        }

        .header-bottom {
            overflow: hidden;
            height: 48px;
        }

        .header-bottom-menu {
            overflow-x: scroll;

            ul {
                width: 950px;
                line-height: 47px;
            }
        }
    }
`;

export const MenuMobile = styled.div`
    display: none;
    float: left;
    position: relative;

    .btn-responsivo {
        width: 25px;
        height: 25px;
        float: left;
    }

    .menu-mobile-nav {
        width: 100%;
        height: 468px;
        z-index: 99;
        left: 0;
        top: 59px;
        position: fixed;
        background: #1565c0;
        transition: 0.5s;
        transform: translateY(calc(-100% - 60px));

        .menu-mobile-button {
            width: calc(100% - 48px);
            height: 56px;
            border-radius: 4px;
            box-shadow: 0 4px 8px 0 rgba(20, 56, 102, 0.16);
            border: solid 2px #ffffff;
            font-family: SFProText;
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
            background-color: #ffffff;

            a {
                float: left;
                width: 100%;
                text-decoration: none;
                display: block;
                text-align: left;
                padding: 24px;
                font-family: SFProDisplay;
                margin-bottom: -1px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);

                font-family: SFProDisplay;
                font-size: 18px;
                font-weight: 900;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;

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
                    letter-spacing: normal;
                    font-family: SFProText;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    .open-responsivo {
        transform: translateY(0);
        transition: 0.5s;
        z-index: 9;
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
            display: block;
            position: relative;
        }
    }
`;