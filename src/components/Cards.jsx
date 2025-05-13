import './Cards.css'
import carro from '../assets/carroesportivo.jpg'
import bike from '../assets/motoesportiva.jpeg'
import moto from '../assets/bikeesportiva.jpg'
function Cards() {
    return (
        <>
            <div className='cards'>
                <h1>Carro</h1>
                <img src={carro} alt="" />
                <p>Carro esportivo e as peças com valores bem acessiveis</p>
                <button className='button'>Comprar</button>
            </div>

            <div className='cards'>
                <h1>Moto</h1>
                <img src={moto} alt="" />
                <p>Moto esportiva e as peças com valores bem acessiveis</p>
                <button className='button'>Comprar</button>
            </div>

            <div className='cards'>
                <h1>Bike</h1>
                <img src={bike} alt="" />
                <p>Bike esportiva e as peças com valores bem acessiveis</p>
                <button className='button'>Comprar</button>
            </div>
        </>
    );
}
export default Cards
