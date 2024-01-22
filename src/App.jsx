import { useDispatch, useSelector } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount,
} from './redux/features/counter'
import { setName } from './redux/features/name'

export default function App() {
	const count = useSelector(state => state.counter.value)
	const name = useSelector(state => state.name.name)
	const dispatch = useDispatch()

	return (
		<div className='flex flex-col'>
			<div className='flex flex-col items-center'>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>

				<button
					aria-label='Increment value by 10'
					onClick={() => dispatch(incrementByAmount(10))}
				>
					Increment value by 10
				</button>
			</div>
			<div>
				<input
					type='text'
					placeholder='Enter your name'
					onChange={e => dispatch(setName(e.target.value))}
				/>
				<span>{name}</span>
			</div>
		</div>
	)
}
