import { AccountConsumer } from "../../providers/AccountProvider";

const AccountList = () => (
  <AccountConsumer>
    { value => (
      <>
        { value.accounts.map( a => 
          <div>
            <section>
              <h3>
                { a.title }
              </h3>
              <p>
                ${ a.amt }
              </p>
              <button>
                Edit
              </button>
              <button>
                Delete
              </button>
            </section>
          </div>
        )}
     </>
   )}
  </AccountConsumer>
)

export default AccountList;