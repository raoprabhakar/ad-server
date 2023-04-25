import { imageTrackerService } from "../service/ImageTrackerService"

class ImageTrackerApi {
    public invoke = async(req, res) => {
        const result = await imageTrackerService.invoke(req);
        //res.writeHead(200, {'ContentType': 'html/image' });
        let imageframe :any = [];
        if(Array.isArray(result)) {
            for(let image of result) {
                imageframe.push(Buffer.from(image).toString('base64'));
            }
        }else {
            imageframe.push(Buffer.from(result).toString('base64'));
        }
        res.send({output:imageframe});
    }
}
export const imageTrackerApi : any = new ImageTrackerApi();