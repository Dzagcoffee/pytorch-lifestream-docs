import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function AboutPTLSText() {
  return (
    <section className={styles.about_ptls}>
      <div className="container">
        <h1 className="text--center margin-vert--lg">About PTLS</h1>
        <div className={clsx("row margin-vert--xs")}>
          <div>
            <p>
              Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
              Neque volutpat ac tincidunt vitae semper.
              Facilisis gravida neque convallis a cras semper.
              Neque ornare <span className={styles.color_red}>aenean</span> euismod elementum nisi quis eleifend quam adipiscing.
              Ultricies integer quis auctor elit sed.
              Egestas maecenas pharetra <span className={styles.color_green}>convallis</span> posuere morbi leo.
              Vulputate eu scelerisque <a href="" className={`${styles.color_blue} ${styles.scaled_a}`}>pellentesque</a> imperdiet proin fermentum leo vel.
              Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}