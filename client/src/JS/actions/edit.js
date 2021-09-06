import { TOGGLE_FALSE,TOGGLE_TRUE} from "../constantes/edit"

export const toggleTrue =() =>{
    return {
        type:TOGGLE_TRUE
    }
}
export const toggleFalse=()=>{
    return {
        type:TOGGLE_FALSE
    }
};