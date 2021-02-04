import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import propTypes from 'prop-types';
const Profile = ({Listprof,displayName,children}) => {
    return (
<div>
  {Listprof.map((el,index)=><Card key={index} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={children} />
  <Card.Body>
    <Card.Title>{el.fullName}</Card.Title>
    <Card.Text>
      {el.bio}
    </Card.Text>
    <Card.Text>
      {el.profession}
    </Card.Text>
    <Button variant="primary" onClick={()=>displayName(el.fullName)} >show name</Button>
  </Card.Body>
</Card>)}
</div>
    )
  }
Profile.propTypes = {
  Listprof: propTypes.object,
  displayname: propTypes.func
}
Profile.defaultProps = {
  Listprof:[{fullName:"Sofien",
  bio:"Je suis Sofien Saguem, développeur web Je suis sérieux, dynamique et je m’adapte facilement dans le groupe de travail",
  profession:"Developpeur web"
}]}

export default Profile;

 

