import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewProject extends Component {
  static propTypes = {
    addProject: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  }

  constructor(){
    super();
    this.createProject = this.createProject.bind(this);
  }

  createProject(e, type) {
    if (e) e.preventDefault();
    const project = {
      name: this.name.value,
      status: type === "draft" ? 'Draft | Edit & Post' : 'Listed | View Status',
      type: type,
      hours: this.hours.value,
      rate: this.rate.value,
      deadline: this.deadline.value,
      desc: this.desc.value,
    }
    this.props.addProject(project);
  }

  render(){
    return (
      <div className="modal-style new">
        <div className="model-header">
          <div className="model-title">Start a New Project</div>
          <div className="model-close" onClick={(e) => this.props.close(e)}>X</div>
        </div>
        <form>
          <div className="detail-header">Service Needed:</div>
          <input ref={(input) => this.name = input} className="name-input" type="text" name="name" placeholder="ex: Graphic Design"/>
          <div className="detail-form">
            <div className="detail">
              <div className="detail-header">Total Hours:</div>
              <input ref={(input) => this.hours = input} className="detail-input" type="text" name="hours" placeholder="ex: 7"/>
            </div>
            <div className="detail">
              <div className="detail-header">Flat Rate:</div>
              <input ref={(input) => this.rate = input} className="detail-input" type="text" name="rate" placeholder="ex; 200"/>
            </div>
            <div className="detail">
              <div className="detail-header">Deadline:</div>
              <input ref={(input) => this.deadline = input} className="detail-input" type="text" name="deadline" placeholder="select"/>
            </div>
          </div>
          <div className="detail-header">Description:</div>
          <textarea ref={(input) => this.desc = input} className="description-input" type="text" name="desc" placeholder="Project Description" ></textarea>
        </form>
        <div className="model-footer">
          <div className="model-button list-project" onClick={(e) => {this.createProject(e, 'listed'); this.props.close(e)}}>List Project</div>
          <div className="model-button save-draft" onClick={(e) => {this.createProject(e, 'draft'); this.props.close(e)}}>Save Draft</div>
        </div>
      </div>
    )
  }

}

export default NewProject;