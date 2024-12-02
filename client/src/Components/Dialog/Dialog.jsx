import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0.9)", // Initial scale for smooth zoom-in
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  transition: "transform 0.3s ease-in-out", // Smooth scaling effect
};

export default function Dialog({ open, setOpen }) {
  return (
    <div className="">
      <Button onClick={() => setOpen(true)}>Dialog</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a post
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
