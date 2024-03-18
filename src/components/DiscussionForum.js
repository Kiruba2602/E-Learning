//Discussionforum.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function DiscussionForum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts from a backend
    const fetchedPosts = [
      { id: '1', title: 'React Hooks', content: 'What is your favorite React Hook and why?' },
      { id: '2', title: 'JavaScript ES6', content: 'Which ES6 feature do you find most useful?' },
      { id: '3', title: 'Frontend Frameworks', content: 'How do you choose a frontend framework for your project?' },
    ];

    setPosts(fetchedPosts);
  }, []);

  return (
    <Container className="mt-5">
      <h2>Discussion Forum</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card key={post.id} className="mb-3">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <Button variant="primary">Reply</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No posts to display</p>
      )}
    </Container>
  );
}

export default DiscussionForum;
