import Troops from '../classes/troops'

const ResultComponent: React.FC = () => {
	const num = parseInt((document.getElementById('amount') as HTMLInputElement).value)
	const troops = new Troops(num)
	return (
		<div style={{ fontSize: '18px' }}><p>{troops.show()}</p></div>
	)
}

export default ResultComponent