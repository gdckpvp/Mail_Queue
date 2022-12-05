import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DataTable from "./modules/datagrid/DataTable";
import CommandBar from "./modules/Command/CommandBar";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <CommandBar />
      <DataTable />
    </div>
  </StrictMode>
);
