import React, { Component } from 'react';
import api from '../../Service/Api';

import '../../index.css';
import { HomeApp, HomeAll, HomeTop, HomeBottom } from './HomeStyle';

import Detail from '../Detail/Detail';

import visa from '../../Image/visa.svg';
import star from '../../Image/inteira.svg';
import milhas from '../../Image/milhas.svg';
import app from '../../Image/app.svg';
import info from '../../Image/info.svg';

export default class Home extends Component {
    state = {
        dadosCartao: [],
    };

    async componentDidMount() {
        const response = await api.get();
        this.setState({ dadosCartao: response.data });
    }

    AverageScore() {
        let numStar = this.state.dadosCartao.rating ? this.state.dadosCartao.rating.average_score : "";
        let scores = [];
        for (let i = 0; i < numStar; i++) {
            scores.push(<img src={star} alt='Star' />);
        }
        return <div className="product-info-image">{scores}</div>;
    }

    render () {

        return(
            <HomeApp>
                <div className="container">
                    <HomeAll>
                        <HomeTop>
                            <div className="home-top-child home-top-first">
                                <img src={this.state.dadosCartao.imageUrl} alt={this.state.dadosCartao.name} />
                            </div>
                            <div className="home-top-child home-top-second">
                                <p className="product-categorie">Cartão de crédito <img src={visa} alt="Visa" /></p>
                                <h2 className="product-name">{this.state.dadosCartao.name}</h2>
                                <div className="product-infos">
                                    {this.AverageScore()}
                                    <div className="product-info-date">
                                        <p>{ this.state.dadosCartao.rating ? this.state.dadosCartao.rating.total_reviews : "" } Avaliações</p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-top-child home-top-first home-top-mobile">
                                <img src={this.state.dadosCartao.imageUrl} alt={this.state.dadosCartao.name} />
                            </div>
                        </HomeTop>
                        <HomeBottom>
                            <div className="details">
                                    <div className="product-detail">
                                        <div className="product-detail-image">
                                            <img src={info} alt="Info" />
                                        </div>
                                        <div className="product-detail-description">
                                            <p className="detail-title">Anuidade</p>
                                            <p className="detail-info">{ this.state.dadosCartao.firstAnnuity ? this.state.dadosCartao.firstAnnuity.textFormatted : "" }</p>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="product-detail-image">
                                            <img src={info} alt="Info" />   
                                        </div>
                                        <div className="product-detail-description">
                                            <p className="detail-title">Renda mínima</p>
                                            <p className="detail-info">R$ { this.state.dadosCartao.valueOfMinimalIncomeRequired }</p>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="product-detail-image">
                                            <img src={app} alt="App" />
                                        </div>
                                        <div className="product-detail-description">
                                            <p className="detail-title">Aplicativo</p>
                                            <p className="detail-info">para controlar seus gastos</p>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="product-detail-image">
                                            <img src={milhas} alt="Milhas" />
                                        </div>
                                        <div className="product-detail-description">
                                            <p className="detail-title">Milhas áreas</p>
                                            <p className="detail-info">pelo programa Smiles</p>
                                        </div>
                                    </div>
                            </div>
                        </HomeBottom>
                    </HomeAll>
                    <Detail />
                </div>
            </HomeApp>
        );
    }
}