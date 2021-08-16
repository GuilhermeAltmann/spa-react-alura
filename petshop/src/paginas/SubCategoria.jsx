import React from "react"
import ListaPost from "../components/ListaPost";
import {useParams} from "react-router-dom";

const SubCategoria = () => {
    const {id} = useParams()
    return(
        <ListaPost url={`posts?subcategoria=${id}`}/>
    )
}

export default SubCategoria