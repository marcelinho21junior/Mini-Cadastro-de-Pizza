import { useEffect, useState } from 'react'

import Menu from '../components/Menu'
import './Cadastro.css'

const API = "http://localhost:5000"

function Cadastro() {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [qtde, setQtde] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState("")

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

        setLoading(false)

        setTodos(res)
    }
    loadData()
  },[])

  const hableSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id:Math.random(),
      nome,
      preco,
      qtde,
      done:false
    }

    await fetch(API + "/todos",{
      method:"POST",
      body:JSON.stringify(todo),
      headers:{
        "Content-Type":"application/json",
      },
    })

    setTodos((prevState) => [...prevState, todo])

    console.log(todo)
    setQtde("")
    setNome("")
    setPreco("")

    const handleDelete = async (id) => {
      await fetch(API + "/todos/" + id,{
        method:"DELETE",
      })
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
      alert('clicou')
    }
  }

  return (
    <div className="cadastro">
      <Menu />
      <div className="containerPizza">

        {/* cadastro de pizza */}
        <div className="cadastroPizza">
          <form onSubmit={hableSubmit}>
            <div className="cadastroPizzaTitle">
              <h1> Cadastro de Pizza</h1>
              <button className='buttonCadastro'>Adicionar</button>
            </div>
            <div className="cadastroPizzaInputs">
              <div className="cadastroPizzaInputsAll">
                <span>Nome</span><br />
                <input
                    type="text"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome || ""}
                    required
                  />
              </div>
              <div className="cadastroPizzaInputsAll">
                <span>Preço</span><br />
                <input 
                  type="number" 
                  onChange={(e) => setPreco(e.target.value)}
                  value={preco || ""}
                  required
                />
              </div>
              <div className="cadastroPizzaInputsAll">
                <span>Qtde</span><br />
                <input 
                  type="number" 
                  onChange={(e) => setQtde(e.target.value)}
                  value={qtde || ""}
                  required
                />
              </div>
            </div>
          </form>
        </div> 

        <br />

        {/* resposta de pizza */}
        <div className="cadastroPizza">
        <table border="1">
          <tr>
              <td>Nome</td>
              <td>Preço</td>
              <td>Qtde</td>
              <td>Valorr</td>
              <td>Status</td>
          </tr>
            {todos.length === 0 ? 'Não há pizzas cadastradas!' :''}
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.nome}</td>
                <td>{todo.preco}</td>
                <td>{todo.qtde}</td>
                <td>*</td>
                <td className='buttonDelete'><button onClick={() => handleDelete(todo.id)}>X</button></td>
              </tr>
            ))}
              {/* <td>Calabresa</td>
              <td>10</td>
              <td>3</td>
              <td>30</td>
              <td>X</td> */}
      </table>
        </div>

      </div>
    </div>
  )
}

export default Cadastro
