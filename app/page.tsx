import { Container, Title, Filters } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { TopBar } from '@/components/shared/top-bar';

export default function Page() {
	return <>
		<Container className='mt-10'>
			<Title text="Все пиццы" size="lg" className='font-extrabold' />
		</Container>

		<TopBar />

		<Container className='mt-10 pb-14'>
			<div className='flex gap-[60px]'>
				{/*Фильрация*/}
				<div className='w-[250px]'>
					<Filters />
				</div>

				{/*Список товаров*/}
				<div className='flex-1'>
					<div className='flex flex-col gap-16'>
						<ProductCard id={0} name={'Чизбургер-пицца'} price={550} imageUrl={'https://media.dodostatic.net/image/r:584x584/0195dc9a4c9b7351921143730d531529.avif'} />
					</div>
				</div>
			</div>
		</Container>
	</>;
}
