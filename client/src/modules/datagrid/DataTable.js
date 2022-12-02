import "./DataTable.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "sendTo",
    headerName: "Send To",
    width: 250,
    editable: true
  },
  {
    field: "from",
    headerName: "From",
    width: 250,
    editable: true
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    editable: true
  },
  {
    field: "time",
    headerName: "Time",
    type: "dateTime",
    width: 200,
    editable: true
  }
];

const rows = [
  { id: 1, sendTo: "Snow", from: "Jon", status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 2, sendTo: "Lannister", from: "Cersei", status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 3, sendTo: "Lannister", from: "Jaime", status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 4, sendTo: "Stark", from: "Arya", status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 5, sendTo: "Targaryen", from: "Daenerys", status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 6, sendTo: "Melisandre", from: null, status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 7, sendTo: "Clifford", from: "Ferrara", status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 8, sendTo: "Frances", from: "Rossini", status: "pending" ,time:"9/29/2021, 12:00:00"},
  { id: 9, sendTo: "Roxie", from: "Harvey", status: "pending" ,time:"9/29/2021, 12:00:00"}
];

export default function DataTable() {
  return (
    <div className="DataTable">
      <h2>All Mail In Queue</h2>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}