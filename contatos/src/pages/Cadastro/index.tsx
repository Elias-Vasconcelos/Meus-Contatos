import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/filtro'
import CadastraContato from '../../container/CadastraContato/index'
import { FormEvent } from 'react'

const Formulario = () => {
  const navigate = useNavigate()

  const Prevent = (evento: FormEvent) => {
    evento.preventDefault()
    navigate('/')
  }
  return (
    <>
      <div
        style={{
          width: 1080,
          height: 30,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <FiltroCard
          Font="../../imgs/IconsFiltro/back.png"
          Descricao="Voltar para Home"
          onClick={Prevent}
        />
      </div>
      <CadastraContato />
    </>
  )
}

export default Formulario
