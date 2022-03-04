import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
    };
  }

  // onChange cho input
  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  // Truyền Keyword ra ngoài NhanVien Component
  onSearch = () => {
    this.props.onSearch(this.state.keyWord);
  };


  render() {
    var { keyWord } = this.state;
    return (
      <div className="row m-2">
        <input
          className="col-9"
          type="text"
          placeholder="Tìm Kiếm..."
          name="keyWord"
          defaultValue={keyWord}
          onChange={this.onChange}
        />
        <button
          className="mx-3 bg-primary text-white"
          style={{ border: "0px", borderRadius: "5px", fontSize: "20px" }}
          onClick={this.onSearch} 
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
}
