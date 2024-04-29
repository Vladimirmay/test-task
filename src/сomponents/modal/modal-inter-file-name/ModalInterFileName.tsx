import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import { useState } from "react";

export default function ModalInterFileName() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          height: "20%",
          borderRadius: "8px",
          backgroundColor: "transparent",
          color: "#777777",
          textTransform: "none",
          border: "1px solid #A6A8A9",
          "&:hover": {
            backgroundColor: "transparent",
            backgroundImage: "none",
          },
        }}
      >
        Ввести название файла
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            width: "400px",
            height: "210px",
            p: "10px",
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle>Введите название файла</DialogTitle>
        <DialogContent>
          <input
            type="text"
            style={{
              width: "100%",
              height: "50px",
              background: "#F2F2F2",
              borderRadius: "8px",
              outline: "none",
              padding: "0 10px",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Box sx={{ h: "48px", display: "flex", gap: "10px" }}>
            <Button
              onClick={handleClose}
              sx={{
                h: "100%",
                border: "1px solid #A6A8A9",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#777777",
                  textTransform: "none",
                }}
              >
                Отмена
              </Typography>
            </Button>
            <Button
              type="submit"
              sx={{
                h: "100%",
                background: "#42B277",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#42B264",
                },
              }}
              onClick={handleClose}
            >
              Отправить
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}
