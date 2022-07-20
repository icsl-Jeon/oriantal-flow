import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>Copyright &copy; Oriantal-flow</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;