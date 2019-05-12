/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';

export abstract class RequestHandler<Request = IncomingMessage, Response = ServerResponse> {
    protected constructor(protected request: FastifyRequest<Request>,
                          protected reply: FastifyReply<Response>) {
    }

    abstract handle(): void | Promise<any>;

    static readonly register: (instance: FastifyInstance) => void;
}
