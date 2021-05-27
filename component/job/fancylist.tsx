import styles from './fancylist.module.css';
import React from 'react';

interface FancyParms {
  listTitle: string;
  listItems: string[];
}

export default function FancyList(props: FancyParms): JSX.Element {
  const { listTitle, listItems } = props;

  return (
    <div className={styles.title}>
      <h2>{listTitle}</h2>
      <ul>
        <div className={styles.listItems}>
          {listItems.map((oneItem, index) => (
            <li key={'fclist' + index}>{oneItem}</li>
          ))}
        </div>
      </ul>
    </div>
  );
}
