export class UserController {
    /**
     * @param {import('fastify').FastifyInstance} server Fastify server instance
     */
    constructor(server) {
        /**
         * @property {import('fastify').FastifyInstance} server Fastify server instance
         */
        this.server = server;
    }

    /**
     * 
     * @param {import('fastify').FastifyInstance} fastify  Fastify instance
     * @param {import('fastify').FastifyPluginOptions} options options
     * @param {function():void} done function to call when done
     */
    getController(fastify, options, done){
        /**
         * @type {import('fastify').FastifySchema}
         */
        const schema = {
            body: {
                type: 'object',
                properties: {
                    name: { 
                        type: 'string',
                        description: 'User name'
                    }
                },
                required: ['name']
            },
            params: {
                type: 'object',
                properties: {
                    id: { 
                        type: 'string',
                        description: 'User ID'
                    }
                },
                required: ['id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string',
                            description: 'Response message'
                        }
                    },
                    required: ['message']
                },
                400: {
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string',
                            description: 'Error message'
                        }
                    }
                }
            }
        };

        try{
            fastify.get('/:id',{schema}, async (request, reply) => {
                /**
                 * @type {number}
                 */
                // @ts-ignore
                const id = request.params.id;
                reply.code(200).send({ message: `User ID: ${id}` });
            });
        }catch(error){
            fastify.log.error(error);
        }
        done();
    }
}