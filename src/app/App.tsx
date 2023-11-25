import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<button type='button' onClick={toggleTheme}>
				TOGGLE
			</button>
			<AppRouter />
		</div>
	);
};
