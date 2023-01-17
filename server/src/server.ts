import Fastify from 'fastify';
import cors from '@fastify/cors';
import {PrismaClient} from '@prisma/client';

const app = Fastify()
const prisma = new PrismaClient()

// Para que apenas o localhost3000 possa consumir os dados do DB:
// app.register(cors, {
//     origin: ['http://localhost:3000']
// })

// Para que qualquer aplicação do front possa consumir os dados do DB:
app.register(cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running')
})