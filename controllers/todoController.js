const Todo = require("../models/Todo");

exports.all = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    // console.log(allFlight);
    res.send(allTodo);
  } catch (err) {
    res.send(err);
  }
};

exports.add = async (req, res) => {
  const newflight = new Todo(req.body);
  try {
    const newEntry = await newtodo.save();
    // console.log(newEntry);
    res.send("Todo suss book");
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  const _id = req.query.id;
  try {
    const updateSingleTodo = await Todo.findByIdAndUpdate(
      _id,
      req.body,
      (err, todo) => {
        if (err) {
          res.status(404).json({
            message: "todo not found",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "suss updated ",
          });
        }
      }
    );
    // console.log(singleFlight);
    // res.send(singleFlight);
  } catch (err) {
    // res.send(err)
    // console.log(err);
  }
};

exports.delete = async (req, res) => {
  const _id = req.query.id;
  try {
    const updateSingleTodo = await Todo.findByIdAndDelete(_id, (err, todo) => {
      if (err) {
        res.status(404).json({
          message: "todo not found",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "suss deleted ",
        });
      }
    });
  } catch (err) {}
};
