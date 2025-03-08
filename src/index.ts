import express, { Application, Request, Response } from 'express';
import UserRouters from "./routes/users"
// const express = require('express')
const app = express()
const port = 3000

app.use(UserRouters)
// app.use(ThoughtRouters)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})