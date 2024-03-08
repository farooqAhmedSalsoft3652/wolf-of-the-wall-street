import Card from 'react-bootstrap/Card';


import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import SiteButton from '../../../../../Components/Button/button';
import { useNavigate } from 'react-router';

const SubscriptionCard = ({data}) => {
  const navigate =  useNavigate();
// console.log(data)
  // console.log(props , "Data")
  // const { packageName, onClick } = props.data;

  return (
    <Card className='packages-card'>
        <Card.Header className='bg-transparent p-0 border-0'>
          <div className="package-name">{data.packageName}</div>  
          <div class="price mt-3">
            <h3>${data.packagePrice}<span>/per month</span></h3>
          </div>
        </Card.Header>
        <Card.Body className='position-relative px-0'>  
        <Card.Text>{data.packageDetail}</Card.Text>
          {data?.packageFeatures && (
            <ul className='package-feature m-0 p-0'>
            {data?.packageFeatures.map((item, index) => (
              <li key={index} className='mb-2'>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faSquareCheck} className='me-2' />{item.item}
                </div>
              </li>
            ))}
            </ul>
          )}
        </Card.Body>
        <Card.Footer className="bg-transparent p-0 border-0">
          <SiteButton className="w-100" onClick={()=>navigate(`/subscription-plans/details/${data.id}`)}>Purchase</SiteButton>
        </Card.Footer>
    </Card>
  )
}

export default SubscriptionCard