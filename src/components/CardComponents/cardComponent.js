import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'

import './cardComponent.css';
import img from './haworthiaRetusa.jpg'

const CardComponent = ({name, value, carac}) => (
  <div className='contenedor'>
  <Card>
    <CardBody>
      <CardTitle tag="h5"> {name} </CardTitle>
      <img src={img} alt='plant-img' />
      <CardSubtitle className="mb-2 text-muted" tag="h6" > {value} </CardSubtitle>
      <CardText> {carac} </CardText>
    </CardBody>
  </Card>
</div>
)

export default CardComponent;