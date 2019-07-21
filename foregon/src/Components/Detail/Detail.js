import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../index.css';
import { DetailApp } from './DetailStyle';

import cadeado from '../../Image/branco.svg';
import arrow from '../../Image/arrow.svg';
import score from '../../Image/3.svg';
import perfil1 from '../../Image/perfil1.jpg';
import perfil2 from '../../Image/perfil2.jpg';
import perfil3 from '../../Image/perfil3.jpg';

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
                        <Link to="" className="chance-button-link">
                            <img src={cadeado} alt="Icone Cadeado" />
                            Descubra suas chances
                        </Link>
                    </div>
                    <div className="chance-people">
                        <div className="chance-people-numbers">
                            <span><img src={perfil1} alt="Perfil 1" /></span>
                            <span><img src={perfil2} alt="Perfil 2" /></span>
                            <span><img src={perfil3} alt="Perfil 3" /></span>
                            <span className="people-total">+ 10 mil</span>
                        </div>
                        <div className="chance-people-text">
                            <p>Pessoas descobriram se podem ter
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
                            <p className="score-info"><strong>Médio,</strong> <Link to="">descubra seu score <span>></span></Link></p>
                        </div>
                    </div>
            </DetailApp>
        );
    }
}