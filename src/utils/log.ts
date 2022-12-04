import pino from 'pino';

export const log = pino({
    name: 'advent-of-code',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname',
            translateTime: 'HH:MM:ss',
        },
    },
});
