import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Typography, Card, CardContent } from '@mui/material';
import './Analytics.css'



const data = [
  { sample: 'taskA', value: 100},
  { sample: 'taskB', value: 400}

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
      <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label={({name, percent}) => `${name} ${(percent *100).toFixed(0)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
      </ResponsiveContainer>
      </CardContent>
      </Card>
  )
}

export default Analytics