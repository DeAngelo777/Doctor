import './Firstsection.css'


export function Firstsection() {

  return (
    <>
    <div className='firstSection'>
      <div className='firstContainer'>
        <div className='mainText'>
          <p>BOAS-VINDAS A DOCTORCARE 👋</p>
          <h2>Assistência médica simplificada para todos</h2>
          <p>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
          <button>Agende sua consulta</button>
        </div>
        <div className='mainFoto'>
          <img src="/image.png" alt="" />
        </div>
      </div>
      <div className="blocks"></div>
    </div>

    </>
  )
}