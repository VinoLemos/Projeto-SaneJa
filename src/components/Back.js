import {AiOutlineImport} from 'react-icons/ai'

export default function goBack() {
    return(
        <button onClick={() => window.history.back()} className='btn-voltar'>
            <AiOutlineImport size='30px'/> Voltar
        </button>
    )
}