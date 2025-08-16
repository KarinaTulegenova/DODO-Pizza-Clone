import { Container, Title } from '@/components/shared';
import { TopBar } from '@/components/shared/top-bar';

export default function Page() {
	return <>
		<Container className='mt-10'>
			<Title text="Все пиццы" size="lg" className='font-extrabold' />
		</Container>
		<TopBar />
		<div style={{ height: '3000px' }}></div>
	</>;
}
