import ReactDOM from 'react-dom'
import ResultComponent from './ResultComponent'

export const RenderComponent = () => {
	ReactDOM.render(<ResultComponent />, document.getElementById('result'))
}