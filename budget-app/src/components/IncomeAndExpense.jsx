import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function IncomeAndExpense() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="income" value="1045.50" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="expenses" value="623.50" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default IncomeAndExpense;
