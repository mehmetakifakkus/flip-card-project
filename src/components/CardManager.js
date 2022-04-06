import React, { useEffect, useState } from "react";
import CardFlip from "./CardFlip";
import {Button, IconButton} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile'
import {ButtonContainer, InputContainer} from './styler';
import CardInput from "./CardInput";

function CardManager(props) {
  const {data} = props;

  const [selection, setSelection] = useState(0);
  const [words, setWords] = useState(data);

  let word = words[selection];

  useEffect(() => {
    word = words[selection];
  }, [selection]);

  const addWord = (word) => {
    setWords([...words, word]);
  };

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text) 
      const data = JSON.parse(text)
      setWords(words.concat(data));
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <div>
      <CardFlip word={word}/>

      <ButtonContainer>
        <Button variant="contained" disabled={selection === 0}
          onClick={() => {
            setSelection(Math.max(selection - 1, 0));
          }}>Önceki</Button>

        <Button variant="contained" disabled={selection === words.length-1}
          onClick={() => {
            setSelection(Math.min(selection + 1, words.length-1));
          }}color="success">Sonraki</Button>
      </ButtonContainer>
      
      <InputContainer>
        <CardInput addWord={addWord}/>
 
        {/* <UploadFileIcon/> */}

          {/* <input type="file" onChange={(e) => showFile(e)} /> */}


          <input style={{display: "none"}} accept =".json"  // specify the file type that you wanted to accept
            id="choose-file"
            type="file"
            onChange={(e) => showFile(e)}
          />
          <label htmlFor="choose-file">
              <UploadFileIcon /> UPLOAD
          </label>

      </InputContainer>
    </div>
  );
}

export default CardManager;
