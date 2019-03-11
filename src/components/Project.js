import React, { Component } from 'react'
import ModalImage from 'react-modal-image'

export class Project extends Component {

    renderButtons = () => {
        if (typeof this.props.project.github === 'object') {
            return Object.keys(this.props.project.github).map(key => {
            return (<a href={this.props.project.github[key]}><button className='link-button'>Github ({key})</button></a>)
                }
            )
        } else {
            return (
                <a href={this.props.project.github}><button className='link-button'>GitHub</button></a>
            )
        }
    }
    render() {
        return (
            <>
                <section>
                    <h2 className='window-text-centered'>{this.props.project.name}</h2>
                    <div className='image-centerer'>
                        <ModalImage alt='project preview' className='modal' hideDownload='true' small={this.props.project.small} large={this.props.project.large} />
                    </div>
                    <p className='window-text-centered'>
                        {this.props.project.description}
                    </p>
                </section>
                <section className='window-text-centered'>
                    {this.renderButtons()}
                    {this.props.project.hosted ? <a href={this.props.project.hosted}><button className='link-button'>See it live!</button></a> : null}
                </section>
            </>

        )
    }
}

export default Project
