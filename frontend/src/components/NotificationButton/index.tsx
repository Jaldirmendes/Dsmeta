import axios from 'axios';
import icon from '../../assets/img/Notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(saleId : number) {
  axios(`${BASE_URL}/api/v1/sales/${saleId}/notification`)
    .then(response => {
      console.log("sucessagem");
      
    })
}

function NotificationButton( {saleId} : Props ) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
