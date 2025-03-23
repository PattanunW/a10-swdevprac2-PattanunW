'use client';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { TextField, Select, MenuItem, Button, SelectChangeEvent } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import DateReserve from "@/components/DateReserve";

const BookingPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nameLastname: "",
    tel: "",
    venue: "",
    bookDate: dayjs(),
  });

  // แยก handleChange ออกเป็นสองฟังก์ชัน
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setFormData({ ...formData, venue: e.target.value });
  };

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setFormData({ ...formData, bookDate: date || dayjs() });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addBooking({
      nameLastname: formData.nameLastname,
      tel: formData.tel,
      venue: formData.venue,
      bookDate: formData.bookDate.format("YYYY-MM-DD"),
    }));
  };

  return (
    <main className='bg-slate-100 m-5 p-5 mt-24 flex flex-col'>
      <div className="mt-20">
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Name-Lastname" 
          name="nameLastname" 
          fullWidth 
          onChange={handleInputChange} 
          required 
        />
        <TextField 
          label="Contact-Number" 
          name="tel" 
          fullWidth 
          onChange={handleInputChange} 
          required 
        />
        <Select 
          id="venue" 
          name="venue" 
          fullWidth 
          value={formData.venue} 
          onChange={handleSelectChange} 
          required
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateReserve label="Booking Date" value={formData.bookDate} onChange={handleDateChange} />
        </LocalizationProvider>
        <Button type="submit" variant="contained" color="primary">Book Venue</Button>
      </form>
      </div>
    </main>
  );
};

export default BookingPage;
