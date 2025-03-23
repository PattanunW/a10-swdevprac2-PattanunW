import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface DateReserveProps {
  label: string;
  value: Dayjs;
  onChange: (date: Dayjs | null) => void;
}

const DateReserve: React.FC<DateReserveProps> = ({ label, value, onChange }) => {
  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default DateReserve;
