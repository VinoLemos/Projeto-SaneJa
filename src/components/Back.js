import {AiOutlineImport} from 'react-icons/ai'

export default function goBack() {
    return(
        <button onClick={() => window.history.back()} className='botao-voltar'>
            <AiOutlineImport/> Voltar
        </button>
    )
}