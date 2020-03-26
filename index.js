const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const patientsRouter = require('./routes/patients.js');
const physiciansRouter = require('./routes/physicians.js');
const appointmentsRouter = require('./routes/appointments')

app.use(express.json());

app.use('/patients',patientsRouter);
app.use('/physicians',physiciansRouter);
app.use('/appointments',appointmentsRouter);

app.listen(PORT,()=>console.log('server running on port '+PORT))