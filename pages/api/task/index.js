import Task from "../../../models/Task";
import dbConnect from "../../../middleware/dbConnect";

export default async (req, res) => {
	const { method } = req;
	const { id } = req.query;

	// Connect to database
	await dbConnect();
    if (method === "POST") {
		try {
			const newTask = await new Task(req.body).save();
			res
				.status(201)
				.json({ data: newTask, message: "Task added successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}

	if (method === "GET") {
		try {
			const tasks = await Task.find();
			res.status(200).json({ data: tasks });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
	
};