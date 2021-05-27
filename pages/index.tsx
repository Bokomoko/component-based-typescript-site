// prototype job detail page

import React from 'react';

// standard libraries imports
import Button from 'react-bootstrap/Button';

// Iramai react components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cover from '../component/job/cover';
import FancyList from '../component/job/fancylist';
import IramaiTestimonialCarousel from '../component/job/iramaitestimonialcarousel';
import TestimonialVideos from '../component/job/testimonialvideos';
import SeeAlso from '../component/job/seealso';
import WhyJoinIramai from '../component/job/whyjoiniramai';
import styles from './test.module.css';

// types defined for this app
import type { Job } from '../interfaces/iramaitypes';

import {
  job001,
  testmList,
  jobArticles,
  basedOnCareer,
  basedOnYourRole,
  basedOnYourSkills,
  listOfReasons,
} from '../utils/loaddata';
export default function Test() {
  // Now let´s get to business and assemble the job detail page

  return (
    <>
      <div className={styles.jobpage}>
        <Container fluid={true}>
          <Row className={styles.cover} md={1}>
            <Col>
              <Cover
                title={job001.title}
                description={job001.description}
                cta={job001.cta}
                jobURL={job001.jobURL}
              />
            </Col>
          </Row>
          <Row>
            <Col className={styles.leftcolumn}>
              <FancyList
                listTitle='Job responsibilities'
                listItems={job001.listOfResponsibilities}
              />
              <FancyList
                listTitle='Minimum requirements'
                listItems={job001.listOfRequirements}
              />
              <FancyList
                listTitle='Preferred Skills'
                listItems={job001.listOfSkills}
              />
              <div className={styles.buttonapply}>
                <Button>{job001.cta}</Button>
              </div>
            </Col>
            <Col>
              <div className={styles.rightcolumn}>
                <IramaiTestimonialCarousel listOfTestimonials={testmList} />
                <h3 className={styles.checkrelated}>Check Related Jobs</h3>
                <SeeAlso
                  title='Based on your career trajectory'
                  listOfJobs={basedOnCareer}
                  color='green'
                />
                <SeeAlso
                  title='Based on your role'
                  listOfJobs={basedOnYourRole}
                  color='blue'
                />
                <SeeAlso
                  title='Based on your skills'
                  listOfJobs={basedOnCareer}
                  color='darkblue'
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col className={styles.centercolumn}>
              <WhyJoinIramai reasons={listOfReasons} />
              <TestimonialVideos listOfVideos={'x'} />
              <h3 className={styles.checkrelated}>Check our Open Jobs</h3>
              <SeeAlso
                title='Based on your career trajectory'
                listOfJobs={basedOnCareer}
                color='green'
              />
              <SeeAlso
                title='Based on your role'
                listOfJobs={basedOnYourRole}
                color='blue'
              />
              <SeeAlso
                title='Based on your skills'
                listOfJobs={basedOnCareer}
                color='darkblue'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
