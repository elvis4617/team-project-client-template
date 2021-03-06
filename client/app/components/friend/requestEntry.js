import React from 'react';
import {addFriend} from '../../server';

export default class RequestEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueU: "",
      valueE: ""
    };
  }
  handleRequestU(e) {
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var request = this.state.valueU.trim();
    if (request !== "") {
      this.props.sendRequest(request, "");
      // Reset status update.
      this.setState({value: ""});
    }
  }
  handleRequestE(e) {
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var request = this.state.valueE.trim();
    if (request !== "") {
      this.props.sendRequest("", request);
      // Reset status update.
      this.setState({value: ""});
    }
  }
  handleChangeU(e) {
    e.preventDefault();
    this.setState({ valueU: e.target.value });
  }
  handleChangeE(e) {
    e.preventDefault();
    this.setState({ valueE: e.target.value });
  }

  handleKeyUpU(e){
    if (e.key === "Enter") {
      var value = this.state.valueU.trim();
      if (value !== "") {
        // Post comment
        addFriend(this.state.valueU, 1, ()=>{});
        this.setState({valueU:""});
      }
    }
  }
  render() {
    return (
      <div className="panel panel-default friends-panel">
        <div className="panel-body">
          <div className="input-group friend-request">
            <input type="text"
              className="form-control add-freind-input"
              placeholder="Send Request via Username"
              value = {this.state.valueU}
              onChange = {(e) => this.handleChangeU(e)}
              onKeyUp  = {(e) => this.handleKeyUpU(e)}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default" onClick = {(e) => this.handleRequestU(e)}>
                <span className="glyphicon glyphicon-plus plus-icon"></span>
              </button>
            </span>

          </div>
          <hr/>
          <div className="input-group friend-request">
          <input type="text"
            className="form-control add-freind-input"
            placeholder="Send Request via Email"
            value = {this.state.valueE}
            onChange = {(e) => this.handleChangeE(e)}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default" onClick = {(e) => this.handleRequestE(e)}>
                <span className="glyphicon glyphicon-plus plus-icon"></span>
              </button>
            </span>
          </div>
      </div>
    </div>
    )
  }
}
