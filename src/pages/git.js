import React from 'react';
import {Button, Card} from 'react-bootstrap';

export const Git = () => {
    return (
        <div className='git'>
            
            <Card className='card'>
                <Card.Header>Git</Card.Header>
                <Card.Body>
                    <Card.Title>Basic Git Stuff</Card.Title>
                    <Card.Text>
                    Git up-a Git-Git Down!
                    </Card.Text>
                    <Button variant="primary">Git Place</Button>
                </Card.Body>
            </Card>
    
        </div>
    );
};