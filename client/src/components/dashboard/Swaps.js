import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  render() {
    return (
      <Table borderless>
        <thead>
          <tr>
            <th></th>
            <th>Swap</th>
            <th></th>
            <th>With</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Painting</td>
            <td></td>
            <td> <Link to={'#'} className="btn btn-outline-warning">Zoltan</Link></td>
            <td>pending</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Marketing</td>
            <td></td>
            <td> <Link to={'#'} className="btn btn-outline-warning">Machi</Link></td>
            <td>accepted</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Painting></td>
            <td></td>
            <td> <Link to={'#'} className="btn btn-outline-warning">Viktor</Link></td>
            <td>pending</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}