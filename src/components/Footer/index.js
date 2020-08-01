import React from 'react';
import { FooterBase } from './styles';
import imersao from '../../assets/img/imersao.svg';

function Footer() {
  return (
    <FooterBase>
      <img style={{ maxHeight: '50px', margin: '0px' }} src={imersao} alt="Logo Imersao" />
      <p>
        Made during the "Imersão React" event by
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
