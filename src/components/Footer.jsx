import './Footer.css'; // Import the CSS for Footer component

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src="src\img\LOGO.svg" alt="Logo" />
        <p>&copy;2022 – DoctorCare. Todos os direitos reservados.</p>
      </div>
      <div className="footer-icons">
        <span><img src="src\img\instagram 1.svg" alt="Instagram" /></span>
        <span><img src="src\img\facebook 1.svg" alt="Facebook" /></span>
        <span><img src="src\img\youtube 1.svg" alt="YouTube" /></span>
      </div>
    </footer>
  );
};

export default Footer;
