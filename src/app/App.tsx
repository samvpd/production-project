import { Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<button type='button' onClick={toggleTheme}>
				TOGGLE
			</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>О сайте</Link>
			<AppRouter />
		</div>
	);
};
