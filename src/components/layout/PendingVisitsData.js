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
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        width="50vw"
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        {rows.length === 0 ? (
          <Box>
            <Typography variant="p">
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
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell": {
                borderColor: "primary.light"
              },
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default VisitsData;
