import React from 'react';
import {Button, Card} from 'react-bootstrap';


//JS Main Page
export const Javascript = () => {
    return (
        <div className='javascript'>
            {/* <h1>JS Basics Here:</h1> */}
            <Card className='card'>
                <Card.Header>JavaScript</Card.Header>
                <Card.Body>
                    <Card.Title>Basic JavaScript Stuff</Card.Title>
                    <Card.Text>
                    JavaScript was invented by the JavaScript man
                    </Card.Text>
                    <Button variant="primary">JavaScript Place</Button>
                </Card.Body>
            </Card>
        </div>
    );
};


//JS Basics
export const Jsbasic = () => {
    return (
        <div className='javascript'>
            {/* <h1>JS Basics Here:</h1> */}
            <Card className='card'>
                <Card.Header>JS Basics</Card.Header>
                <Card.Body>
                    <Card.Title>Basic JavaScript Stuff</Card.Title>
                    <Card.Text>
                    JavaScript JavaScript JavaScript
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};