import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditProject extends Component {
  static propTypes = {
    deleteProject: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
    projKey: PropTypes.string,
    close: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.createEditedProject = this.createEditedProject.bind(this);
  }

  createEditedProject(e, type) {
    const project = this.props.projects[this.props.projKey]
    if (e) e.preventDefault();
    const editedProject = {
      name: this.name.value,
      status: type === 'draft' ? project.status : 'Listed | View Status',
      type: type === 'draft' ? project.type : 'listed',
      hours: this.hours.value,
      rate: this.rate.value,
      deadline: this.deadline.value,
      desc: this.desc.value,
    }
    this.props.updateProject(editedProject, this.props.projKey);
  }

  render(){
    const project = this.props.projects[this.props.projKey]
    return (
      <div className="modal-style draft">
        <div className="model-header">
          <div className="model-title">Draft | Edit & Post</div>
          <div className="model-close" onClick={(e) => this.props.close(e)}>X</div>
        </div>
        <form>
          <div className="detail-header">Service Needed:</div>
          <input ref={(input) => this.name = input} className="name-input" defaultValue={project.name} type="text" name="name" placeholder="ex: Graphic Design"/>
          <div className="detail-form">
            <div className="detail">
              <div className="detail-header">Total Hours:</div>
              <input ref={(input) => this.hours = input} className="detail-input" defaultValue={project.hours} type="text" name="hours" placeholder="ex: 7"/>
            </div>
            <div className="detail">
              <div className="detail-header">Flat Rate:</div>
              <input ref={(input) => this.rate = input} className="detail-input" defaultValue={project.rate} type="text" name="rate" placeholder="ex; 200"/>
            </div>
            <div className="detail">
              <div className="detail-header">Deadline:</div>
              <input ref={(input) => this.deadline = input} className="detail-input" defaultValue={project.deadline} type="text" name="deadline" placeholder="select"/>
            </div>
          </div>
          <div className="detail-header">Description:</div>
          <textarea ref={(input) => this.desc = input} className="description-input" defaultValue={project.desc} type="text" name="desc" placeholder="Project Description" ></textarea>
        </form>
        <div className="model-footer">
          <div className="model-button list-project" onClick={(e) => {this.createEditedProject(e, 'listed'); this.props.close(e)}}>List Project</div>
          <div className="model-button save-draft" onClick={(e) => {this.createEditedProject(e, 'draft'); this.props.close(e)}}>Save Draft</div>
          <div className="model-button delete-project" onClick={(e) => {this.props.deleteProject(this.props.projKey); this.props.close(e)}}>Delete</div>
        </div>
      </div>
    )
  }
}

export default EditProject;