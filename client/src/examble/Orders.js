import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


// Generate Order Data
function createData(queueId,id, name, time, status, infor) {
  return { queueId,id, name, time, status, infor };
}

const rows = [
  createData(
    0,
    0,
    'Elvis Presley',
    '16 Mar, 2019',
    'Waiting',
    'VISA ⠀•••• 3719',
  ),
  createData(
    1,
    1,
    'Paul McCartney',
    '16 Mar, 2019',
    'Done',
    'VISA ⠀•••• 2574',
  ),
  createData(2,2, 'Tom Scholz', '16 Mar, 2019', 'Done', 'MC ⠀•••• 1253'),
  createData(3,3, 'Michael Jackson', '16 Mar, 2019', 'Done', 'AMEX ⠀•••• 2000'),
  createData(4,4, 'Bruce Springsteen', '16 Mar, 2019', 'Done', 'VISA ⠀•••• 5919'),

  
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Queue ID</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Infor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.queueId}>
              <TableCell>{row.queueId}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.time}</TableCell>              
              <TableCell>{row.status}</TableCell>              
              <TableCell align="right">{row.infor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}