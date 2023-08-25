import './principal.css';
/* import { useState, useEffect } from 'react'; */

function Principal() {

    /*TESTE 1 
    
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=30&category=19')
          .then(response => response.json())
          .then(results => setCategorias(results))
          .catch(error => console.error(error));
      }, []);  */ 
      

    /* TESTE 2 
    function teste() {
        const valores = fecth('https://opentdb.com/api.php?amount=30&category=19').then(batata => {
            batata.json().then(bacon=>{
                console.log(bacon.data)

                var btn = document.querySelector('#botao')

                btn.addEventListener('click' ,()=>{
                    var teste2 = document.querySelector('#testando')

                    teste2 = bacon.data.categoria.category
                })
            })
        }) 
        
    }
    teste() */  

    return (
        <>
            {/* TESTE 1 */}
            <div>

                <p className="nome">Lívia Soares Mansur</p>
                <p className="frase">Bom descanso e bom final de semana!</p>

                {/* <button onClick={teste()} id="botao">clique aqui</button> */}

            {/* TESTE 2 */}
                {/* <table>
                    <thead>
                        <tr>
                            <th>categoria</th>
                            <th>resposta</th>
                        </tr>
                    </thead>
                </table>

                <tbody>
                    {categorias.map(categoria2 => (
                        <td>{categoria2.category}</td>
                        
                    ))}
                </tbody> */}

            </div>

        </>
    )
}

export default Principal