
import './grid.css'; 

const mainText = () => {
  return (
    <>
    <div className="textContainer">
        <p className='greenText'>SERVIÇOS</p>
        <h2>Como podemos ajudá-lo a se sentir melhor?</h2>
        </div>
{/* First grid 3 */}
 <div className="gridContainer">
    <div className="grid">
    <img src="src/img/completed.png" alt="" />    
    <h3>Problemas digestivos</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Voluptas nihil aliquid perferendis modi. Tempora quae sunt aperiam aliquid. Quaerat quos officiis quidem repudiandae praesentium porro asperiores distinctio quod!</p>

    </div>

    <div className="grid">
    <img src="src/img/completed.png" alt="" />    
        <h3>Saúde Hormonal</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Voluptas nihil aliquid perferendis modi. Tempora quae sunt aperiam aliquid. Quaerat quos officiis quidem repudiandae praesentium porro asperiores distinctio quod!</p>

    </div>

    <div className="grid">
    <img src="src/img/completed.png" alt="" />    
        <h3>Bem-estar mental</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Voluptas nihil aliquid perferendis modi. Tempora quae sunt aperiam aliquid. Quaerat quos officiis quidem repudiandae praesentium porro asperiores distinctio quod!</p>
    </div>
 </div>
{/* Second grid 3 */}
<div className="line"></div>
 <div className="gridContainer">
    <div className="grid">
    <img src="src/img/completed.png" alt="" />    
        <h3>Bem-estar mental</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Voluptas nihil aliquid perferendis modi. Tempora quae sunt aperiam aliquid. Quaerat quos officiis quidem repudiandae praesentium porro asperiores distinctio quod!</p>

    </div>

    <div className="grid">
    <img src="src/img/completed.png" alt="" />    
        <h3>Cuidados Pediátricos</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Voluptas nihil aliquid perferendis modi. Tempora quae sunt aperiam aliquid. Quaerat quos officiis quidem repudiandae praesentium porro asperiores distinctio quod!</p>

    </div>

    <div className="grid">
    <img src="src/img/completed.png" alt="" />    
        <h3>Autoimune e Inflamação</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Voluptas nihil aliquid perferendis modi. Tempora quae sunt aperiam aliquid. Quaerat quos officiis quidem repudiandae praesentium porro asperiores distinctio quod!</p>
    </div>
 </div>
    </>
  );
};

export default mainText;
