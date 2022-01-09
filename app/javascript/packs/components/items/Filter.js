import React from 'react';

import styles from './item.module.css';


export default function Filter(props) {
  const {filter, filters, changeByFilter} = props;
  return (
    <div className={styles.div_filter}>
      <div className={styles.title_filter}>{filter}</div>
      <section class="app">
        {filters.map((filter) => 
          <div> 
            <article className="feature2">
              <input type="checkbox" id="feature2" onClick={() => changeByFilter(filter)}/>
              <div>
                <span>
                  {filter}
                </span>
              </div>
            </article>
          </div>
        )}
      </section>
    </div>
    
  );

}


