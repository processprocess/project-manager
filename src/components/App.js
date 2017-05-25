import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import sampleProjects from '../sample-projects';

// TODO:  sort projects
// TODO:  headers for each section
// TODO:  confirm box
// TODO:  tags for each project
// TODO:  select date from calendar
// TODO:  check data when it's submitted
// TODO:  footer
// TODO:  not found pages
// TODO:  firebase connection
// TODO:  multiple users
// TODO:  add tags project
// TODO:  new applicant badge

class App extends Component {
  constructor() {
    super();
    this.addProject = this.addProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentWillMount() {
    this.setState({
      projects: sampleProjects
    })
  }

  addProject(newProject) {
    const projects = {...this.state.projects};
    const timeStamp = Date.now();
    projects[`project-${timeStamp}`] = newProject;
    this.setState({ projects });
  }

  updateProject(editedProject, key) {
    const projects = {...this.state.projects};
    projects[key] = editedProject;
    this.setState({ projects });
  }

  deleteProject(key) {
    const projects = {...this.state.projects};
    delete projects[key];
    this.setState({ projects });
  }

  render() {
    return (
      <div>
        <Header
          path={this.props.match.path}
          location={this.props.location.pathname} />
        <Projects
          addProject={this.addProject}
          deleteProject={this.deleteProject}
          updateProject={this.updateProject}
          projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
