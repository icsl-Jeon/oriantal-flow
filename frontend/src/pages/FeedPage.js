import React from "react";
import posts from "../posts";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Card className="m-1 p-3 rounded">
      <Card.Body style={{ height: "30vh" }}>
        <Card.Title>
          <span className="display-10">{post.title} </span> <hr></hr>
        </Card.Title>
        <Link to={`/feed/${post.id}`}>
          <Card.Img
            className="p-2"
            src={post.images}
            style={{ height: "80%", width: "80%" }}
          />
        </Link>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col className="col-8 pe-5">
            <span>
              <b>{post.author} </b>
            </span>
            <span>{post.date}</span>
          </Col>
          <Col>
            {" "}
            <span className="fas fa-star"> </span>
            {post.like}
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default function FeedPage() {
  return (
    <Row className="m-3">
      {posts.map((post) => (
        <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
          <Post post={post} />
        </Col>
      ))}
    </Row>
  );
}
