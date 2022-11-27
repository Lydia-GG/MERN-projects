import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import signupImage from '../../assets/bot.jpeg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const validateImg = (e) => {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert('Max size is 1048575');
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

    try {
      setUploadingImage(true);
      let res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_USER}/image/upload`,
        {
          method: 'POST',
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url;
    } catch (error) {
      setUploadingImage(false);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      return alert('Please upload your photo');
    }
    const url = await uploadImage(image);
    console.log(url);
  };

  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex flex-direction-column align-items-center justify-content-center "
        >
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center">Create Account</h1>
            <div className="signup-container">
              <img src={imagePreview || signupImage} className="signup-image" />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>

              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create account
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup-background"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
