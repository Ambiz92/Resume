import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var language = this.props.data.language.map(function (language) {
        var className = 'bar-expand ' + language.name.toLowerCase();
        return <li key={language.name}><span style={{ width: language.level }} className={className}></span><em>{language.name}</em><i className={language.image}></i></li>
      })
      var framework = this.props.data.framework.map(function (framework) {
        var className = 'bar-expand ' + framework.name.toLowerCase();
        return <li key={framework.name}><span style={{ width: framework.level }} className={className}></span><em>{framework.name}</em></li>
      })
      var software = this.props.data.software.map(function (software) {
        var className = 'bar-expand ' + software.name.toLowerCase();
        return <li key={software.name}><span style={{ width: software.level }} className={className}></span><em>{software.name}</em></li>
      })
      var cloudComputer = this.props.data.cloudComputer.map(function (cloudComputer) {
        var className = 'bar-expand ' + cloudComputer.name.toLowerCase();
        return <li key={cloudComputer.name}><span style={{ width: cloudComputer.level }} className={className}></span><em>{cloudComputer.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>
          </div>

          {/* START - language section */}
          <div>
            <div className="bars">
              <ul className="skills">
                <div className='three columns header-col'>
                  <h1><span>Language</span></h1>
                </div>
              </ul>
              <div className='nine columns skills-col'>
                <ul className='skills'>
                  {language}
                </ul>
              </div>
            </div>
          </div>
          {/* END - language section */}

          {/* START - framework section */}
          <div>
            <div className="bars">
              <ul className="skills">
                <div className='three columns header-col'>
                  <h1><span>Framework</span></h1>
                </div>
              </ul>
              <div className='nine columns skills-col'>
                <ul className='skills'>
                  {framework}
                </ul>
              </div>
            </div>
          </div>
          {/* END - framework section */}

          {/* START - software section */}
          <div>
            <div className="bars">
              <ul className="skills">
                <div className='three columns header-col'>
                  <h1><span>Software</span></h1>
                </div>
              </ul>
              <div className='nine columns skills-col'>
                <ul className='skills'>
                  {software}
                </ul>
              </div>
            </div>
          </div>
          {/* END - software section */}

          {/* START - cloudComputer section */}
          <div>
            <div className="bars">
              <ul className="skills">
                <div className='three columns header-col'>
                  <h1><span>Cloud Computer</span></h1>
                </div>
              </ul>
              <div className='nine columns skills-col'>
                <ul className='skills'>
                  {cloudComputer}
                </ul>
              </div>
            </div>
          </div>
          {/* END - cloudComputer section */}

        </div>
      </section>
    );
  }
}

export default Resume;
