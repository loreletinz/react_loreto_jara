import React from "react";
import "./loading.css";


export default function Loading({loading}){
    return(
        <>
            { loading ?
                <div class="lds-heart"><div></div></div>
                :
                <></>
            }
        </>
    )
}   
