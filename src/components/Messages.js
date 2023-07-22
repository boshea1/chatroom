import React, { useEffect, useState } from 'react'
import {collection, limit, onSnapshot, orderBy, query} from 'firebase/firestore'
import { auth, db } from '../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'



const Messages = () => {
  const [messages, setMessages]= useState([])
  const [user, loading] = useAuthState(auth)

  useEffect(()=>{
    const q = query(
      collection(db, "users"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
     const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
      console.log('q',QuerySnapshot.docs.map(doc => doc.data()))
      console.log('q2',QuerySnapshot.docs.map(doc => doc.id))
      const fetchedMessages = []
      QuerySnapshot.forEach((doc)=>{
        fetchedMessages.push({...doc.data(), id: doc.id})
      })
      console.log('fetchedmessages',fetchedMessages)
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      console.log('sortedmessages',sortedMessages)
        setMessages(sortedMessages)
      // setMessages(snapshot.docs.map((doc)=>({...doc.data()})))
    } )
    return () => unsubscribe;
  }, [])
    
  return (
    <>
<div className='m-4'>
  <h1 className='mb-20 text-3xl'>Chat App</h1>

    <div className=''>
    {messages.map((item)=>
    
        <p className={`${item.displayName===user.displayName ? 'text-left':'text-right'}text-black ml-4`}>{item.message}</p>
        )}
        
        </div>
    </div>
    </>
  )
}

export default Messages