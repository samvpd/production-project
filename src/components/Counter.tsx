import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const handleCount = () => {
		setCount((prev) => prev + 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button className={classes.btn} type='button' onClick={handleCount}>
				Increment
			</button>
		</div>
	);
};
