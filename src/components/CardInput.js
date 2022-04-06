import React from 'react'
import {Button, TextField, Modal, Box,} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CardInput(props) {
  const [open, setOpen] = React.useState(false);
  const [word, setWord] = React.useState({english: '', turkish: '', example: ''});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<AddIcon />}>Add a word</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField style={{width: "400px", marginBottom: '20px'}} value={word.english} onChange={(e)=> {setWord({...word, english: e.target.value.toLowerCase()})}} label="English" />
          <TextField style={{width: "400px", marginBottom: '20px'}} value={word.turkish} onChange={(e)=> {setWord({...word, turkish: e.target.value.toLowerCase()})}} label="Turkish" />
          <TextField style={{width: "400px", marginBottom: '20px'}} value={word.example} onChange={(e)=> {setWord({...word, example: e.target.value})}} label="Explanation" />
          <Button variant="contained" startIcon={<AddIcon />} onClick={()=>{props.addWord(word); setWord({english: '', turkish: '', example: ''})}}>Add</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default CardInput