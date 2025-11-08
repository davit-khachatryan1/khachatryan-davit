'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Kontainer',
		type: 'WEB-APP',
		image: '/projects_img/project-1.png',
		live: 'https://kontainer.com/da',
		tags: ['Web Application']
	},
	{
		title: 'SolIT Website',
		type: 'WEB-APP',
		image: '/projects_img/project-2.png',
		live: 'https://solit-llc.com/',
		tags: ['Web Application']
	},
	{
		title: 'Dequity',
		type: 'WEB-APP',
		image: '/projects_img/project-3.png',
		live: 'https://dequity.io/?utm_content=light',
		tags: ['Web Application']
	},
	{
		title: 'Blocknite',
		type: 'WEB-APP',
		image: '/projects_img/project-4.png',
		live: 'https://blocknite.vercel.app/',
		tags: ['Web Application']
	},
	{
		title: 'YouMeme',
		type: 'WEB-APP',
		image: '/projects_img/project-5.png',
		live: 'https://youmeme.com/',
		tags: ['Web Application']
	},
	{
		title: 'Passbase',
		type: 'WEB-APP',
		image: '/projects_img/project-6.png',
		live: 'https://parallelmarkets.com/?utm_source=passbase.com',
		tags: ['Web Application']
	},
	{
		title: 'CryptoPool',
		type: 'WEB-APP',
		image: '/projects_img/project-1.png',
		live: 'https://www.cryptopool.money/',
		tags: ['Web Application']
	},
	{
		title: 'Raizers',
		type: 'WEB-APP',
		image: '/projects_img/project-2.png',
		live: 'https://raize-front.web.app/',
		tags: ['Web Application']
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-4">{project.title}</h3>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.type && (
										<span className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{project.type}
										</span>
									)}
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<ExternalLink className="w-4 h-4" />
										<span>Live</span>
									</a>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;