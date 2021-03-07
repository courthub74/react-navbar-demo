import React from 'react';
import {Table} from 'react-bootstrap';

export const Deliverables = () => {
    return (
        <div className='delivs'>
            <Table  striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Deliverables</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <th>First Thing to do</th>
                </tr>
            </tbody>
            </Table>
        </div>
    );
};