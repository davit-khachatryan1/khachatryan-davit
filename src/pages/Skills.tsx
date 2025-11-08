'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, Wrench, Globe,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { FaHtml5, FaCss3, FaSass, FaReact, FaNodeJs, FaVuejs, FaAngular, FaGithub } from 'react-icons/fa';
import { TbBrandJavascript, TbBrandTypescript, TbBrandBootstrap, TbBrandRedux, TbBrandReactNative } from 'react-icons/tb';
import { SiNextdotjs, SiNuxtdotjs, SiExpress, SiPostman, SiGnubash, SiWeb3Dotjs, SiEthers, SiWagmi, SiEthereum, SiSolana } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { BsGit } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi';

const skills = [
	{
		category: 'Front-End Fundamentals',
		icon: <Layout className="w-6 h-6" />,
		items: [
			{ name: 'HTML5', icon: <FaHtml5 className="w-5 h-5" /> },
			{ name: 'CSS3', icon: <FaCss3 className="w-5 h-5" /> },
			{ name: 'Javascript', icon: <TbBrandJavascript className="w-5 h-5" /> },
			{ name: 'Typescript', icon: <TbBrandTypescript className="w-5 h-5" /> },
			{ name: 'SASS', icon: <FaSass className="w-5 h-5" /> },
			{ name: 'Bootstrap', icon: <TbBrandBootstrap className="w-5 h-5" /> }
		]
	},
	{
		category: 'Front-End Frameworks',
		icon: <Code2 className="w-6 h-6" />,
		items: [
			{ name: 'ReactJS', icon: <FaReact className="w-5 h-5" /> },
			{ name: 'NextJS', icon: <SiNextdotjs className="w-5 h-5" /> },
			{ name: 'Redux', icon: <TbBrandRedux className="w-5 h-5" /> },
			{ name: 'VueJS', icon: <FaVuejs className="w-5 h-5" /> },
			{ name: 'Nuxt', icon: <SiNuxtdotjs className="w-5 h-5" /> },
			{ name: 'Angular', icon: <FaAngular className="w-5 h-5" /> },
			{ name: 'React Native', icon: <TbBrandReactNative className="w-5 h-5" /> }
		]
	},
	{
		category: 'Back-End Development',
		icon: <Server className="w-6 h-6" />,
		items: [
			{ name: 'NodeJs', icon: <FaNodeJs className="w-5 h-5" /> },
			{ name: 'Express', icon: <SiExpress className="w-5 h-5" /> }
		]
	},
	{
		category: 'Databases',
		icon: <Database className="w-6 h-6" />,
		items: [
			{ name: 'Postgres', icon: <BiLogoPostgresql className="w-5 h-5" /> },
			{ name: 'MongoDB', icon: <DiMongodb className="w-5 h-5" /> }
		]
	},
	{
		category: 'Tools & APIs',
		icon: <Wrench className="w-6 h-6" />,
		items: [
			{ name: 'Postman', icon: <SiPostman className="w-5 h-5" /> },
			{ name: 'Git', icon: <BsGit className="w-5 h-5" /> },
			{ name: 'Github', icon: <FaGithub className="w-5 h-5" /> },
			{ name: 'ChatGPT', icon: <GiArtificialIntelligence className="w-5 h-5" /> },
			{ name: 'Bash', icon: <SiGnubash className="w-5 h-5" /> }
		]
	},
	{
		category: 'Web3 & Blockchain',
		icon: <Globe className="w-6 h-6" />,
		items: [
			{ name: 'Web3.js', icon: <SiWeb3Dotjs className="w-5 h-5" /> },
			{ name: 'Ethers.js', icon: <SiEthers className="w-5 h-5" /> },
			{ name: 'Wagmi', icon: <SiWagmi className="w-5 h-5" /> },
			{ name: 'Ethereum', icon: <SiEthereum className="w-5 h-5" /> },
			{ name: 'Solana', icon: <SiSolana className="w-5 h-5" /> }
		]
	}
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A comprehensive overview of my technical expertise and tools I work with
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;