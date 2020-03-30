import React, {Component} from 'react';
import User from './components/User'
import './App.css';
import {Table} from 'semantic-ui-react';


const users = [{
  'id':'alilc',
  'pw':'1234',
  'name':'minho',
  'p1':'010',
  'p2':'1234',
  'p3':'5678',
  'email':'aasdflj@adfs.com'
},
{
  'id':'blilc',
  'pw':'1234',
  'name':'minho',
  'p1':'010',
  'p2':'1234',
  'p3':'5678',
  'email':'aasdflj@adfs.com'
},
{
  'id':'clilc',
  'pw':'1234',
  'name':'minho',
  'p1':'010',
  'p2':'1234',
  'p3':'5678',
  'email':'aasdflj@adfs.com'
},
]

class App extends Component {
  render() {
    return (
      <div>
       <Table>
         <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>pw</Table.HeaderCell>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>p1</Table.HeaderCell>
            <Table.HeaderCell>p2</Table.HeaderCell>
            <Table.HeaderCell>p3</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            users.map( c=> {
              return (
                <User
                  key={c.id}
                  id={c.id}
                  pw={c.pw}
                  name={c.name}
                  p1={c.p1}
                  p2={c.p2}
                  p3={c.p3}
                  email={c.email}
                />
              );
            })
          }
        </Table.Body>
       </Table>
      </div>
    );
  }
}

export default App;
