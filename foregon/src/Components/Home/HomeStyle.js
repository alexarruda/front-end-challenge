import styled from 'styled-components';
import { device } from '../../Service/Device';

export const HomeApp = styled.section`
    float: left;
    width: 100%;
    padding-top: 70px;

    @media ${device.tablet} {
        padding: 0;
        margin-top: 35px;
    }
`;

export const HomeAll = styled.div`
    float: left;
    margin-right: 30px;
    width: calc(100% - 420px);

    @media ${device.tablet} {
        width: 100%;
        margin: 0;
    }
`;

export const HomeTop = styled.div`
    float: left;
    width: 100%;
    display: flex;
    align-items: center;

    .home-top {
        float: left;
    }

    .home-top-first {
        width: 270px;

        img {
            width: 100% ;
        }
    }

    .home-top-second {
        width: calc(100% - 270px);
        margin: 0 40px;

        .product-categorie {
            float: left;
            width: 100%;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.38);
        }

        .product-name {
            float: left;
            width: 100%;
            margin: 11px 0 15px;
            font-size: 38px;
            font-weight: 900;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.29;
            letter-spacing: normal;
            color: rgba(0, 0, 0, 0.87);
        }

        .product-infos {
            float: left;
            width: 100%; 
            
            .product-info-image {
                min-width: 10px;
                float: left;

                img {
                    margin: 0 3.5px;
                }
            }

            .product-info-date {
                float: left;
                height: 20px;
                margin-left: 7px;

                p {
                    float: left;
                    color: #1e88e5;
                    font-size: 12px;
                    text-transform: uppercase;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 20px;
                    letter-spacing: 0.3px;
                }
            }
        }
    }

    .home-top-mobile {
        display: none;
    }

    @media ${device.laptop} {
        .home-top-second {
            margin: 0 20px;

            .product-name {
                font-size: 20px;
            }
        }
    }

    @media ${device.tablet} {
        display: block;

        .home-top-first {
            display: none;
        }

        .home-top-second {
            width: 100%;
            margin: 0 0 30px;

            .product-categorie {
                text-align: center;

                img {
                    width: 35px;
                    margin-left: 5px;
                }
            }

            .product-name {
                font-size: 24px;
                text-align: center;
                margin: 15px 0;
            }

            .product-infos {
                display: flex;
                justify-content: center;
            }
        }

        .home-top-mobile {
            width: 100%;
            display: block;
            text-align: center;

            img {
                width: 240px;
            }
        }
    }
`;

export const HomeBottom = styled.div`
    float: left;
    width: 100%;
    margin-top: 45px;

    .details {
        float: left;
        width: 100%;

        .product-detail {
            float: left;
            width: 25%;
        }
    }

    .product-detail-image {
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;

        img {
            width: 100%;
        }
    }

    .product-detail-description {
        width: calc(100% - 42px);
        float: left;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.38;
        letter-spacing: normal;

        .detail-title {
            color: rgba(0, 0, 0, 0.87);
        }

        .detail-info {
            color: rgba(0, 0, 0, 0.38);
        }
    }

    @media ${device.laptop} {

        .product-detail-description {
            width: calc(100% - 42px);
            font-size: 14px;
        }
    }

    @media ${device.mobile} {
        overflow-x: scroll;

        .details {
            width: 760px;

            .product-detail {
                width: 190px;
            }
        }
    }
`;