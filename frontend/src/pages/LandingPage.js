import LandingHeader from "../components/LandingHeader";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Button, Row} from "react-bootstrap";

function LandingPage() {
    return (
        <div>
            <LandingHeader/>
            <main className="p-3">
                <Row style={{height: "300px"}}>
                    <div className=" d-flex flex-column justify-content-center " style={{height: "327px"}}>
                        <div className="display-3 mb-3"> Mission block</div>
                        <div className="display-5 mb-5"> Supporting message ...</div>
                        <div>
                                <Button variant="success"> Sign up </Button>
                        </div>
                    </div>

                </Row>

                <Row style={{height: "300px"}}>
                    <CardGroup className="pe-5 ps-5">
                        <Card>
                            <Card.Body>
                                <Card.Title>Touch the numbers</Card.Title>
                                <Card.Text>
                                    Explore the communities
                                </Card.Text>
                            </Card.Body>
                            <div className="pb-3">
                                <Button variant="outline-success"> Explore </Button>
                            </div>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Create your own quant strategy</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <divc className="pb-3">
                                <Button variant="outline-success"> Make strategy </Button>
                            </divc>
                        </Card>

                        <Card>
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

            </main>
        </div>

    );
}

export default LandingPage;