import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewProject from './NewProject';
import EditProject from './EditProject';
import ViewListing from './ViewListing';
import InProgress from './InProgress';

class Modal extends Component {
  static propTypes = {
    addProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
    modalVal: PropTypes.string,
    projKey: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(){
    super();
    this.close = this.close.bind(this);
    this.renderModel = this.renderModel.bind(this);
  }

  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  renderModel() {
    console.log(this.props.modalVal);
    if (this.props.modalVal === 'newProject') {
      return (
        <div>
          <NewProject
            close={this.close}
            addProject={this.props.addProject} />
        </div>
      )
    } else if (this.props.modalVal === 'draft') {
      return (
        <div>
          <EditProject
            close={this.close}
            deleteProject={this.props.deleteProject}
            updateProject={this.props.updateProject}
            projects={this.props.projects}
            projKey={this.props.projKey} />
        </div>
      )
    } else if (this.props.modalVal === 'listed') {
      return (
        <div>
          <ViewListing
            close={this.close}
            deleteProject={this.props.deleteProject}
            updateProject={this.props.updateProject}
            projects={this.props.projects}
            projKey={this.props.projKey} />
        </div>
      )
    } else if (this.props.modalVal === 'in-progress') {
      return (
        <div>
          <InProgress
            close={this.close}
            projects={this.props.projects}
            projKey={this.props.projKey} />
        </div>
      )
    }
  }

  render() {
    if (this.props.isOpen === false) return null;
    return (
      <div>
        <div>
          <div>
            {this.renderModel()}
          </div>
          <div className="back-drop" onClick={(e) => this.close(e)}></div>
        </div>
      </div>
    )
  }
}

export default Modal;