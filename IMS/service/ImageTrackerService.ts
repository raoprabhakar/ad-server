import { getImages } from '../util/mapUtil'
class ImageTrackerService {
    public invoke = (req) => {
            let zipCode = req.body.zipCode;
            return getImages(zipCode);
    }
}

export const imageTrackerService:any = new ImageTrackerService();