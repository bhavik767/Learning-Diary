import React, { Component } from "react";
import { connect } from "react-redux";
import { updateColumn, deleteColumn } from "../actions/columns";
import ColumnDataService from "../services/column.service";

class Column extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getColumn = this.getColumn.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeColumn = this.removeColumn.bind(this);

    this.state = {
      currentColumn: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getColumn(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentColumn: {
          ...prevState.currentColumn,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
        currentColumn: {
        ...prevState.currentColumn,
        description: description,
      },
    }));
  }

  getColumn(id) {
    ColumnDataService.get(id)
      .then((response) => {
        this.setState({
            currentColumn: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentColumn.id,
      title: this.state.currentColumn.title,
      description: this.state.currentColumn.description,
      published: status,
    };

    this.props
      .updateColumn(this.state.currentColumn.id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
            currentColumn: {
            ...prevState.currentColumn,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateColumn(this.state.currentColumn.id, this.state.currentColumn)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The column was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeColumn() {
    this.props
      .deleteColumn(this.state.currentColumn.id)
      .then(() => {
        this.props.history.push("/columns");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentColumn } = this.state;

    return (
        <div>
        {currentColumn ? (
          <div className="edit-form">
            <h4>Column</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentColumn.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentColumn.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentColumn.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentColumn.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.removeColumn}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Column...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateColumn, deleteColumn })(Column);