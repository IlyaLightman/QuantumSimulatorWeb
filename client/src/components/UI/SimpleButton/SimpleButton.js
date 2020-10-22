import React from 'react'
import './SimpleButton.scss'

const SimpleButton = props => (
	<div className='SimpleButton'
		onClick={async () => await props.onClick()}
	>
		<p>{props.title}</p>
	</div>
)

export default SimpleButton