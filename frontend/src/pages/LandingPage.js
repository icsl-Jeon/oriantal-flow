import LandingHeader from "../components/LandingHeader";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button, Row, Col, Container } from "react-bootstrap";

function LandingPage() {
  return (
    <div>
      <LandingHeader />
      <Container className="p-1">
        <Row style={{ height: "300px" }}>
          <div
            className=" d-flex flex-column justify-content-center "
            style={{ height: "327px" }}
          >
            <div className="display-3 mb-3"> Mission block</div>
            <div className="display-5 mb-5"> Supporting message ...</div>
            <div>
              <Button variant="success"> Sign up </Button>
            </div>
          </div>
        </Row>

        <Row style={{}}>
          <CardGroup className="pe-5 ps-5">
            <Card className="card border-light">
              <Card.Body>
                <Card.Title>Touch the numbers</Card.Title>
                <Card.Text>Explore the communities</Card.Text>
              </Card.Body>
              <div className="pb-3">
                <Button variant="outline-success"> Explore </Button>
              </div>
            </Card>

            <Card className="card border-light">
              <Card.Body>
                <Card.Title>Create your own quant strategy</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <div className="pb-3">
                <Button variant="outline-success"> Make strategy </Button>
              </div>
            </Card>

            <Card className="card border-light">
              <Card.Body>
                <Card.Title>Extract insight from factful numbers</Card.Title>
                <Card.Text>
                  Analyze correlation between data and event.
                </Card.Text>
              </Card.Body>
              <div className="pb-3">
                <Button variant="outline-success"> Analyze </Button>
              </div>
            </Card>
          </CardGroup>
        </Row>

        <Row className="p-2 border mt-5">
          <Col className="border col-4 ">
            {" "}
            <Row className="display-5"> Explore </Row>{" "}
            <Row> Read the insights </Row>
          </Col>
          <Col className="border">Describing picture </Col>
        </Row>

        <Row className="p-2 border">
          <Col className="border col-4 ">
            {" "}
            <Row className="display-5"> Explore </Row>{" "}
            <Row> Read the insights </Row>
          </Col>
          <Col className="border">Describing picture </Col>
        </Row>

        <Row className="p-2 border">
          <Col className="border col-4 ">
            {" "}
            <Row className="display-5"> Explore </Row>{" "}
            <Row> Read the insights </Row>
          </Col>
          <Col className="border">Describing picture </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
