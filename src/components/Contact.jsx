import React from "react";

const Contact = () => {
  return (
    <>
      <section className="res-section">
        <h1 className="h1skill" id="h1Contact">
          Contact
        </h1>
        <ol className="skill">
          <li>
            <a className="fa-brands fa-github" href="https://github.com/dchamp16"></a>
            Github
          </li>
          <li>
            <a
              className="fa-brands fa-linkedin"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            ></a>
            Linkedin
          </li>
          <li>
            <a className="fa-regular fa-envelope" href="mailto:dchamp16@gmail.com"></a>
            Email
          </li>
        </ol>
      </section>
    </>
  );
};

export default Contact;
