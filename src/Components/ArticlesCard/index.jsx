import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import SiteButton from '../../Components/Button/button';
import { useNavigate } from 'react-router';
import { images } from '../../assets';
import { faEye, faHeart, faMessage, faShare, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ArticlesCard = ({data, to}) => {
  const navigate =  useNavigate();
// console.log(data)
  // console.log(props , "Data")
  // const { packageName, onClick } = props.data;

  return (
    <Card className='article-card'>
        <Card.Header className='bg-transparent p-0'>
          <Card.Img variant="top" src={data.articleImage} alt='' />
          <div class="author d-flex mt-4 mb-3">
            <img class="allign-self-start" src={data.authorImage} alt="" />
              <div class="author-body align-self-center ms-2">
                <h6 class="mb-0 text-white fw-semibold">{data.authorName}</h6>
              </div>
          </div>
          <div className="d-flex align-items-center pt-2 pb-3 justify-content-between gap-2">
              <button  className="transparent-btn total-reactions d-flex align-items-center">
                  <span className="like-icon text-white"><FontAwesomeIcon icon={faThumbsUp} /></span>
                  <span className="love-icon text-white"><FontAwesomeIcon icon={faThumbsDown} /></span>
                  <span className="ms-2 text-white count">{window.screen.width > "575" ? `${data.reactions[0].name} and ${data.reactions.length - 1} others` : data.reactions.length}</span>
              </button>
              <div className="d-flex align-items-center share-like-btns">
                  <button className="transparent-btn text-white"><FontAwesomeIcon icon={faMessage} /> {data.comments.length}</button>
                  <button className="transparent-btn text-white ms-1"><FontAwesomeIcon icon={faShare} /> {data.shares.length}</button>
              </div>
          </div>
        </Card.Header>
        <Card.Body className='position-relative px-0'> 
          <div className="view-count">
            <FontAwesomeIcon icon={faEye} className='me-1' />23 veiws
          </div>
          <h3 className='fw-semibiold text-white title py-2 mb-1'> {data.title}</h3> 
          {data?.category &&(
            <h5 className='fw-semibold category-name mb-2'>{data.category}</h5>
          )}
          {data?.articleText &&(
          <Card.Text>{data.articleText}</Card.Text>
          )}
        </Card.Body>
        <Card.Footer className="bg-transparent p-0 border-0 my-2">
          <Link className="w-100 fw-light site-btn" to={to}>Read More</Link>
        </Card.Footer>
    </Card>
  )
}

export default ArticlesCard