import ListaArquivos from "../ListaArquivos";
import "./home.css";
const Home = () => {
    return (
        <div className="home">
        <div className='lupa'>
            <h2 className='barra-de-busca'>Pesquise aqui</h2>
            <ListaArquivos/>
        </div>
        
      </div>
    )
}

export default Home;