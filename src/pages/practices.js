import React from 'react';
import {Table} from 'react-bootstrap';

export const Practices = () => {
    return (
        <div className='practices'>
            <Table  striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Practices</th>
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