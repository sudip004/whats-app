
import {Box,styled,InputBase} from '@mui/material'
import {EmojiEmotionsOutlined,AttachFileOutlined,Mic} from '@mui/icons-material';
import { useEffect } from 'react';
// from api
import {uploadFile} from '../../../service/api'

// CSS
const Component = styled(Box)`
    height:50px;
    background: #ededed;
    display:flex;
    align-items:center;
    padding : "0 15px ";
    & > * {
        margin: 5px;
        color:#919191;
    }
`
const Search = styled(Box)`
background-color:#FFFFFF;
border-radius: 18px;
width: calc(94% - 100px);
`
const InputField = styled(InputBase)`
width:100%;
padding:17px;
height:17px;
padding-left:30px;
font-size:14px!important;
`

const ClipIcon = styled(AttachFileOutlined)`
transform: rotate(40deg)
`

const Footer = ({ sendText,setValue, value, file, setFile, setImage }) => {
 
  useEffect(()=>{
    const getImage = async()=>{
          if(file){
              const data = new FormData();
              data.append("name",file.name)
              data.append("file",file)

             let response =  await uploadFile(data)
             console.log("thius sis res",response);
             setImage(response.data)
          }
    }
    getImage()
  },[file,setImage])
  // 
  const onFileChange =(e)=> {
    console.log("on change file",e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name)
  }
  return (
    <Component>
        <EmojiEmotionsOutlined/>
        <label htmlFor='fileInput'>
        <ClipIcon />
        </label>
        <input type='file'
        id='fileInput'
        style={{display:'none'}}
        onChange={(e)=>onFileChange(e)}
        />
        <Search>
            <InputField
             placeholder='Type a message'
             onChange={(e)=>setValue(e.target.value)}
             onKeyPress={(e)=>sendText(e)}
             value={value}
             />
        </Search>
        <Mic/>
    </Component>
  )
}

export default Footer