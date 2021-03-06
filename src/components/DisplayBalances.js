import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({incomeTotal, expensTotal}) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
          <DisplayBalance title="Incoming" value={incomeTotal} color="green" size="tiny"/>
          </Grid.Column>
          <Grid.Column>
          <DisplayBalance title="Expenses" value={expensTotal} color="red" size="tiny"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances
