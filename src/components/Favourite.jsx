import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const Favourite = () => {
  const favouritePositions = useSelector((state) => state.favourite.content);
  return (
    <Container>
      {favouritePositions.length !== 0 ? (
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Your Favourite positions</h1>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {favouritePositions.map((position) => (
              <Job key={position._id} data={position} />
            ))}
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Your Favourite positions</h1>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            <h2>You don't have a favourite position.</h2>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Favourite;
