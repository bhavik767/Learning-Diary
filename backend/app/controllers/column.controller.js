const db = require("../models");
const Columns = db.diary_columns;
const Op = db.Sequelize.Op;

// Create and Save a new column
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Diary column
      const column = {
        title: req.body.title,
        description: req.body.description,
      };
    
      // Save Column in the database
      Columns.create(column)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Column."
          });
        });
};

// Retrieve all columns from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Columns.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Columns."
        });
      });  
};

// Find a single column with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Columns.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Column with id=" + id
        });
      });
};

// Update a column by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  Columns.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Diary Column was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Column with id=${id}. Maybe Column was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Column with id=" + id
      });
    });
};

// Delete a column with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  Columns.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Column was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Column with id=${id}. Maybe Column was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Column with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Columns.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Columns were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all columns."
      });
    });
};

