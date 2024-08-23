import express from "express"

const app = express()
const port = 3000

app.get("/", (re, res) => {
	res.render("index.ejs", {
		dayType: "a weekday",
		advice: "It's time to work hard.",
	})
})

app.listen(port, () => {
	console.log(`Server running on port ${port}.`)
})
