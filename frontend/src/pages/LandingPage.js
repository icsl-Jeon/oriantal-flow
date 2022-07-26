import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button, Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
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
          <Card className="card border-light rounded me-2">
            <Card.Body>
              <Card.Title>Touch the numbers</Card.Title>
              <Card.Text>Explore the communities</Card.Text>
            </Card.Body>
            <div className="pb-3">
              <Link to="/feed">
                <Button variant="outline-success"> Explore </Button>
              </Link>
            </div>
          </Card>

          <Card className="card border-light rounded">
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

          <Card className="card border-light rounded ms-2">
            <Card.Body>
              <Card.Title>Extract insight from factful numbers</Card.Title>
              <Card.Text>Analyze correlation between data and event.</Card.Text>
            </Card.Body>
            <div className="pb-3">
              <Button variant="outline-success"> Analyze </Button>
            </div>
          </Card>
        </CardGroup>
      </Row>

      <Row className="p-2  mt-5">
        <Col className=" col-4 ">
          {" "}
          <Row className="display-5"> Explore </Row>{" "}
          <Row> Read the insights </Row>
        </Col>
        <Col className="">
          {" "}
          <Image
            src="images/board_diagram.png"
            style={{ width: "80%" }}
          ></Image>{" "}
        </Col>
      </Row>
      <hr></hr>
      <Row className="p-2 ">
        <Col className=" col-4 ">
          {" "}
          <Row className="display-5"> Explore </Row>{" "}
          <Row> Read the insights </Row>
        </Col>
        <Col className="">
          {" "}
          <Image
            src="images/board_diagram.png"
            style={{ width: "80%" }}
          ></Image>{" "}
        </Col>
      </Row>
      <hr></hr>

      <Row className="p-2 ">
        <Col className=" col-4 ">
          {" "}
          <Row className="display-5"> Explore </Row>{" "}
          <Row> Read the insights </Row>
        </Col>
        <Col className="">
          {" "}
          <Image
            src="images/board_diagram.png"
            style={{ width: "80%" }}
          ></Image>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
