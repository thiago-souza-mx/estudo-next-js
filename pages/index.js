import { useState } from 'react';

function Home() {
  return (
    <div>
      <div>Home 3</div>
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador(params) {
    setContador(contador + 1)

  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
  
  
}
export default Home