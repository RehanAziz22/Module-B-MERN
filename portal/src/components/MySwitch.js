import * as React from 'react';
import Switch from '@mui/material/Switch';


export default function MySwitch(props) {
    const{onChange,label,value} = props
  return (
    <div>
      <Switch checked={value} label={label} onChange={onChange} />
    </div>
  );
}
