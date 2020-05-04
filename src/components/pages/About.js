import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <br />
      <p>App to search Github Users</p>
      <br />
      <p>
        This App use the Github API but without OAUTH authentication. I
        developed it with OAUTH authentication but, at that time, Github
        anounced that was going to deprecate OAUTH on 2020. That's why, I
        decided to publish the App without it, and the limit is about 30
        requests per hour that is enough for demo purposes. The OAUTH code is
        commented.
      </p>
      <br />
      <p>I used React, Axios, JSX, Hooks and Context.</p>
      <br />
      <p>Version: 1.0.0</p>
    </Fragment>
  );
};

export default About;
