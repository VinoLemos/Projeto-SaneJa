import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const gridStyle = {
  width: "100vw",
  height: "50vh",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function VisitsData({ rows, columns, handleClick, handleOpen }) {
  return (
    <Grid container>
      {rows.length === 0 ? (
        <Box sx={{display: "flex", justifyContent: "center", width: "100vw"}}>
          <Typography variant="p" >
          Não existem visitas pendentes no momento.
        </Typography>
        </Box>
        
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          style={gridStyle}
          onRowClick={(params) => {
            handleClick(params.row);
            handleOpen();
          }}
        />
      )}
    </Grid>
  );
}

export default VisitsData;
