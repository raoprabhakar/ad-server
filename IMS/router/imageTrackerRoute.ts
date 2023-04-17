import { Router } from 'express';
import { imageTrackerApi } from '../api/imageTrackerApi';

export const imageTrackerRoute = (route:Router): void => {
    route.get('/ims/v1/image-tracker',imageTrackerApi.invoke);
    route.post('/ims/v1/image-tracker',imageTrackerApi.invoke);
}
