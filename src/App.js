import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import AboutPage from './components/aboutPage';
import Navbar from './components/navbar';
import SkillsPage from './components/skillsPage';
import ContactPage from './components/contactPage';
import WithListLoading from './components/repos/index';
import List from './components/repos/list';
import Article from './components/articles/articles';
import WithArticleLoading from './components/articles/index';
import Axios from 'axios';

function App() {
	const ListLoading = WithListLoading(List);
	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const user = `https://api.github.com/users/kingsconsult/repos`;
		fetch(user)
			.then((res) => res.json())
			.then((repos) => {
				setAppState({ loading: false, repos: repos });
			});
	}, [setAppState]);

	const ArticleLoading = WithArticleLoading(Article);
	const [articleState, setArticleState] = useState({
		loading: false,
		articles: null,
	});

	useEffect(() => {
		setArticleState({ loading: true });
		const posts = `https://dev.to/api/articles/me/published`;

		// const posts = `https://dev.to/api/articles/me/published?api-key=k3Hy5qr73QhXrmHLXhpEh6CQ`;
		//   Axios.get("https://dev.to/api/articles/me/published",{
		//     headers:{
		//       "api-key": "k3Hy5qr73QhXrmHLXhpEh6CQ",
		//       "access-control-allow-origin":"*",
		//       "Access-Control-Allow-Credentials": "true",
		//       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
		//       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
		//       "Content-Type": "application/json, charset=utf-8"
		// },
		//   }).then((val)=>console.log(val))
		fetch(posts, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
				'Access-Control-Allow-Headers':
					'Origin, X-Requested-With, Content-Type, Accept, Authorization',
			},
		})
    .then((res) => res.json())
    .then((articles) => {
				setArticleState({ loading: false, articles: articles });
			});
	}, [setArticleState]);

	return (
		<div className="App">
			<header className="App-header">
				<div className="main-body">
					<Navbar />
					<section id="home"> <LandingPage /> </section>
					<section id="about"> <AboutPage /> </section>
					<section id="skills"> <SkillsPage /> </section>
					<section id="articles"> <ArticleLoading isLoading={articleState.loading} repos={articleState.articles} /> </section>
					<section id="works"> <ListLoading isLoading={appState.loading} repos={appState.repos} /> </section>
					<section id="contact-us"> <ContactPage /> </section>
				</div>
			</header>
		</div>
	);
}

export default App;
