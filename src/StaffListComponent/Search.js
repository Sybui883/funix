import React, { Component } from "react";
import { Button, Input, Form, FormGroup } from "reactstrap";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 col-sm-12">
            <Form>
              <FormGroup row>
                <Input
                  className="col-9 form-control mr-sm-2"
                  type="text"
                  name="keyword"
                  value={this.state.keyword}
                  onChange={this.handleChange}
                  placeholder="Tìm Tên..."
                />
                <Button
                  className="mx-3 btn btn-primary"
                  type="button"
                  color="primary"
                  onClick={this.handleClick}
                >
                  <i className="fa fa-search"></i>
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
