import React, { useState } from 'react';
import style from './PeriodSelector.style';
import { 
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from '@material-ui/core';

export default function PeriodSelector() {
  const [period, setPeriod] = useState('2020-01');
  const periods = [];
  const years = ['2019', '2020', '2021'];
  const months = [];
  for (let i = 1; i < 13; i++) {
    months.push(String(i).padStart(2, '0'))
  }

  years.forEach((y) => {
    months.forEach((m) => {
      periods.push(`${y}-${m}`);
    })
  });

  const selectPeriod = (event) => {
    setPeriod(event.target.value);
  };

  const changePeriod = (opt) => opt < 0
    ? () => setPeriod(periods[periods.indexOf(period)-1])
    : () => setPeriod(periods[periods.indexOf(period)+1]);

  return (
    <>
    <Button variant="outlined" color="primary" onClick={changePeriod(-1)}>Prev</Button>
    <FormControl style={style}>
      <InputLabel id="period-selector-label">Periodo</InputLabel>
      <Select
        labelId="period-selector-label"
        id="period-selector"
        value={period}
        onChange={selectPeriod}
      >
      {periods.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
      </Select>
    </FormControl>
    <Button variant="outlined" color="primary" onClick={changePeriod(1)}>Next</Button>
    </>
  )
}
