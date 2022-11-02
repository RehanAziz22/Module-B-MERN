import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MySelect(props) {
    const { label, value, onChange, datasource } = props

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    // fullWidth
                    onChange={onChange}
                >
                    {datasource && datasource.length > 0 ? 
                    datasource.map((e, i) => <MenuItem value={e.id} key={i}>{e.fullName}</MenuItem>) : null}
                </Select>
            </FormControl>
        </>
    )
}
