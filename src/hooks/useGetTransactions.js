import {useState, useEffect} from "react";
import {query,collection} from "firebase/firestore";
import {db} from "../config/firebase-config";

export const useGetTransactions=()=>{
    const [transactions, setTransactions]= useState([]);
    const transactionCollectionRef=collection(db,"transactions");
    const getTransactions =async()=>{
        try{
            const queryTrasactions=query(transactionCollectionRef)
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getTransactions()
    },[])
    return{transactions};
};