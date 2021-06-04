import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/events')
            .then(res => {
                this.setState({ Event: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.eventCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>name</td>
                                <td>address</td>
                                <td>date</td>
                                <td>date</td>
                                <td>time</td>
                                <td>description</td>
                                <td>attendees</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}