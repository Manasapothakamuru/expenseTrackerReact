import {useState, useEffect} from "react";
import {query,collection, where, orderBy, onSnapshot} from "firebase/firestore";
import {db} from "../config/firebase-config";
import {useGetUserInfo} from "./useGetUserInfo";

export const useGetTransactions=()=>{
    const [transactions, setTransactions]= useState([]);
    const transactionCollectionRef=collection(db,"transactions");
    const {userID}= useGetUserInfo();
    const getTransactions =async()=>{
        let unsubcribe;
        try{
            const queryTrasactions=query(
                transactionCollectionRef,
                where("userID", "==", userID),
                orderBy("createdAt")
                );
            unsubcribe=onSnapshot(queryTrasactions,(snapshot)=>{
                let docs=[];

                snapshot.forEach((doc)=>{
                    const data=doc.data();
                    const id=doc.id;
                    docs.push({...data,id});
                });
                setTransactions(docs);
            });
        } catch(err){
            console.log(err);
        }
        return ()=>unsubcribe();
    };
    useEffect(()=>{
        getTransactions()
    },[])
    return{transactions};
};