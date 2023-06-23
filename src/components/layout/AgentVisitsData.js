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

function AgentVisitsData({ rows, columns, handleClick, handleOpen }) {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        width="80vw"
      >
        {rows.length === 0 ? (
          <Box>
            <Typography variant="p">Você ainda não tem visitas.</Typography>
          </Box>
        ) : (
            <Grid sx={{width: "80vw", display: "flex", justifyContent: "center", textAlign: "center"}}>
                <DataGrid
            rows={rows}
            columns={columns}
            style={gridStyle}
            onRowClick={(params) => {
              handleClick(params.row);
              handleOpen();
            }}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell": {
                borderColor: "primary.light",
              },
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
            </Grid>
          
        )}
      </Grid>
    </Grid>
  );
}

export default AgentVisitsData;
