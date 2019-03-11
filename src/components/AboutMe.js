import React, { Component } from 'react'

export class AboutMe extends Component {
    render() {
        return (
            <>
                <section>
                    <h2 className='window-text-centered'>about me</h2>
                    <p className='window-text-centered'>
                        I am a bike mechanic turned software engineer. I feel passionately that software should benefit people and I am actively seeking a career that will allow me to apply my skills towards that goal.
                    </p>
                    <p className='window-text-centered'>
                        In my free time, I balance my work by seeking out challenges in natural environments primarily mountain biking, trail running, backpacking, and backcountry skiing. If you're interested in grabbing a coffee and/or getting lost in the woods, then drop me a line!
                    </p>
                    <h4 className='window-text-centered'>get in touch</h4>
                    <section className='window-text-centered'>
                        <a href='https://rebrand.ly/linkedin-website'><button className='link-button'>LinkedIn</button></a>
                        <a href='https://rebrand.ly/gh-website'><button className='link-button'>GitHub</button></a>
                        <a href='mailto:paul.mourer@gmail.com'><button className='link-button'>Email</button></a>
                    </section>
                </section>
            </>
        )
    }
}

export default AboutMe
