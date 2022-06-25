import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([])

  const navigate = useNavigate();

  useEffect( () => {
    axios.get('/api/accounts')
      .then( res => setAccounts(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addAccount = (account) => {
    axios.post('/api/accounts', { account })
      .then( res => setAccounts([...accounts, res.data]))
      .catch( err => console.log(err))
  }

  const updateAccount = (id, account) => {
    axios.put(`/api/accounts/${id}`, { account } )
      .then( res => {
        const newUpdatedAccounts = accounts.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setAccounts(newUpdatedAccounts)
        navigate(`/accounts`)
      })
      .catch( err => console.log(err))
  }

  const deleteAccount = (id) => {
    axios.delete(`/api/accounts/${id}`)
      .then( res => {
        setAccounts(accounts.filter( a => a.id !== id ))
        navigate('/accounts')
      })
      .catch( err => console.log(err))
  }

 return (
   <AccountContext.Provider value={{
     accounts,
     addAccount, 
     updateAccount,
     deleteAccount,
   }}>
    { children }
   </AccountContext.Provider>
  )
}

export default AccountProvider;