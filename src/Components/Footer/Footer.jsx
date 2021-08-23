import '../Footer/Footer.css';
import copy from '../../images/copy.svg';
const year = new Date().getFullYear();

const Footer = () => {
return(
    <>
    <div className="container">
    <p id="footer"><img style={{marginBottom:"3px"}} src={copy} /> Neend <span>{year}</span>. All Rights Reserved.</p>
    </div>
    </>
)
}
export default Footer;