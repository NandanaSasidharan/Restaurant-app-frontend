import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';
function ViewRest() {

const [restDetails,setRestDetails] = useState({})

//useParams-used to get path parameter from url
  //const paraId= useParams()
  //console.log(paraId.id);//object:id 3
  //destructure
  const {id} = useParams()
  console.log(id);
  //API call to get details of the particular restaurant using the path parameter
  const base_url='https://restaurant-back-end-9ra7.onrender.com/restaurants'
  const fetchRest=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }
  console.log(restDetails);
  useEffect(()=>{
    fetchRest()
  },[])
  return (
    <div>
      <Row>
        <Col>
        <img src={restDetails.photograph} alt="" style={{width:'450px',height:'500px',margin:'40px'}} />
        </Col>
        <Col>
        <div class="container my-5 p-5">
        <ListGroup as="ol" >
        <h1 className='text-center'>{restDetails.name}</h1>
      
      <ListGroup.Item as="li">Address:{restDetails.address}</ListGroup.Item>
      <ListGroup.Item as="li">Neighborhppd:{restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item as="li">cuisine type:{restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item as="li"><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item as="li"><RestReview review={restDetails.reviews}/></ListGroup.Item>
    </ListGroup>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest