'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building2 } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		company: "Freelance",
		designation: "Full Stack Web3 Developer",
		duration: "02/2024 - Present",
		companyImg: "/experience/freelance.jpeg",
		description: (
			<>
				<ul>
					<li>
						Helped teams build programs and systems, serving business needs.
					</li>
					<li>Implemented Web3 solutions into front-end.</li>
					<li>
						Fully covered front-end implementations from blockchain and Web3
						tools into NFT minting app.
					</li>
					<li>
						Worked closely with business stakeholders to identify requirements
						and develop solutions accordingly.
					</li>
					<li>
						Troubleshot minor problems and reported larger technical issues.
					</li>
					<li>
						Used Web3 tools such as wagmi, ethers.js, and others to integrate
						blockchain functionality. Worked with Ethereum-based solutions,
						interacting with smart contracts and handling transactions, as well
						as utilizing Solana Web3.js library for interacting with the Solana
						blockchain, enabling seamless wallet integration, transaction
						signing, and token management. Integrated various Web3 tools to
						support multi-chain interactions, enhancing blockchain
						interoperability.
					</li>
					<li>Started learning Solidity.</li>
				</ul>
			</>
		),
	},
	{
		company: "Optimum Partners",
		designation: "Full-stack Developer",
		duration: "02/2024 - 05/2024",
		companyImg: "/experience/optimum_partners.jpeg",
		description: (
			<>
				<ul>
					<li>Working with US-based clients in an international setting. ·</li>
					<li>
						Taking part in client meetings and demos to demonstrate product
						features and gain insights.
					</li>
					<li>
						Participating in sprint planning, sprint reviews, daily stand-ups,
						and other Agile rituals. ·
					</li>
					<li>
						I am collaborating with Product Owners, Scrum Masters, and team
						members to prioritize tasks and deliver features.
					</li>
					<li>
						I am working with geographically diverse teams and stakeholders.
					</li>
					<li>
						I&apos;m working on international newspaper&apos;s website and
						it&apos;s providing tools.
					</li>
				</ul>
			</>
		),
	},
	{
		company: "Solicy",
		designation: "Full-stack Developer",
		duration: "09/2022 - 02/2024",
		companyImg: "/experience/solicy_logo.jpeg",
		description: (
			<>
				<ul>
					<li>
						Developing and maintaining web and mobile applications using
						JavaScript, and other relevant programming languages and frameworks.
					</li>
					<li>
						Implementing responsive design and cross-browser compatibility
						ensures that applications work effectively on all devices and
						platforms.
					</li>
					<li>
						Troubleshooting and debugging frontend code to ensure it works
						properly across different devices and platforms.
					</li>
					<li>
						Some big projects I&apos;ve worked on are the back-end and front-end
						parts of the Fintech project designed for investing with tokens and
						coins, a document generator project that used the OpenAI API, an
						online travel agency&apos;s website, and a state-of-the-art social
						network platform designed to deliver joy on demand.
					</li>
				</ul>
			</>
		),
	},
	{
		company: "Upwork",
		designation: "Full-stack Developer",
		duration: "05/2019 - 09/2022",
		companyImg: "/experience/upwork.png",
		description: (
			<>
				<ul>
					<li>
						Involved in project plan meetings with clients, and team members to
						analyze business requirements.
					</li>
					<li>
						Building, testing, and deploying software applications and features.
					</li>
					<li>
						Some big projects I&apos;ve worked on are the front-end parts of the
						Web3 project designed for revolutionizing the real estate investment
						landscape: leveraged blockchain, cryptocurrency, and NFT
						technologies, Fintech project based on alpha vantage API and Yahoo
						finance API, working on algorithms that do calculations for best
						investment projects. Also, I created an AI Chat app based on openAI
						API, which is for education industry.
					</li>
				</ul>
			</>
		),
	},
];

const Experience = () => {
	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Professional Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				{experiences.map((exp, index) => (
					<ScrollAnimation key={exp.company}>
						<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
								<div className="p-6 sm:p-8">
									<div className="flex items-center gap-3 mb-4 sm:mb-6">
										<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
											<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
										</div>
										<div>
											<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.designation}</h3>
											<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
										<span>{exp.duration}</span>
									</div>

									<div className="experience-description">
										{exp.description}
									</div>
								</div>

								<div className="relative hidden md:block">
									<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
										<img
											src={exp.companyImg}
											alt={exp.company}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent group-hover:scale-105 transition-transform duration-500" />
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;