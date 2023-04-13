import React, { useEffect, useState } from 'react'
import axios from 'axios'


const DataFetching = () => {

    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [post,setPost]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(respone=>{
            setLoading(false)
            setPost(respone.data)

            console.log(respone)
            setError('')
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('someting went wrong!')
        })
    },[])


  return (
    <div>
        {loading ?'loading':post.title}
        {error? error:null}
    </div>
  )
}

export default DataFetching