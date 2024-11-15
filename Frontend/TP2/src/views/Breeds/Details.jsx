import { useParams } from "react-router-dom";

function Details(){
    const { id } = useParams();

    return(
        <h1>Esta es la pag de detalles de { id }</h1>
    )
}

export default Details;