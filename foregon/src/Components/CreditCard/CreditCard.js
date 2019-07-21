import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../index.css';
import { CreditCardApp } from './CreditCardStyle';

export default class CreditCard extends Component {
    render () {
        return(
            <CreditCardApp>
                <div className="container">
                    <div className="card-all">
                        <div className="card-content">
                            <header>
                                <div className='card-content-description'>  
                                    <h2>Cartão sem Anuidade</h2>
                                    <h3>Inúmeras vantagens, facilidades e você pode ficar livre de anuidade.</h3>
                                </div>
                            </header>
                            <footer>
                                <p>Santander</p>
                                <Link to="">Abrir</Link>
                            </footer>
                        </div>
                    </div>
                </div>
            </CreditCardApp>
        );
    }
}