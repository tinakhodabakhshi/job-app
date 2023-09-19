import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Placeholder, Card } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions/index";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.jobs.searched.content);
  const error = useSelector((state) => state.state.error.content);
  const loading = useSelector((state) => state.state.loading.content);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      {error === "" ? (
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <div className="d-flex justfy-content-between align-items-center">
              <Form className="flex-grow-1 me-2" onSubmit={handleSubmit} required>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="type and press Enter"
                  required
                />
              </Form>
              <Link to="/favourite">
                <Button variant="info">Favourite</Button>
              </Link>
            </div>
          </Col>
          {loading === true ? (
            [...Array(3).keys()].map((el) => (
              <Col xs={10} className="mx-auto mt-3" key={el}>
                <Card>
                  <Card.Body className="d-flex align-items-center justify-content-between p-3">
                    <Placeholder as={Card.Text} animation="glow" className="w-100 mb-0">
                      <Placeholder xs={3} bg="primary" className="me-5" />
                      <Placeholder xs={3} bg="primary" />
                    </Placeholder>
                    <Placeholder.Button
                      variant="dark"
                      xs={1}
                      className="p-0"
                      style={{ width: "16px", height: "16px", marginRight: "12px" }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={10} className="mx-auto mb-5">
              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          )}
        </Row>
      ) : (
        <Row>
          <Col className="mt-5">
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MainSearch;