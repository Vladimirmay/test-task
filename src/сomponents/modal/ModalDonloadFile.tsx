import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Checkbox,
  styled,
} from "@mui/material";
import "./ModalDonloadFile.css";
// import CheckBoxInput from "./сomponents/checkbox-input/CheckBoxInput";
import { useState } from "react";

export default function ModalDonloadFile() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <button onClick={handleClickOpen} className="import__file__btn">
        <img src="./Vector.svg" alt="add" />
        <p>Импорт</p>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            width: "513px",
            height: "332px",
            p: "10px",
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontSize: "28px", fontWeight: 700, mt: "10px" }}
        >
          Импорт файла
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{ height: "48px", display: "flex", gap: "10px" }}>
              <input
                type="text"
                style={{
                  width: "70%",
                  height: "100%",
                  background: "#F2F2F2",
                  borderRadius: "8px",
                  outline: "none",
                  padding: "0 10px",
                }}
              />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{
                  width: "30%",
                  height: "100%",
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
                Обзор
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
          </DialogContentText>
          <Box sx={{ mt: "10px" }}>
            <div>
              <FormControlLabel control={<Checkbox />} label="Проверить ИНН" />
              {/*  наверное баг VSCODE, он не видет именно здесь импорт моего */}

              {/* <CheckBoxInput desc="Проверить ИНН" /> */}
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label="Проверить адрес"
              />
              {/* аналогично */}
              {/* <CheckBoxInput desc="Проверить адрес" /> */}
            </div>
          </Box>
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
              sx={{
                h: "100%",
                background: "#42B277",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
              }}
              onClick={handleClose}
            >
              Импортировать
            </Button>
          </Box>
          <Button
            onClick={handleClose}
            sx={{ position: "absolute", top: "10px", right: "5px" }}
          >
            <img
              src="./close.svg"
              alt="close-modal"
              className="img__close__modal"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
