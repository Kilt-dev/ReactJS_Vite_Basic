import React, { useState } from 'react';
import './FromStudent.css'; // Import CSS file

export default function FromStudent({ onSubmit }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [bestSubjects, setBestSubjects] = useState([]);
  const [url, setUrl] = useState('');
  const [about, setAbout] = useState('');
  const [file, setFile] = useState(null); // Added state for file upload

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      lastName,
      email,
      contact,
      gender,
      bestSubjects,
      url,
      about,
      file,
    });
  };

  const handleReset = () => {
    setName('');
    setLastName('');
    setEmail('');
    setContact('');
    setGender('');
    setBestSubjects([]);
    setUrl('');
    setAbout('');
    setFile(null); // Reset file state
  };

  const handleButtonClick = (type) => {
    if (type === 'submit') {
      handleSubmit();
    } else if (type === 'reset') {
      handleReset();  
    }
  };

  const subjects = ['english', 'maths', 'physics']; 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form in React</h2>
      <div>
        <label className="bold">First Name *</label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="bold">Last Name *</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label className="bold">Enter Email *</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="bold">Contact *</label>
        <input
          type="tel"
          placeholder="Enter Mobile number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div>
        <label className="bold">Gender *</label>
        <div className='gend'>
          {['male', 'female', 'other'].map((genderOption) => (
            <div key={genderOption}>
              <input 
                type="radio" 
                value={genderOption} 
                name="gender" 
                id={genderOption}
                onChange={(e) => setGender(e.target.value)} 
              />
              <label htmlFor={genderOption}>{genderOption.charAt(0).toUpperCase() + genderOption.slice(1)}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="bold">Your best Subject *</label>
        <div className='subjects'>
          {subjects.map((subject) => (
            <div key={subject}>
              <input
                type="checkbox"
                value={subject}
                onChange={(e) => {
                  if (e.target.checked) {
                    setBestSubjects([...bestSubjects, e.target.value]);
                  } else {
                    setBestSubjects(bestSubjects.filter(s => s !== e.target.value));
                  }
                }}
              />
              <label htmlFor={subject}>{subject.charAt(0).toUpperCase() + subject.slice(1)}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="bold">Upload Resume *</label>
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} // Handle file upload
        />
      </div>
      <div>
        <label className="bold">Enter URL *</label>
        <input
          type="text"
          placeholder="Enter url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div>
        <label className="bold">Select your choice</label>
        <select>
          <option value="">Select your answer</option>
          {/* Add relevant options here */}
        </select>
      </div>
      <div>
        <label className="bold">About</label>
        <textarea
          placeholder="About yourself"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="btn-spacing">Submit</button>
        <button type="button" onClick={handleReset} className="btn-spacing">Reset</button>
      </div>
    </form>
  );
}
