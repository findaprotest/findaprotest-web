import React from 'react';

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderHeadingTitle,
  Button,
  ButtonGroup,
  Grid,
} from 'react-lightning-design-system';

export default () => (
  <div>
    <PageHeader>
      <PageHeaderHeading
        legend="Object"
        title={(
          <Grid vertical={false}>
            <PageHeaderHeadingTitle>
              My Objects
            </PageHeaderHeadingTitle>
          </Grid>
        )}
        info="COUNT items"
        rightActions={[
          <ButtonGroup key={0} className="slds-button-space-left">
            <Button type="neutral">New Object</Button>
          </ButtonGroup>,
        ]}
      />
    </PageHeader>
  </div>
);
