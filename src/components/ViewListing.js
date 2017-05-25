import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewListing extends Component {
  static propTypes = {
    projects: PropTypes.object.isRequired,
    projKey: PropTypes.string,
    updateProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      editable: false,
    };
    this.editListing = this.editListing.bind(this);
    this.createEditedProject = this.createEditedProject.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
    this.revertEdits = this.revertEdits.bind(this);
    this.renderApplicants = this.renderApplicants.bind(this);
  }

  componentWillMount(){
    this.setState({ project: this.props.projects[this.props.projKey] })
  }

  createEditedProject() {
    const project = this.state.project;
    const editedProject = {
      name: this.name.value,
      status: project.status,
      type: project.type,
      hours: this.hours.value,
      rate: this.rate.value,
      deadline: this.deadline.value,
      desc: this.desc.value,
      applicants: project.applicants,
    }
    this.props.updateProject(editedProject, this.props.projKey);
  }

  editListing() {
    if (!this.state.editable) {
      this.setState({ editable: true });
    } else {
      this.createEditedProject();
      this.setState({ editable: false });
    }
  }

  revertEdits() {
    const project = this.props.projects[this.props.projKey];
    this.name.value = project.name;
    this.hours.value = project.hours;
    this.rate.value = project.rate;
    this.deadline.value = project.deadline;
    this.desc.value = project.desc;
    this.setState({ editable: false });
  }

  cancelButton(){
    if(!this.state.editable){
      return null;
    } else {
      return(
        <div className="model-button delete-project" onClick={this.revertEdits}>Cancel Edits</div>
      )
    }
  }

  renderApplicants(key) {
    const applicant = this.state.project.applicants[key];
    return (
      <div className="applicant" key={key}>
        <img className="picture" src={applicant.image} alt="Applicant"/>
        <div className="applicant-details">
          <div className="name">{applicant.name}</div>
          <div className="desc">{applicant.desc}</div>
          <div className="applicant-buttons">
            <div className="applicant-button view">View Applicant</div>
            <div className="applicant-button hire">Offer Hire</div>
            <div className="applicant-button delete">Delete</div>
          </div>
        </div>
      </div>
    )
  }

  render(){
    const project = this.props.projects[this.props.projKey]
    return (
      <div className={`modal-style ${!this.state.editable ? 'disabled' : ''} listed`}>
        <div className="model-header">
          <div className="model-title">Listed | View Status</div>
          <div className="model-close" onClick={(e) => this.props.close(e)}>X</div>
        </div>
          <form disabled='true'>
            <fieldset disabled={!this.state.editable}>
              <div className="detail-header">Service Needed:</div>
              <input ref={(input) => this.name = input} className="name-input disabled" defaultValue={project.name} type="text" name="name" placeholder="ex: Graphic Design"/>
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
            </fieldset>
            <div className="form-footer">
              <div className="model-button save-draft" onClick={this.editListing}>{!this.state.editable ? 'Edit Listing' : 'Save Changes'}</div>
              {this.cancelButton()}
            </div>
          </form>
          <div className="applicants-wrapper">
            <div className="applicant-header">Applicants:</div>
            { this.state.project.applicants ? Object.keys(this.props.projects[this.props.projKey].applicants).map(this.renderApplicants) : 'no applicants yet' }
          </div>
          <div className="share-wrapper">
            <div className="detail-header">Share on social to spread the word!</div>
            <div className="social-icons">
              <div className="social-icon"></div>
              <div className="social-icon"></div>
              <div className="social-icon"></div>
              <div className="social-icon"></div>
            </div>
          </div>
          <div className="model-footer">
            <div className="model-button delete-project" onClick={(e) => {this.props.deleteProject(this.props.projKey); this.props.close(e)}}>Delete Listing</div>
        </div>
      </div>
    )
  }
}

export default ViewListing;