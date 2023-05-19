import { useEffect, useState } from "react"

export function useUser(){
    const [responseUser, setResponesUser]= useState()
    const [totalUser, setTotalUser]= useState()

    const usuarios = responseUser
    const total = totalUser

    const API_USER="http://localhost:3000/api/users"
    useEffect(()=>{
        const fetchData= async ()=>{
            const data = await fetch(API_USER)
            const json =await data.json()
            setResponesUser(json.user)
            setTotalUser(json.meta.count)
    
        }
        fetchData()
    },[API_USER])
    return{usuarios, total}
}