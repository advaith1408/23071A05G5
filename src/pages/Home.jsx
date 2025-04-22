// src/pages/Home.js
import { useState } from 'react';

const Home = () => {
  const [cgpa, setCgpa] = useState('');
  const [backlogs, setBacklogs] = useState('');
  const [attendance, setAttendance] = useState('');
  const [result, setResult] = useState('');

  const checkEligibility = (e) => {
    e.preventDefault();

    if (parseFloat(cgpa) >= 6.0 && parseInt(backlogs) === 0 && parseInt(attendance) >= 75) {
      setResult('congratulation!!! You are eligible for placements!');
    } else {
      setResult('Sorry, You are not eligible for placements.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Placement Eligibility Checker</h1>
      <form onSubmit={checkEligibility}>
        <div>
          <label>CGPA: </label>
          <input type="number" value={cgpa} onChange={(e) => setCgpa(e.target.value)} step="0.1" required />
        </div>
        <div>
          <label>Number of Backlogs: </label>
          <input type="number" value={backlogs} onChange={(e) => setBacklogs(e.target.value)} required />
        </div>
        <div>
          <label>Attendance (%): </label>
          <input type="number" value={attendance} onChange={(e) => setAttendance(e.target.value)} required />
        </div>
        <button type="submit">Check Eligibility</button>
      </form>

      {result && <h3 style={{ marginTop: '20px' }}>{result}</h3>}
    </div>
  );
};

export default Home;
