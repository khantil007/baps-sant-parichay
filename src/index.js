import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Grid, Typography } from "@mui/material";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const dataList = require("./data.json");

function App() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const transformedData = dataList.map((item, index) => {
      return {
        id: item.id,
        name: item.name,
        diksha: item.diksha,
        degree: item.degree,
        seva: item.seva,
        other:
          item.other &&
          item.other.map((val, idx) => (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} key={idx}>
                  <div>➛{val}</div>
                </Grid>
              </Grid>
            </>
          )),
      };
    });
    setData(transformedData);
  }, []);
  const columns = [
    {
      name: "id",
      label: "Id",
      options: { filterOptions: { fullWidth: false } },
    },
    { name: "name", label: "Name" },
    { name: "diksha", label: "Diksha" },
    { name: "degree", label: "Degree(College)" },
    { name: "seva", label: "Seva(Location)" },
    {
      name: "other",
      label: "Other Info",
      options: {
        filter: false,
        sort: false,
      },
    },
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

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={
            <div>
              <Typography variant="h6">BAPS SANT PARICHAY</Typography>
            </div>
          }
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
