import styled from 'styled-components';
import { device } from '../../Service/Device';

export const DetailApp = styled.div`
    float: left;
    width: 390px;

    .home-top-third {
        float: left;
        width: 100%;
        margin-top: 42px;
        margin-bottom: 37px;
    }

    .chance-button {
        float: left;
        width: 100%;
        position: relative;
    }

    .chance-button img {
        width: 100%;
    }

    .chance-button-balloon {
        width: 220px;
        position: absolute;
        top: -80px;
        right: 0;
    }

    .chance-button-balloon img {
        float: left;
        width: 46px;
        height: 48px;
        margin-top: 25px;
        margin-right: 15px;
        object-fit: contain;
    }

    .chance-button-balloon p {
        font-family: SFProText;
        font-size: 14px;
        font-weight: normal;
        font-style: italic;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #f4511e;
    }

    .chance-people {
        float: left;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .chance-people-numbers {
        float: left;
    }

    .chance-people-numbers span {
        float: left;
        min-width: 24px;
        height: 24px;
        margin-left: -7px;
        border-radius: 50px;
        border: solid 2px #ffffff;
        background: rgba(0, 0, 0, 0.16);
    }

    .chance-people-numbers span:first-of-type {
        margin-left: 0;
    }

    .chance-people-numbers span.people-total {
        padding: 0 10px;
        line-height: 22px;
        font-family: SFProText;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
    }

    .chance-people-text {
        float: left;
        margin-left: 15px; 
    }

    .chance-people-text p {
        float: left;
        font-family: SFProText;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: rgba(0, 0, 0, 0.6);
    }

    .score {
        float: left;
        width: 100%;
        height: 82px;
        padding: 13px 24px;
        border-radius: 4px;
        border: solid 2px #f4f4f7;
        display: flex;
        align-items: center;
    }

    .score-image {
        float: left;
        width: 56px;
        height: 56px;
        margin-right: 24px;
    }

    .score-description {
        float: left;
    }

    .score-title {
        font-family: SFProText;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.38);
    }

    .score-title-mobile {
        display: none;
    }

    .score-info {
        font-family: SFProText;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: normal;
    }

    .score-info strong {
        color: rgba(0, 0, 0, 0.6);
    }

    .score-info a {
        color: #1e88e5;
        text-decoration: none;
        letter-spacing: 1px;
    }

    @media ${device.mobile} {
        width: 100%;

        .chance-button-balloon {
            display: none;
        }

        .chance-people {

            .chance-people-numbers {
                width: 50%;
            }

            .chance-people-text {
                width: 50%;
                margin-left: 0;
                padding-left: 10px;
            }
        }

        .score-description {

            .score-title {
                display: none;
            }

            .score-title-mobile {
                display: block;
            }
        }
    }
`;