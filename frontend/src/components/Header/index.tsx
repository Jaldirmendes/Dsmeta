import logo from '../../assets/img/logo.svg'
import linkedin from '../../assets/img/linkedin-svgrepo-com-2.svg'

import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} className="dsmeta-logo-container-img" alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por:
          <a className='d-flex' href="https://www.linkedin.com/in/jaldir-mendes-92380618a/" target={'_blank'}> @jal_mendess <img className='logo-linkedin' src={linkedin} alt=""/> </a> 
        </p>
      </div>
    </header>
  );
}

export default Header;
