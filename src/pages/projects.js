import React from 'react';
import {Table} from 'react-bootstrap';

export const Projects = () => {
    return (
        <div className='projects'>
            <Table  striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Projects</th>
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