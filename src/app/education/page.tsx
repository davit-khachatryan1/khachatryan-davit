import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education',
	description: 'Educational background including B.Tech in Computer Science and Engineering.',
};

export default function EducationPage() {
	return <Education />;
}