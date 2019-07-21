import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../index.css';
import { HeaderApp, MenuMobile } from './HeaderStyle';

import foregon from '../../Image/foregon.svg';
import seta from '../../Image/topo.svg';

export default class Header extends Component {
    state = {
        isBoxVisible: false,
        isSwitchOn: false,
    };
 
    handleClick = () => {
        this.setState(prevState => ({isBoxVisible: !prevState.isBoxVisible}));
    }

    clique = () => {
        this.setState(prevState => ({ isSwitchOn: !prevState.isSwitchOn }));
    }

    render () {
        const {isBoxVisible} = this.state;
        const {isSwitchOn} = this.state;

        return(
            <HeaderApp>
                <MenuMobile>
                    <div className='container'>
                        <div className="btn-responsivo">
                            <div className="btn-menu-responsivo">
                                <Link className={`burger ${isBoxVisible ? " open" : ""}`} onClick={this.handleClick}>
                                    <span className="slice1"></span>
                                    <span className="slice2"></span>
                                    <span className="slice3"></span>
                                </Link>
                            </div>
                        </div>
                        <div className="header-left-logo">
                            <h1><img src={foregon} alt="Foregon" /></h1>
                        </div>
                    </div>
                    <nav className={`menu-mobile-nav ${isBoxVisible ? "open-responsivo" : ""}`}>
                        <button className="menu-mobile-button">
                            Monitore seu crédito grátis
                        </button>
                        <div className="menu-mobile-list">
                            <Link to="#" onClick={this.handleClick}>
                                Cartões de crédito
                                <span>Acumule milhas, anuidade grátis...</span>
                            </Link>
                            <Link to="#" onClick={this.handleClick}>
                                Contas digitais
                                <span>Mensalidade grátis, saques grátis...</span>
                            </Link>
                            <Link to="#" onClick={this.handleClick}>
                                Máquinas de pagamento
                                <span>Aluguel, compra, com 3G, wifi...</span>
                            </Link>
                            <Link to="#" onClick={this.handleClick}>
                                Empréstimos
                                <span>Pessoal, para negativos...</span>
                            </Link>
                        </div>
                    </nav>
                </MenuMobile>
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-left">
                            <div className="header-left-logo">
                                <h1><img src={foregon} alt="Foregon" /></h1>
                            </div>
                            <nav className="header-left-menu">
                                <div className="nav-menu">
                                    <button className={`nav-menu-button ${isSwitchOn ? "button-click" : ""}`} onClick={this.clique} title="Clique e Descubra!">
                                        Cartões de crédito 
                                        <img className={`menu-seta ${isSwitchOn ? "menu-seta-open" : ""}`} src={seta} alt="Seta" />
                                    </button>
                                    <div className={`nav-menu-content ${isSwitchOn ? "nav-click" : ""}`}>
                                        <Link to="#">
                                            Cartões de crédito
                                            <span>Acumule milhas, anuidade grátis...</span>
                                        </Link>
                                        <Link to="#">
                                            Contas digitais
                                            <span>Mensalidade grátis, saques grátis...</span>
                                        </Link>
                                        <Link to="#">
                                            Máquinas de pagamento
                                            <span>Aluguel, compra, com 3G, wifi...</span>
                                        </Link>
                                        <Link to="#">
                                            Empréstimos
                                            <span>Pessoal, para negativos...</span>
                                        </Link>
                                    </div>
                                </div> 
                            </nav>
                        </div>
                        <div className="header-top-right">
                            <Link to="" className="header-right-button">
                                Monitore seu crédito grátis
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <nav className="header-bottom-menu">
                            <ul>
                                <li className="nav-li"><Link to="">Cartões para negativados</Link></li>
                                <li className="nav-li"><Link to="">Cartões sem anuidade</Link></li>
                                <li className="nav-li"><Link to="">Cartões com milhas</Link></li>
                                <li className="nav-li"><Link to="">Cartões para estudantes</Link></li>
                                <li className="nav-li"><Link to="">Cartões com mais benefícios</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </HeaderApp>
        )
    }
}