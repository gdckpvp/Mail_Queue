import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./AllQueue.css";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "queueName",
    headerName: "Queue Name",
    width: 250,
    editable: true
  }
];

const rows = [
  { id: 1, queueName: "Snow" },
  { id: 2, queueName: "Lannister"},
  { id: 3, queueName: "Lannister"},
  { id: 4, queueName: "Stark"},
  { id: 5, queueName: "Targaryen"},
  { id: 6, queueName: "Melisandre"},
  { id: 7, queueName: "Clifford"},
  { id: 8, queueName: "Frances"},
  { id: 9, queueName: "Roxie"}
];

export default function AllQueue() {
  return (
    <div className="AllQueue">
      <h2>All Queue</h2>
      <Box sx={{ height: 200, width: "100%" }}>
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