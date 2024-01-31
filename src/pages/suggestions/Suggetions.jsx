import React from "react";
import useTitle from "../../hooks/useTitle";
import PageTitle from "../../components/resumeapp/PageTitle";
import tips from "./tips";
const Suggetions = () => {
  useTitle("Suggestions");
  return (
    <div>
      <PageTitle pageTitle="Suggestions for better resume" />
      <div className="suggestions-container">
        <div className="video-container">
          <div className="video-item">
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/iQLPWQP2B08?si=uVJmEQCLN57UwrR-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-item">
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/aD7fP-2u3iY?si=r1M7OZwPYvhb7L96"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <p className="suggestions-header">
          Employers use resumes throughout the hiring process to learn more
          about candidates and determine whether they might be a good fit. An
          effective resume is easy to read, summarizes your accomplishments and
          skills and highlights relevant experience. Learning how to showcase
          your credentials on a resume can help you impress potential employers.
        </p>
        <p>
          {" "}
          In this article, we offer 10 tips to help you write a great resume.
        </p>

        <div className="tips">
          {tips.map((tip) => {
            return (
              <>
                <div className="sub-title">
                  <span>{tip.id}</span>. {tip.tipsTitle}
                </div>
                <div className="tips-content">{tip.tipsContent}</div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Suggetions;
