import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Davit Khachatryan - Full Stack Web3 Developer',
	description: 'Full Stack Web3 Developer specializing in blockchain solutions, Web3 integrations, React.js, Next.js, Node.js, and modern web technologies.',
	keywords: 'Web3 Developer, Full Stack Developer, Blockchain Developer, React Developer, Next.js Expert, Web3.js, Ethers.js, Wagmi, Ethereum, Solana, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer',
	authors: [{ name: 'Davit Khachatryan' }],
	creator: 'Davit Khachatryan',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://yourportfolio.vercel.app/',
		title: 'Davit Khachatryan - Full Stack Web3 Developer',
		description: 'Full Stack Web3 Developer specializing in blockchain solutions, Web3 integrations, and modern web technologies.',
		siteName: 'Davit Khachatryan Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Davit Khachatryan - Full Stack Web3 Developer',
		description: 'Full Stack Web3 Developer specializing in blockchain solutions, Web3 integrations, and modern web technologies.',
		creator: '@davitkhachatryan',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://yourportfolio.vercel.app'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}