import React from 'react';
import PeriodSelector from './components/PeriodSelector/PeriodSelector';
import InfosBar from './components/InfosBar/InfosBar';
import {
  Container
} from '@material-ui/core'

export default function App() {
  return (
    <>
      <Container>
        <h1>Personal Finances Maneger</h1>
        <PeriodSelector />
        <InfosBar />
      </Container>
    </>
  );
}
