import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Typography, Card, CardContent, Grid, LinearProgress } from '@mui/material';
import './Analytics.css'



const pieData = [
  { name: 'taskA', value: 100},
  { name: 'taskB', value: 400}

];

const progressData = [
  { task: 'taskA', completed: 70},
  { task: 'taskB', completed: 40}

];

const COLORS = ['#FFFF00', '#F5B717']

function Analytics() {
  return (
    <Card className='analytics-container' elevation={3}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Analytics Component
        </Typography>
    <Typography color='textSecondary'>
      Pie Charts and progress bars will be implemented here
      </Typography>
      <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
      <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label={({name, percent}) => `${name} ${(percent *100).toFixed(0)}%`}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
      </ResponsiveContainer>
      </Grid>
      <Grid item  xs={12} md={4}> 
      {progressData.map((item, index) => (
        <div key={index}>
          <Typography variant='subtitle1'>{item.task}</Typography>
          <LinearProgress variant='determinate' value={item.completed}/>
          </div>
      ))}
      </Grid>
      </Grid>
      </CardContent>
      </Card>
  )
}

export default Analytics