import React from 'react'

type Props = {}

export default function Testimonials({}: Props) {
  return (
    <div>
        <div className="wrapperv">
	<div className="outerv">
		<div className="cardv first">
        {/* style="--dealy:-1;" */}
			<div className="content">
				
				<div className="detailsv">
					<span className="namev">Manoj Adhikari</span>
					<p>Frontend Developer</p>
				</div>
			</div>
			<a href="#">Like</a>
		</div>

		<div className="cardv second">
        {/* style="--dealy:0;" */}
			<div className="contentv">
				
				<div className="detailsv">
					<span className="namev">Shivam Adhikari</span>
					<p>YouTuber & Blogger</p>
				</div>
			</div>
			<a href="#">Like</a>
		</div>

		<div className="cardv third">
        {/* style="--dealy:1;" */}
			<div className="contentv">
				
				<div className="detailsv">
					<span className="namev">Aradhaya Bisht</span>
					<p>Freelancer & Vlogger</p>
				</div>
			</div>
			<a href="#">Like</a>
		</div>

		<div className="cardv fourth">
        {/* style="--dealy:2;" */}
			<div className="contentv">
				
				<div className="detailsv">
					<span className="namev">Anav Bisht</span>
					<p>Backend Developer</p>
				</div>
			</div>
			<a href="#">Like</a>
		</div>

		<div className="cardv fifth">
        {/* style="--dealy:2;" */}
			<div className="contentv">
				
				<div className="detailsv">
					<span className="namev">Jasmine Bisht</span>
					<p>Teacher & Advertiser</p>
				</div>
			</div>
			<a href="#">Like</a>
		</div>
	</div>
</div>
    </div>
  )
}