import React, { useState } from 'react';
import diacritic from 'diacritic';

const LISTA_DE_ARQUIVOS = [
  {
    categoria: 'Músicas regionais',
    arquivos: [
      {
        titulo: 'Música da Amazonia',
        url: 'https://jjjdjjd',
        autor: 'Autor 1'
      },
      {
        titulo: 'Música da Bahia',
        url: 'https://jjjdjjd',
        autor: 'Autor 2'
      },
      {
        titulo: 'Música Manaus',
        autor: 'Autor 3'
      }
    ]
  },
  {
    categoria: 'Músicas de festividades',
    arquivos: [
      {
        titulo: 'Música de Carnaval',
        url: 'https://jjjdjjd',
        autor: 'Autor 4'
      },
      {
        titulo: 'Música de Festa Junina',
        url: 'https://jjjdjjd',
        autor: 'Autor 5'
      },
      {
        titulo: 'Música de Natal',
        url: 'https://jjjdjjd',
        autor: 'Autor 6'
      }
    ]
  }
]

const Pesquisar = () => {
  const [query, setQuery] = useState('');
  const [arquivos, setArquivos] = useState([]);

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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <img className='lupa list' src='/imagens/lupa.png' alt='Lupa'/>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className='pequisar'/>
        </label>
        <button type="submit"  className='buscar'>Buscar</button>
      </form>

      {arquivos.length > 0 ? (
        arquivos.map((categoria, index) => (
          <div key={index} className='audios'>
            <h2 className='categoria'>{categoria.categoria}</h2>
            <ul className='list-audio'>
            {categoria.arquivos.map((arquivo, index) => (
              <li key={index} className='li'>
                <div>
                  <a className='item title' href={arquivo.url}>{arquivo.titulo}</a>
                  <span className='author'>{arquivo.autor}</span>
                </div>
              </li>
))}
            </ul>
          </div>
        ))
     

      ) : 
        
          !!query && (<p>Nenhum resultado encontrado.</p>) 
        }
      
      
    </div>
  )

}

export default Pesquisar;

