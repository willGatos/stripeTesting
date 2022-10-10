import { TextField } from "@mui/material";

function BarInput({label, value, object, setObject}) {
    const handleData = input => e =>{
        console.log(label,value, object)
        setObject({...object, [input]: e.target.value})
    }
    return <TextField 
        name={label}
        label={label}
        value={value}
        onChange={handleData(label)}
        variant="standard"
        />
}

export default BarInput