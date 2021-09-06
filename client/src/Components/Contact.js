import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteContact, getContact } from '../JS/actions/Contact';
import {Link} from 'react-router-dom';
import { toggleTrue } from '../JS/actions/edit';

const Contact=({contact})=> {
    const dispatch = useDispatch();
    return(
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
          Phone:<strong>{contact.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to={`/edit/${contact._id}`}>
          <Button inverted color='green' 
          onClick={()=> {
              dispatch(getContact(contact._id));
              dispatch(toggleTrue())}
          }
          >
            Edit
          </Button></Link>
          <Button inverted color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    
);
};

export default Contact
