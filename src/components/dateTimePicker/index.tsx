import React from 'react';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface DateTimePickerProps {
    style?: React.CSSProperties;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ style }) => {
    return (
        <div style={style}>
            <MuiDateTimePicker />
        </div>
    );
};

export default DateTimePicker;