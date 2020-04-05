import React,{ Component }from 'react';
import { Table } from 'semantic-ui-react';

class User extends Component{
  render() {
    return(
      <Table.Row>
        <Table.Cell>{this.props.id}</Table.Cell>
        <Table.Cell>{this.props.pw}</Table.Cell>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.p1}</Table.Cell>
        <Table.Cell>{this.props.p2}</Table.Cell>
        <Table.Cell>{this.props.p3}</Table.Cell>
        <Table.Cell>{this.props.email}</Table.Cell>
      </Table.Row>
    )
  }
}

export default User;
