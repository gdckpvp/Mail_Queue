import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DataTable from "./modules/datagrid/DataTable";
import AllQueue from "./modules/Queue Grid/AllQueue";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <AllQueue />
      <DataTable />
    </div>
  </StrictMode>
);
