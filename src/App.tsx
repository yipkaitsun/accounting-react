import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Expanses } from './components/expanse';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
function App() {

  const [groupList, setGroupList] = useState<Array<{ id: number, name: string }>>([])
  const [transaction, setTransaction] = useState<Array<{ user: string, description: string, date: string, amount: number }>>([])
  const [balance, setBalance] = useState<Array<{ userId: number, amount: number }>>([])
  const [group, setGroup] = useState(null);
  useEffect(() => {
    const group = [{ id: 1, name: "test1" }, { id: 2, name: "test2" }]
    const transaction = [
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },

      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },

      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },
      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 },

      { user: "test", description: "test", date: "2021-11-3 03:43:23", amount: 30 }
    ]
    const balance = [{ userId: 1, amount: 20 }, { userId: 2, amount: -10 }, { userId: 3, amount: -10 }]
    setGroupList(group);
    setTransaction(transaction)
    setBalance(balance)
    /*    axios.get('api/group').then(e => {
         setGroup(e.data);
       }) */
  }, [])
  return (
    <div style={{ margin: 80 }} >
      <Expanses param={groupList} />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>User</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map(e =>
            <tr>
              <td>{e.user}</td>
              <td>{e.description}</td>
              <td>{e.date}</td>
              <td>{e.amount}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
