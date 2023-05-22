import React, { useState } from 'react';
import diacritic from 'diacritic';

const LISTA_DE_ARQUIVOS = [
  {
    //categoria: 'Bibliteconomia',
    arquivos: [
      { 

        titulo: 'Bibliotecas e Hibridez',
        url: 'https://bit.ly/3Mtrqvg',
        autor: ''
      },
       {
        titulo: 'Trabalho democracia e participação no Brasil',
        url: 'https://bit.ly/3q4O8mg',
        autor: 'Neves, Angela Vieira; Ghiraldelli, Reginaldo'
       }
    ]
  }
]


const ListaArquivos = ({ showAll }) => {
  const [query, setQuery] = useState('');
  let [arquivos, setArquivos] = useState(LISTA_DE_ARQUIVOS);

  const handleSubmit = event => {
    event.preventDefault();
    const palavrasChave = query.split(' ');
    const arquivosFiltrados = LISTA_DE_ARQUIVOS.reduce((acumulador, categoria) => {
      const arquivosDaCategoriaFiltrados = categoria.arquivos.filter(arquivo => {
        return palavrasChave.every(palavra => {
          const regex = new RegExp(palavra.replace(/[^\w\s]/gi, '').split('').join('.*'), 'i');
          return regex.test(diacritic.clean(arquivo.titulo));
        });
      });

      if (arquivosDaCategoriaFiltrados.length > 0) {
        const categoriaFiltrada = { categoria: categoria.categoria, arquivos: arquivosDaCategoriaFiltrados };
        return [...acumulador, categoriaFiltrada];
      }

      return acumulador;
    }, []);
    setArquivos(arquivosFiltrados);
  };

  return (
    <div id='lupa'>
      <form onSubmit={handleSubmit}>
        <label>
          <img className='lupa list' src='/imagens/lupa.png' alt='Lupa'/>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className='pequisar'
          />
        </label>
        <button type="submit" className='buscar'>Buscar</button>
      </form>

      {arquivos.length > 0 ? (
        arquivos.map((categoria, index) => (
          <div key={index} className='arquivo'>
            <div className='categoria'>{categoria.categoria}</div>
            <ul className='list-arquivo'>
            {categoria.arquivos.map((arquivo, index) => (
              <li key={index} className='li'>
                <div>
                  <a className='link' href={arquivo.url} alt="Link">Baixar</a>
                  <p className='title'>{arquivo.titulo}</p>
                  <span className='autor'>{arquivo.autor}</span>
                </div>
              </li>
            ))}
            </ul>
          </div>
        ))
     

      ) : (
       

        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  )

}

export default ListaArquivos;
