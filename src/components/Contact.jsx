
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Entre em contato com a gente!</h2>
        <p><img src="src\img\loc.svg" alt="loc" /> R. Amauri Souza, 346</p>
        <p><img src="src\img\mail.svg" alt="mail" /> contato@doctorcare.com</p>
        <button className="schedule-button">
          Agende sua consulta
        </button>
      </div>
      <div className="contact-image">
        <img src="src\img\contacts.png" alt="Contact Person" />
      </div>
    </div>
  );
};

export default Contact;
