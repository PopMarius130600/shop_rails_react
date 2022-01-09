import React from "react";

import { Col, Row } from 'react-bootstrap';

import styles from "./footer.module.css";import {SocialMediaIconsReact} from 'social-media-icons-react';
 
  
const Footer = () => {
  return (
    <div className={styles.footer} >
      <Row className={styles.row_names} >
        <Col className={styles.col_names} >
          <Row className={styles.row_names_buttons} >
            <Col className={styles.col_names_buttons} xs={6} >Pop Marius-Ionut:</Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="linkedin" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="github" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
          </Row>
        </Col>
        <Col className={styles.col_names} >
          <Row className={styles.row_names_buttons} >
            <Col className={styles.col_names_buttons} xs={6} >Tibrea Andrei:</Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="linkedin" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="github" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
          </Row>
        </Col>
        <Col className={styles.col_names} >
          <Row className={styles.row_names_buttons} >
            <Col className={styles.col_names_buttons} xs={6} >Lobont Ramona:</Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="linkedin" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="github" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
          </Row>
        </Col>
        <Col className={styles.col_names} >
          <Row className={styles.row_names_buttons} >
            <Col className={styles.col_names_buttons} xs={6} >Stoica Daniela:</Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="linkedin" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
            <Col className={styles.col_names_buttons} xs={1}>
              <SocialMediaIconsReact roundness={25} borderColor="white" icon="github" iconColor="white" backgroundColor="rgb(51, 51, 51)" url="https://some-website.com/my-social-media-url" size="25" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.row_media_buttons} >
        <Col xs={2} />
        <Col xs={3}>
          The best shop online for your styles:
        </Col>
        <Col className={styles.col_media_buttons} xs={1} >
          <SocialMediaIconsReact roundness={25} borderColor="white" icon="instagram" iconColor="white" backgroundColor="rgb(39, 39, 39)" url="https://some-website.com/my-social-media-url" size="35" />
        </Col>
        <Col className={styles.col_media_buttons} xs={1} >
          <SocialMediaIconsReact roundness={25} borderColor="white" icon="facebook" iconColor="white" backgroundColor="rgb(39, 39, 39)" url="https://some-website.com/my-social-media-url" size="35" />
        </Col>
        <Col className={styles.col_media_buttons} xs={1} >
          <SocialMediaIconsReact roundness={25} borderColor="white" icon="youtube" iconColor="white" backgroundColor="rgb(39, 39, 39)" url="https://some-website.com/my-social-media-url" size="35" />
        </Col>
        <Col className={styles.col_media_buttons} xs={1} >
          <SocialMediaIconsReact roundness={25} borderColor="white" icon="twitter" iconColor="white" backgroundColor="rgb(39, 39, 39)" url="https://some-website.com/my-social-media-url" size="35" />
        </Col>
        <Col className={styles.col_media_buttons} xs={1} >
          <SocialMediaIconsReact roundness={25} borderColor="white" icon="github" iconColor="white" backgroundColor="rgb(39, 39, 39)" url="https://some-website.com/my-social-media-url" size="35" />
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};
export default Footer;