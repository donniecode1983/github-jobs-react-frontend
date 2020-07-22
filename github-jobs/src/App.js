import React from 'react';
import useFetchJobs from './useFetchJobs';
import {Container, Row, Col} from 'react-bootstrap';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const {jobs, loading, error} = useFetchJobs()
  return (
      <Container>
          <Row>
              <Col>
                  {loading && <h1>Loading...</h1>}
                  {error && <h1>Error, Try Refreshing</h1>}
                  <h1>{jobs.length}</h1>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
