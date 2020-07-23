import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import {Container, Row, Col} from 'react-bootstrap';
import Job from './Job'

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
  const {jobs, loading, error} = useFetchJobs(params, page)
  return (
      <Container>
          <Row>
              <Col>
                  {loading && <h1>Loading...</h1>}
                  {error && <h1>Error, Try Refreshing</h1>}
                  {jobs.map(job => {
                      return <Job key={job.id} job={job} />
                  })}
              </Col>
          </Row>
      </Container>
  );
}

export default App;
