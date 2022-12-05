import "./DataTable.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Data from './Data.json';


const columns = [
  { field: "id", headerName: "Queue ID", width: 200 },
  { field: "mailId", headerName: "Mail ID", width: 200 },
  {
    field: "time",
    headerName: "Arrival Time(ms)",
    width: 200,
    editable: true
  },
  {
    field: "sender",
    headerName: "Sender",
    width: 250,
    editable: true
  },
  {
    field: "recipient",
    headerName: "Recipient",
    width: 250,
    editable: true
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    editable: true
  }  
];

const rows = Data.data
console.log(rows)

export default function DataTable() {
  return (
    <div className="DataTable">
      <h2>All Mail In Queue</h2>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}