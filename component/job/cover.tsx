import styles from './cover.module.css';
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

interface coverParms {
  title: string;
  description: string;
  cta: string;
  jobURL: string;
}

export default function Cover(props: coverParms): JSX.Element {
  const { title, description, cta, jobURL } = props;
  return (
    <div className={styles.coverimage}>
      <div className={styles.jobdesc}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.buttonapply}>
          <Button href={jobURL}>{cta}</Button>
        </div>
      </div>
    </div>
  );
}
