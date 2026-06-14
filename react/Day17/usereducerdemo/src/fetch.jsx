import React,{useState,useEffect} from "react";

export function useFetch(url){

    const [data,setData] = useState([]);

    const [loading,setLoading] = useState(true);

    console.log(loading);
   
    useEffect(()=>{
       console.log('useEffect');
        fetch(url)
        .then(response=>response.json())
        .then(result=>{

            setData(result);
            setLoading(false);
            console.log(loading);

        });


    },[url]);


    return {
        data,
        loading
    };

}
