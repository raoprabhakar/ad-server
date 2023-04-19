import { imageTrackerService } from "../service/ImageTrackerService"

class ImageTrackerApi {
    public invoke = async(req, res) => {
        const result = await imageTrackerService.invoke(req);
        res.writeHead(200, {'ContentType': 'image/png' });
        res.end(result,'binary');
    }
}
export const imageTrackerApi : any = new ImageTrackerApi();