// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [educations, setEducations] = useState([
    {
      schoolName: '',
      degree: '',
      year: '',
      cgpa: '',
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      companyName: '',
      position: '',
      location: '',
      date: '',
      description: '',
    },
  ]);

  const [skills, setSkills] = useState([
    {
      category: '',
      list: '',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleAddEducation = () => {
    setEducations([...educations, { schoolName: '', degree: '', year: '', cgpa: '' }]);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { companyName: '', position: '', location: '', date: '', description: '' }]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { category: '', list: '' }]);
  };

  const handleEducationInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducations = [...educations];
    updatedEducations[index][name] = value;
    setEducations(updatedEducations);
  };

  const handleExperienceInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index][name] = value;
    setExperiences(updatedExperiences);
  };

  const handleSkillInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank'); // Open a new window

    printWindow.document.open();
    printWindow.document.write('<html><head><title>CV</title></head><body>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    printWindow.document.write('h1 { text-align: center; }');
    printWindow.document.write('ul { list-style-type: none; padding: 0; }');
    printWindow.document.write('li { margin-bottom: 10px; }');
    printWindow.document.write('</style>');
    printWindow.document.write('<h1>' + personalInfo.fullName + '</h1>');
    printWindow.document.write('<ul>');
    printWindow.document.write('<li>Email: ' + personalInfo.email + '</li>');
    printWindow.document.write('<li>Phone: ' + personalInfo.phone + '</li>');
    printWindow.document.write('<li>Address: ' + personalInfo.address + '</li>');
    printWindow.document.write('</ul>');
    printWindow.document.write('<h2>Education</h2>');
    educations.forEach((education) => {
      printWindow.document.write('<p>' + education.schoolName + ' - ' + education.degree + '|| CGPA : ' + education.cgpa + '</p>');
    });
    printWindow.document.write('<h2>Experience</h2>');
    experiences.forEach((experience) => {
      printWindow.document.write('<p>' + experience.companyName + ' - ' + experience.position + '</p>');
    });
    printWindow.document.write('<h2>Skills</h2>');
    skills.forEach((skill) => {
      printWindow.document.write('<p>' + skill.category + ': ' + skill.list + '</p>');
    });
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    printWindow.print();
    printWindow.close();
  };

  return (
    <div className="App" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      <h1>CV Builder</h1>
      <div>
        <h2>Personal Information</h2>
        <form>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={personalInfo.address}
            onChange={handleInputChange}
          />
        </form>
      </div>
      {/* Education */}
      <div>
        <h2>Education</h2>
        {educations.map((education, index) => (
          <div key={index}>
            <label>School Name:</label>
            <input
              type="text"
              name="schoolName"
              value={education.schoolName}
              onChange={(e) => handleEducationInputChange(e, index)}
            />
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={(e) => handleEducationInputChange(e, index)}
            />
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={education.year}
              onChange={(e) => handleEducationInputChange(e, index)}
            />
            <label>CGPA:</label>
            <input
              type="number"
              name="cgpa"
              value={education.cgpa}
              onChange={(e) => handleEducationInputChange(e, index)}
            />
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>
      {/* Experience */}
      <div>
        <h2>Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleExperienceInputChange(e, index)}
            />
            <label>Position:</label>
            <input
              type="text"
              name="position"
              value={experience.position}
              onChange={(e) => handleExperienceInputChange(e, index)}
            />
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={experience.location}
              onChange={(e) => handleExperienceInputChange(e, index)}
            />
            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={experience.date}
              onChange={(e) => handleExperienceInputChange(e, index)}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={(e) => handleExperienceInputChange(e, index)}
            ></textarea>
          </div>
        ))}
        <button onClick={handleAddExperience}>Add Experience</button>
      </div>
      {/* Skills */}
      <div>
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={skill.category}
              onChange={(e) => handleSkillInputChange(e, index)}
            />
            <label>List:</label>
            <textarea
              name="list"
              value={skill.list}
              onChange={(e) => handleSkillInputChange(e, index)}
            ></textarea>
          </div>
        ))}
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
      <div>
        <button onClick={handlePrint}  style={{marginTop:"10px"}}>Print CV</button>
      </div>
    </div>
  );
}

export default App;
