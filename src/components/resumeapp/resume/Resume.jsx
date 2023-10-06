import React, { useState,useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Resume = () => {
  const [resumeData, setResumeData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    address: '',
    title: '',
    urlLink: '',
    websiteName: '',
    institutionName: '',
    location: '',
    degreeType: '',
    fieldOfStudy: '',
    startMonthYear: '',
    gradMonthYear: '',
    scores: {
      gpa: '',
      cgpa: '',
      percentage: '',
    },
    scoresValue: '',
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    jobLocation: '',
    jobDescription: '',
    programmingLanguages: [],
    librariesFrameworks: [],
    toolsPlatforms: [],
    databases: [],
    certificateTitle: '',
    certificateLink: '',
    issuedBy: '',
    awards: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

 
  

  return (
    <div className="resume-container">
      <div className="form-container">
        <div className="form-section">
          <h2>Personal Information</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={resumeData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={resumeData.lastName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="emailAddress"
            placeholder="Email Address"
            value={resumeData.emailAddress}
            onChange={handleInputChange}
          />
          {/* Add more personal information fields */}
        </div>
        {/* Add more form sections and fields */}
      </div>
      <div className="preview-container">
     <div className="container">
  <header>
    <div className="header-bio">
      <h2>{resumeData.firstName}</h2>
      {/* <p> <span className="head-big">MD</span> <span className="head-big">H</span><span className="heading-small">OSSAN
        </span><span className="head-big">K</span><span className="heading-small">HAN</span><span className="heading-small"> SHANTO</span></p><br /> */}
      <div className="header-contact">
        <h3> <span className="head-small">Junior Web Developer</span></h3>
        <p> <a href="mailto:shkhan3275@gmail.com"><span className="head-small">{resumeData.emailAddress}</span>
            | </a>
          <a href="tel:+8801909658056"><span className="head-small"> +8801909658056 </span>| </a>
          <span className="head-small"> Matuail Jatrabari Dhaka</span>
        </p>
      </div>
      <div className="education">
        <p><span className="title-big">E</span><span className="title-small">DUCATION</span></p>
      </div>
    </div>
  </header>   
  <hr className="common-hr" />
  {/*Personal-section*/}
  <main>
    <section id="personal-section">
      <div className="content">
        <div className="div-left">
          <h4>BanglaDesh University</h4>
          <p>BSC in Computer Science and Engineerinf</p>
          <p> <i><b>CGPA:<span className="per-font">3.56</span> </b></i></p><br />
        </div>
        <div className="div-right">
          <p>Dhaka <br />
            2020-present
          </p>
        </div>
      </div><br />
    </section><br />
    <div className="experience-title">
      <p><span className="title-big">E</span><span className="title-small">XPREIENCE</span></p>
    </div>
    <hr className="common-hr" />
    {/*Experience*/}
    <section id="experience-section">
      <div className="contant-experience">
        <div className="experience-left">
          <h4>Adovasoft | Junior Software Developer</h4>
          <div>
            <div className="experience-right">
              <p>Dhaka,Bangladesh|oct 2020-present</p>
            </div>
            <div className="experience-midel">
              <p>As a Junior Software Developer at Adovasoft, I am a passionate and motivated
                individual
                with a strong foundation in programming and software development. I am eager to
                contribute my
                skills in creating innovative and e cient solutions for the company's projects. With
                a
                keen
                eye for detail and a proactive approach, I collaborate e ectively with the team to
                deliver
                high-quality code and meet project deadlines. Continuously seeking to enhance my
                technical
                expertise, I am dedicated to learning and adapting to the latest technologies and
                best
                practices in the software development industry. My goal is to make a meaningful
                impac on
                the company's success while growing as a professional in the eld of software
                development.
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section><br />
    <div className="skill-title">
      <p><span className="title-big">S</span><span className="title-small">KILLS</span></p>
    </div>
    <hr className="common-hr" />
    {/*Skill*/}
    <section id="skill-section">
      <div className="content-skill">
        <div className="skill-left">
          <p>Programming Language: </p>
          <p>Libraries/Frameworks: </p>
          <p> Tools/platforms: </p>
          <p>Databases: </p>
        </div>
        <div className="skill-right">
          <p> java(intermediate),python(basic),php</p>
          <p> Javascript,Reactjs,Boostraps </p>
          <p> Git,Github</p>
          <p> MySQL</p>
        </div><br />
      </div>
    </section>
    <div className="project-ti">
      <p><span className="title-big">P</span><span className="title-small">ROJECTS</span> <span className="ber">/</span><span className="title-big">O</span><span className="title-small">PEN-</span><span className="title-big">S</span><span className="title-small">OURCE</span></p>
    </div>
    <hr className="common-hr" />
    {/*Project*/}
    <section id="project-section">
      <div className="contant-project">
        <div className="project">
          <div className="pro-left">
            <h4>Portfolio | Link</h4>
          </div>
          <div className="pro-right">
            <h4><i>Reactjs</i></h4>
          </div>
          <div className="pro-mid">
            <p>My ReactJS portfolio showcases my passion for web development and demonstrates my pro
              ciency
              in
              using ReactJS to build interactive and dynamic user interfaces. With a focus on creating
              a
              smooth and engaging user experience, I have designed and developed various projects that
              highlight my skills in
              front-end development, including responsive design and state management.
              Using ReactJS's component-based architecture, I have crafted reusable and modular UI
              components that enhance code maintainability and scalability. My portfolio incorporates
              modern web development tools and practices, such as JSX, CSS modules, and React hooks,
              to
              ensure optimal performance and code
              organization.
              Throughout my portfolio, I have integrated projects that re ect my versatility in
              working
              with diverse APIs, data fetching techniques, and third-party libraries. I am committed
              to
              continuous learning and staying up-to-date with the latest advancements in the React
              ecosystem, allowing me to leverage the latest features and optimizations in my projects.
              Overall, my ReactJS portfolio serves as a testament to my dedication to front-end
              development, showcasing my ability to create captivating user experiences and my
              eagerness
              to take on new challenges in the ever-evolving world of web development.
            </p>
          </div>
        </div><br />
        <div className="pro-left2">
          <h4>Landing Page | Link </h4>
        </div>
        <div className="pro-right2">
          <h4><i>Reactjs</i></h4>
        </div>
        <div className="pro-mid2">
          <p> The React landing page I have designed showcases a sleek and modern user interface,
            emphasizing
            simplicity and clarity. Leveraging the power of React, the landing page o ers a smooth and
            interactive experience for visitors.
            Built with reusable React components, the landing page maintains a clean code structure,
            promoting easy maintenance and scalability. I have employed React's state management to
            ensure
            dynamic content updates and seamless user interactions, resulting in a captivating browsing
            experience.
            The landing page features responsive design, making it accessible across various devices and
            screen sizes.
            Implementing CSS-in-JS and CSS modules, the styling is well-organized and localized to speci
            c
            components, enhancing maintainability and avoiding global styling con icts.
            To optimize performance, the landing page utilizes React's lazy loading and code splitting
            techniques, ensuring fast load times and reducing initial page load size. Additionally, I
            have
            integrated smooth
            animations and transitions to create an engaging and visually appealing experience for
            users.
            The landing page highlights key features, services, or products e ectively through concise
            and
            compelling content, encouraging users to take desired actions. I have also incorporated
            Call-to-Action (CTA) elements strategically to drive conversions and user engagement.
            Overall, my React landing page is a powerful representation of my front-end development
            skills,
            demonstrating my ability to create user-centric and visually appealing web interfaces using
            the
            latest React capabilities.
          </p>
        </div>
        <br />
      </div>
    </section>
    <div className="ertificayion-ti">
      <p><span className="title-big">C</span><span className="title-small">ERTIFICATIONS</span></p>
    </div>
    <hr className="common-hr" />
    {/*CERTIFICATIONS*/}
    <section id="certi-section">
      <div className="contant-ertificayion">
        <div className="ertificayion">
          <div className="list">
            <ul>
              <li> css-<b>solo learn</b></li>
              <li>Javascript-<b>solo learn</b></li>
              <li>Responsive Web design- <b>solo learn</b></li>
            </ul>
          </div>
        </div></div></section>
  </main></div>

        </div>
        {/* <h2>Preview:</h2>
        <div className="preview-content">
          <h3>Personal Information</h3>
          <p>Name: {resumeData.firstName} {resumeData.lastName}</p>
          <p>Email: {resumeData.emailAddress}</p>
        
        </div> */}
      </div>
 
  );
};

export default Resume;
