const express = require('express')
const app = express()
const cors = require('cors')
const pool = require("./db")

app.use(cors())
app.use(express.json())

// rooms

app.post('/rooms',async (req, res) => {
    try {
        const {roomId, players, roomOwner} = req.body
        const createRoom = await pool.query("INSERT INTO rooms (roomId, players, roomOwner) VALUES ($1, $2, $3) RETURNING *", [roomId, players, roomOwner])
        res.json(createRoom.rows[0])
    } catch (err) {
        console.error(`${err}`)
    }
})

app.get('/rooms', async(req, res) => {
    try {
        const rooms = await pool.query("SELECT * FROM rooms")
        res.json(rooms.rows)
    } catch (err) {
        console.error(err)
    }
})

app.get('/rooms/:id', async(req, res) => {
    try {
        const id = req.params.id
        const rooms = await pool.query("select * from rooms where roomid = $1", [id])
        res.json(rooms.rows[0])
    } catch (err) {
        console.error(err)
    }
})

app.get('/playersinroom/:id', async(req, res) => {
    try {
        const id = req.params.id
        const rooms = await pool.query("select players from rooms where roomid = $1", [id])
        res.json(rooms.rows[0])
    } catch (err) {
        console.error(err)
    }
})

app.patch('/roomplayers/:id', async(req, res) => {
    try {
        const id = req.params.id
        const {playerArr} = req.body
        const rooms = await pool.query("update rooms set players = $2 where roomid = $1", [id, playerArr])
        res.json(rooms.rows[0])
    } catch (err) {
        console.error(err)
    }
})


app.delete('/rooms/:roomid', async(req, res) => {
    try {
        const id = req.params.roomid
        const rooms = await pool.query("delete from rooms where roomid = $1", [id])
        res.json(rooms.rows)
    } catch (err) {
        console.error(err)
    }
})

app.use('/6969')
app.listen(6969)