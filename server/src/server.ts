import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './lib/routes';

const app = Fastify()

// Para que apenas o localhost3000 possa consumir os dados do DB:
// app.register(cors, {
//     origin: ['http://localhost:3000']
// })

// Para que qualquer aplicação do front possa consumir os dados do DB:
app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running')
})