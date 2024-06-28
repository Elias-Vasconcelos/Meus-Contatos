import { useState, FormEvent } from 'react'

const CadastraTarefas = (evento: FormEvent) => {
    evento.preventDefault()

    cosnt [ userName, setuserName ] = useState('')
    cosnt [ userEmail, setuserEmail ] = useState('')
    cosnt [ userNumer, setuserNumer ] = useState(0)


}

export default CadastraTarefas