import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { retrieveColumns, findColumnsByTitle, deleteAllColumns } from "../actions/columns";

class ColumnsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveColumn = this.setActiveColumn.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllColumns = this.removeAllColumns.bind(this);

    this.state = {
      currentColumn: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveColumns();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentColumn: null,
      currentIndex: -1,
    });
  }

  setActiveColumn(column, index) {
    this.setState({
      currentColumn: column,
      currentIndex: index,
    });
  }

  removeAllColumns() {
    this.props
      .deleteAllColumns()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findColumnsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, currentColumn, currentIndex } = this.state;
    const { columns } = this.props;

    return (
        <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Columns List</h4>

          <ul className="list-group">
            {columns &&
              columns.map((column, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveColumn(column, index)}
                  key={index}
                >
                  {column.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllColumns}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentColumn ? (
            <div>
              <h4>Column</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentColumn.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentColumn.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentColumn.published ? "Published" : "Pending"}
              </div>
              <Link
                to={"/columns/" + currentColumn.id}
                className="btn-sm btn-success"
                style={{color : "yellow"}}
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Column...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    columns: state.columns,
  };
};

export default connect(mapStateToProps, { retrieveColumns, findColumnsByTitle, deleteAllColumns })(ColumnsList);
