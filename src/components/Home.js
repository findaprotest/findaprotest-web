import React from 'react';
import {
  Col,
  Grid,
  Row
} from 'react-lightning-design-system';
import GlobalHeader from './GlobalHeader';

export default () => (
  <div>
    <Grid>
      <Row cols={1}>
        <Col cols={1}>
          <GlobalHeader />
        </Col>
      </Row>
    </Grid>
  </div>
);
