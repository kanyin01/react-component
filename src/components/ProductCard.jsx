import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" />
      <Card.Body>
        <Card.Title>Laptop Computer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;