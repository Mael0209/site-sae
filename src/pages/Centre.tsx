import {useParams} from "react-router";

export default function Centre(){
    const id:number=Number(useParams().id)

    return <h1 className={"text-center"}>Page de centre id : {id}</h1>
}