require('dotenv').config()
const mysql = require('mysql2')
const express = require('express')
const app = express()
const port = 3000

// Create the connection to the database
const connection = mysql.createConnection(process.env.DATABASE_URL)

// simple query
connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

// Example with placeholders
connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
  console.log(results)
})

app.get('/tasks', (req, res) => {
  connection.query('SELECT * FROM task', function (err, results) {
    if (err) {
      console.error('エラーが発生しました: ', err)
      return res.status(500).send('サーバーエラー')
    }
    res.json(results)
  })
})

app.listen(port, () => {
  console.log(`アプリケーションは http://localhost:${port} で実行されています`)
})
