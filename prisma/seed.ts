import { prisma } from './prisma-client';

async function up() {

}
//4:27 скрипт для генерации тестовых данных
async function down() {
	await prisma.user.createMany({
		data: [
			{},
			{}
		]
	})
}

async function main() {
	try {
		await down();
		await up();
	}
	catch (e) {
		console.error(e);
	}
}