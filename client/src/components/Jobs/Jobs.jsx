import React, { useState } from 'react';
import fetchJobs from '../../hooks/fetchJobs.jsx';
import JobListing from './JobListing.jsx';
import JobDetails from './JobDetails.jsx';
import Pagination from './Pagination.jsx';

const Jobs = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [currentJob, setCurrentJob] = useState(0);
  const { jobs, loading, error } = fetchJobs(params, page);

  return (
    <div>
      <h1>JobSite</h1>
      <Pagination page={page} setPage={setPage} />
      <div style={{ display: 'flex' }}>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        <div className='listings' style={{ flex: '50%' }}>
          {jobs &&
            jobs.map((listing, index) => {
              return (
                <JobListing
                  key={index}
                  listing={listing}
                  index={index}
                  setCurrentJob={setCurrentJob}
                />
              );
            })}
        </div>
        <div className='details' style={{ flex: '50%' }}>
          {jobs[currentJob] && <JobDetails job={jobs[currentJob]} />}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
