import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
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
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route />
				</Routes>
			</Suspense>
		</div>
	);
};
