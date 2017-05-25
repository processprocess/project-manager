import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InProgress extends Component {
  static propTypes = {
    projects: PropTypes.object.isRequired,
    projKey: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      isComplete: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.setState({ project: this.props.projects[this.props.projKey] })
  }

  handleInputChange(){
    console.log('clicked');
  }

  render(){
    const project = this.props.projects[this.props.projKey]
    return (
      <div className="modal-style in-progress">
        <div className="model-header">
          <div className="model-title">Listed | View Status</div>
          <div className="model-close" onClick={(e) => this.props.close(e)}>X</div>
        </div>

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

          <div className="creative-wrapper">
            <div className="applicant-header">Your Creative:</div>
            <div className="creative-info">
              <img className="picture" src={this.state.project.creative.image} alt="Applicant"/>
              <div className="applicant-details">

                <div className="name">{this.state.project.creative.name}</div>
                <div className="creative-detail">{this.state.project.creative.desc}</div>

                <div className="name">Contact Information</div>
                <div className="creative-detail">{this.state.project.creative.contact.phone}</div>
                <div className="creative-detail">{this.state.project.creative.contact.email}</div>

                <div className="applicant-buttons">
                  <div className="applicant-button hire">Request Invoice</div>
                </div>

              </div>
            </div>
          </div>

          <div className="model-footer">
            <label>
              Mark Project Complete:
              <input
                name="complete"
                type="checkbox"
                ref={(input) => this.name = input}
                onChange={this.handleInputChange} />
            </label>
          </div>
      </div>
    )
  }
}

export default InProgress;