import React, { Component } from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';

class Projects extends Component {
  static propTypes = {
    addProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired
  }
  constructor(){
    super();
    this.renderProjects = this.renderProjects.bind(this);
  }

  componentWillMount() {
    this.setState({
      isModalOpen: false
    })
  }

  openModal(type, key) {
    this.setState({ isModalOpen: true, modalVal: type, projKey: key})
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  renderProjects(key) {
    const project = this.props.projects[key];
    return (
      <div className={`project-post ${project.type}`} key={key}>
        <div className={`status ${project.type}`}>{project.status}</div>
        <div className="project-name">{project.name}</div>
        <div className="details-holder">
          <div>
            <div className="detail-header">Total Hours:</div>
            <div className="dash"></div>
            <div className="detail">{project.hours}</div>
          </div>
          <div>
            <div className="detail-header">Flat Rate:</div>
            <div className="dash"></div>
            <div className="detail">{project.rate}</div>
          </div>
          <div>
            <div className="detail-header">Deadline:</div>
            <div className="dash"></div>
            <div className="detail">{project.deadline}</div>
          </div>
        </div>
        <div className="detail-header">Description:</div>
        <div className="dash"></div>
        <div className="desc">{project.desc}</div>
        <div className={`manage-button ${project.type}`} onClick={() => this.openModal(project.type, key)}>Manage Project</div>
      </div>
    );
  }

  render(){
    return (
      <div>
        <div className="projects-wrapper">
          {Object.keys(this.props.projects).map(this.renderProjects)}
          <div className="new-project" onClick={() => this.openModal("newProject")}>
            <div className="message">Start a new project. <br />Connect with talented freelancers.</div>
            <div className="new-project-button">New Project</div>
          </div>
        </div>
        <Modal
          addProject={this.props.addProject}
          deleteProject={this.props.deleteProject}
          updateProject={this.props.updateProject}
          projects={this.props.projects}
          modalVal={this.state.modalVal}
          projKey={this.state.projKey}
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()} />
      </div>
    )
  }
}

export default Projects;