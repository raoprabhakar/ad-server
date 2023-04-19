import { getImages } from '../util/mapUtil'
class ImageTrackerService {
    public invoke = async(req) => {
        return await new Promise((resolve,reject) => {
            let zipCode = req.body.zipCode || "75019";
            resolve(getImages(zipCode));
        });    
    }
}

export const imageTrackerService:any = new ImageTrackerService();