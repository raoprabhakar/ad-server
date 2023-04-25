import * as fs from 'fs';

const imageMapper ={
    "75019":["//images//outlet_1.PNG","//images//outlet_2.PNG","//images//outlet_1.PNG","//images//outlet_2.PNG"]
};

 let readImageData = async (imagePath)=> {
    let imageData:any = []
    if(Array.isArray(imagePath)) {
        for(let image of imagePath) {
            imageData.push(fs.readFileSync(global.__basedir+image))
        }
    } else {
        imageData.push(fs.readFileSync(global.__basedir+imagePath))
    }
     return imageData;
}
export const getImages = async (zipCode) => {
    return await new Promise((resolve,reject) => {
        let imagePath = imageMapper[zipCode];
        resolve(readImageData(imagePath));
    });
}



    

    


