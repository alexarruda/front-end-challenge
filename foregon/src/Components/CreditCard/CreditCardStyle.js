import styled from 'styled-components';
import { device } from '../../Service/Device';

export const CreditCardApp = styled.section`
    float: left;
    width: 100%;

    .card-all {
        float: left;
        width: 100%;
        height: 247px;
        margin: 60px 0 100px;
        border-radius: 4px;
        background: #fafafa;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .card-content {
        width: 948px;
        height: 199px;
        font-family: Roboto;
        border-radius: 6px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);
        border: solid 1px #ededed;

        header {
            background: #FFF;
            width: 100%;
            height: calc(100% - 60px);

            .card-content-description {
                height: 100%;
                width: 100%;
                padding: 30px 50px;

                h2 {
                    margin-bottom: 15px;
                    font-size: 33px;
                    font-weight: bold;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    color: #37474f;
                }

                h3 {
                    font-size: 18px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    color: #888888;
                }
            }
        }

        footer {
            height: 60px;
            width: 100%;
            display: flex;
            padding: 0 50px;
            background: #EEE;
            align-items: center;
            justify-content: space-between;

            p {
                font-size: 13px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #646464;
            }

            a {
                width: 211px;
                height: 33px;
                border-radius: 3px;
                background-color: #0053f9;
                font-size: 15px;
                font-weight: bold;
                line-height: 33px;
                text-align: center;
                color: #ffffff;
                text-transform: uppercase;
                text-decoration: none;
            }
        }
    }

    @media ${device.mobile} {
        
        .card-all {
            height: auto;
            background: transparent;
        }

        .card-content {
            width: 100%;
            height: auto;

            header {
                height: auto;

                .card-content-description {
                    padding: 30px 20px 60px;

                    h2 {
                        font-size: 30px;
                    }
                }
            }

            footer {
                padding: 0 20px;

                a {
                    width: 155px;
                }
            }
        }
    }
`;