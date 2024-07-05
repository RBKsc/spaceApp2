import { useContext } from "react"
import { GlobalContex } from "../context/GlobalContex"

function useFotoModal(){
    const {state, dispatch}=useContext(GlobalContex)
    const abrirModal=(foto)=>{
        dispatch ({ type: 'SET_FOTO_SELECCIONADA', payload: foto })
    }

    const cerrarModal=()=>{
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: null })
    }

    const fotoSeleccionada= state.fotoSeleccionada;
    const estaAbiertoModal = state.modalAbierto;
    return { fotoSeleccionada, estaAbiertoModal, abrirModal, cerrarModal}

}

export default useFotoModal
