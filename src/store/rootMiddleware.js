import homeMiddleware from './home/home.middleware';
import headerMiddleware from './header/header.middleware';

const middleware = [
    ...homeMiddleware,
    ...headerMiddleware,
];

export default middleware;