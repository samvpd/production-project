import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};
