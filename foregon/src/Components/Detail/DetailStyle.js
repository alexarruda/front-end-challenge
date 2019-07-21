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
        font-size: 14px;
        font-weight: normal;
        font-style: italic;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #f4511e;
    }

    .chance-button-link {
        width: 100%;
        height: 62px;
        line-height: 62px;
        float: left;
        opacity: .9;
        border-radius: 4px;
        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.16);
        background-image: linear-gradient(to right, #9ccc65, #43a047);
        font-size: 14px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        text-align: center;
        color: #ffffff;
        margin-bottom: 15px;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-right: 40px;

        img {
            width: 24px;
            margin-left: -10px;
        }
        
        &:hover {
            opacity: 1;
        }

        &:active {
            box-shadow: none;
            transform: translateY(2px);
        }
    }

    .chance-people {
        float: left;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .chance-people-numbers {
        float: left;
        width: 250px;

        span {
            float: left;
            width: 26px;
            height: 26px;
            margin-left: -7px;
            border-radius: 50px;
            border: solid 2px #ffffff;
            background: #DDD;
            overflow: hidden;

            img {
                width: 100%;
            }

            &:first-of-type {
                margin-left: 0;
            }

            &.people-total {
                width: 70px;
                padding: 0 10px 0 5px;
                line-height: 24px;
                font-size: 12px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                letter-spacing: normal;
                text-align: center;
                color: rgba(0, 0, 0, 0.6);
            }
        }
    }

    .chance-people-text {
        float: left;
        margin-left: 15px; 
    
        p {
            float: left;
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: rgba(0, 0, 0, 0.6);
        }
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
    

        .score-image {
            float: left;
            width: 56px;
            height: 56px;
            margin-right: 24px;
        }

        .score-description {
            float: left;

            .score-title {
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
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.44;
                letter-spacing: normal;

                strong {
                    color: rgba(0, 0, 0, 0.6);
                }

                a {
                    color: #1e88e5;
                    text-decoration: none;
                    letter-spacing: 1px;
                }
            }
        }
    }

    @media ${device.tablet} {
        width: 100%;

        .chance-button-balloon {
            display: none;
        }

        .chance-people {

            .chance-people-numbers {
                width: 50%;
                padding-right: 10px;
            }

            .chance-people-text {
                width: 50%;
                margin-left: 0;
            }
        }

        .score {
            padding: 13px;

            .score-image {
                margin-right: 15px;
            }

            .score-description {

                .score-title {
                    display: none;
                }

                .score-title-mobile {
                    display: block;
                }

                .score-info {

                    span {
                        display: none;
                    }
                }
            }
        }
    }
`;