import { useEffect } from "react";
import { Container, Row, Col, Alert, Card, Placeholder } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const companyJobs = useSelector((state) => state.jobs.company.content);
  const error = useSelector((state) => state.state.error.content);
  const loading = useSelector((state) => state.state.loading.content);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyJobsAction(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {error === "" ? (
        <Row>
          {loading === true ? (
            <>
              <Col className="my-3">
                <h1 className="display-4">Job posting for...</h1>
                <Card className="mt-3">
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
            </>
          ) : (
            <Col className="my-3">
              <h1 className="display-4">Job posting for: {params.company}</h1>
              {companyJobs.map((jobData) => (
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

export default CompanySearchResults;