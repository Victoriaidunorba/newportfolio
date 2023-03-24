import React from 'react'

type Props = {}

export default function Butt({}: Props) {
  return (
    <div>
        <input type="checkbox" name="send" id="send" />
<label htmlFor="send" className="send">
	<div className="rotate">
		<div className="move">
			<div className="part left"></div>
			<div className="part right"></div>
		</div>
	</div>
</label>
    </div>
  )
}