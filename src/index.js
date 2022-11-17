import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

function App() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "id", options: { filterOptions: { fullWidth: false } } },
    { name: "name", label: "Name" },
    { name: "dikshaYear", label: "Diksha Year" },
    { name: "degree", label: "Degree(College)" },
    { name: "seva", label: "Seva(Location)" },
    { name: "other", label: "Other Info" },
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    selectableRows: false,
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  const data = [
    {
      id: 1,
      name: "Adbhutanand Swami (અદભૂતાનંદ સ્વામી)",
      dikshaYear: "March-1990",
      seva: "Mumbai",
      degree: "B.Tech in Computer Engineering, DDIT",
      other: "",
    },
    {
      id: 2,
      name: "Atmatrupt Swami (અદભૂતાનંદ સ્વામી)",
      dikshaYear: "March-1980",
      seva: "Sarangpur",
      degree: "IIT",
      other: "Guruji Sant",
    },
    {
      id: 3,
      name: "Atmaswarup Swami (અદભૂતાનંદ સ્વામી)",
      dikshaYear: "March-1970",
      seva: "Nenpur",
      degree: "IISc",
      other: "Sadguru Sant, Staff Sant",
    },
    {
      id: 4,
      name: "Gnanswarup Swami (અદભૂતાનંદ સ્વામી)",
      dikshaYear: "Dec-1999",
      seva: "Ahmedabad",
      degree: "IIM-Bussiness Analyst",
      other:
        "-Chhatralay Bhutprva vidhyarthi\n -diksha=>2003\n -Medical vibhag Seva",
    },
  ];

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"Sant Parichay"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
