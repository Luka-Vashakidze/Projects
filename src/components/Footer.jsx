import React from 'react'
import { faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='FooterisDiv'>
        <footer class="Footeri">
            <div class="MadeWith-isText">
                <p>All rights Reserved?</p>
            </div>
            
            <div class="Socialss">
            <a href="#"><FontAwesomeIcon icon={faInstagram} /> </a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /> </a>
            </div>
        </footer>
    </div>
  )
}

export default Footer