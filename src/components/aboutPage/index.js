import React from 'react';
import kings from '../../assets/images/kings.jpg';

import './style.css';

function AboutPage() {
	return (
		<div className="about-background container-fluid">
			<div className="info">
				<div className="picture">
					<div className="pic">
						<img src={kings} alt="My pic" className="kings" />
					</div>
				</div>
				<div className="text w-50">
					<div className="first">
						<h1>About Me</h1>
						<p>
							Full-stack Software Developer skilled at technical leadership,
							communication, and presentations. Experienced in the full project
							life cycle from design to implementation to integration.
							<br></br>A graduate of Computer/Mathematics Education from Enugu
							State University of Science and Technology, Enugu.
							<br></br>
							An easy going person who understands the individual differences of
							Human nature and deals with everybody according to each personality.
              
						</p>
					</div>
					<div className="second">
						<div>
							<h2>Contact Details</h2>
							<p>
								Email: <strong>kingsconsult001@gmail.com </strong>
							</p>
							<p>
								Phone: <strong>+234 806 605 6233</strong>
							</p>
						</div>
						<div>
							<a href="https://docs.google.com/document/d/1jhg8dGrZu-o9k9t9tXVS2xl2I-ykJduYnw4T5ewLlNY/edit?usp=sharing">
								<button className="download-button">Download Resume</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
