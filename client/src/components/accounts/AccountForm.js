import { useState, } from 'react';
import { AccountConsumer } from '../../providers/AccountProvider';

const AccountForm = ({ addAccount, }) => {
  const [account, setAccount] = useState({ title: '', amt: 0.0})

  const handleSubmit = (e) => {
    e.preventDefault()
    setAccount({ ...account, amt: parseFloat(account.amt)})
    addAccount(account)
    setAccount({ name: '', amt: 0.0})
  }

  return (
    <>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          name='title'
          value={account.title}
          onChange={(e) => setAccount({...account, title: e.target.value })}
          type="text" 
          placeholder="Name" 
          required
        />
        <label>Amount</label>
        <input
          name='amt'
          value={account.amt}
          onChange={(e) => setAccount({...account, amt: e.target.value })}
          type="number" 
          placeholder="amt" 
          required
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => <AccountForm {...props} {...value} /> }
  </AccountConsumer>
)

export default ConnectedAccountForm;