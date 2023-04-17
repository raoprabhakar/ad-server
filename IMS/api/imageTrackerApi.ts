import { imageTrackerService } from "../service/ImageTrackerService"

class ImageTrackerApi {
    public invoke = (req, res) => {
        const result = imageTrackerService.invoke(req);
        res.send(result);
    }
}
export const imageTrackerApi : any = new ImageTrackerApi();