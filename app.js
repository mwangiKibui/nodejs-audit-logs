const express = require('express');
const app = express();

const {connectDb} = require("./utils/db");
const {logAuditTrails} = require("./middlewares/auditTrail");

app.use(express.json());
app.use(logAuditTrails);


app.get("/", (req,res) => res.json({
    success:true,
    message:"Get request sent successfully"
}));

app.post("/", (req,res) => res.json({
    success:true,
    message:"Post request sent successfully"
}));

app.put("/:pet", (req,res) => res.json({
    success:true,
    message:"Put request sent successfully"
}));


app.listen(process.env.PORT,async () => {
    await connectDb();
    console.log("Server started and running on port "+process.env.PORT)
});

