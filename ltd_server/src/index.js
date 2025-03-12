import Fastify from "fastify";
import { UserController } from "./controllers/user_controller.js";

/**
 * @type {import('fastify').FastifyInstance}
 */
const server = Fastify({ logger: true });


/**
 * @type {UserController}
 */
const userController = new UserController(server);
server.register(userController.getController, { prefix: '/api/user' });


try {
    userController;
    server.get("/", async (request, reply) => {
        reply.code(200).send({ message: "Hello World" });
    });

    /**
     * @type {import('fastify').FastifyListenOptions}
     */
    let fastifyListenOptions = {
        port: 3000
    };

    server.listen(fastifyListenOptions);
} catch (error) {
    server.log.error(error);
    process.exit(1);
}