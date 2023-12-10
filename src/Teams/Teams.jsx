import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Teams.css'

function createData(name, role, joinedOn) {
    return { name, role, joinedOn };
  }
  
  //static data 
  const rows = [
    createData('Louis Ringal', 'Account Owner', '2 Feb, 2020'),
    createData('Camila Becker', 'Content Manager', '13 Mar, 2020'),
    createData('Jonathan Herring', 'Senior Designer', '2 Feb, 2020'),
    createData('Victoria Devine', 'Full-Stack Developer & 2 more', '7 Feb, 2020'),
  ];
  
  export default function Teams() {
    return (
    <>
    {/* <div className="invite-people-btn">+ Invite People Button</div> */}
    <div className="table-container">
      <TableContainer component={Paper} style={{ height: 'auto' }}>
        <Table sx={{ Width: 'auto'}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left">Joined On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="left">{row.joinedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </>
    );
  }