import React from 'react';
import {Button, Card} from 'react-bootstrap';

//Basic Python
export const Python = () => {
    return (
        <div className='python'>
            
            <Card className='card'>
                <Card.Header>Python</Card.Header>
                <Card.Body>
                    <Card.Title>Basic Python Stuff</Card.Title>
                    <Card.Text>
                    Python was invented by Hulk Hogan
                    </Card.Text>
                    <Button variant="primary">Yeeeaah Brother!!</Button>
                </Card.Body>
            </Card>
    
        </div>
    );
};

//Python FUNCTIONS
export const Functions = () => {
    return (
        <div className='python'>
            <Card className='card'>
                    <Card.Header>Python Functions</Card.Header>
                    <Card.Body>
                        <Card.Title>Basic Python Functions</Card.Title>
                        <Card.Text>
                        Python has functions too
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>
    );
};