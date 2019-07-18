import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../index.css';
import { DetailApp } from './DetailStyle';

import hero from '../../Image/hero.svg';
import arrow from '../../Image/arrow.svg';
import score from '../../Image/3.svg';

export default class Detail extends Component {

    render () {
        
        return(
            <DetailApp>
                <div className="home-top-child home-top-third">
                    <div className="chance-button">
                        <div className="chance-button-balloon">
                            <img src={arrow} alt="Arrow" />
                            <p>
                                Economize tempo e <br />
                                descubra suas chances <br />
                                de aprovação
                            </p>
                        </div>
                        <img src={hero} alt="Button Chance" />
                    </div>
                    <div className="chance-people">
                        <div className="chance-people-numbers">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="people-total">10 mil</span>
                        </div>
                        <div className="chance-people-text">
                            <p>Pessoas descobriram se podem ter <br />
                                o cartão antes de solicitar.</p>
                        </div>
                    </div>
                </div>
                <div className="score">
                        <div className="score-image">
                            <img src={score} alt="Score" />
                        </div>
                        <div className="score-description">
                            <p className="score-title">Score de crédito necessário</p>
                            <p className="score-title score-title-mobile">Score necessário</p>
                            <p className="score-info"><strong>Médio,</strong> <Link to="">descubra seu score ></Link></p>
                        </div>
                    </div>
            </DetailApp>
        );
    }
}