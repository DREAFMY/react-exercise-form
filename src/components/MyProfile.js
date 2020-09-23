import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "Male",
    discription: "",
    agree: false
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state))
  }
  render() {
    return (
      <form className="myForm">
        <h1>My Profile</h1>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            placeholder="Your name"
            onChange={this.handleChange}
          ></input>
        </div>

        <div className="form-row">
          <label htmlFor="gender">Gender</label>
          <select
            className="custom-select"
            id="gender"
            name="gender"
            onChange={this.handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            name="discription"
            id="discription"
            rows="5"
            className="form-control"
            value={this.state.discription}
            placeholder="Description about yourself"
            onChange={this.handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={this.state.agree}
              onChange={this.handleChange}
              id="agree"
              name="agree"
            />
            <label className="form-check-label" htmlFor="agree">
              I have read the terms of conduct
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary"
          disabled={
            !this.state.name ||
            !this.state.gender ||
            !this.state.discription ||
            !this.state.agree
          }
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default MyProfile;

