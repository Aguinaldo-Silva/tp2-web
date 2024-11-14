import React from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';

interface DatePickerProps {
    style?: React.CSSProperties;
}

const DatePicker: React.FC<DatePickerProps> = ({ style }) => {
    return (
        <div style={style}>
            <MuiDatePicker />
        </div>
    );
};

export default DatePicker;