import { Router } from 'express';
import { imageTrackerRoute } from './imageTrackerRoute'

export const mainRoute = (route: Router) => {
    imageTrackerRoute(route);
    return route;
}