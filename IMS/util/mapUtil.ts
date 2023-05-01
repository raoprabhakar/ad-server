import * as fs from 'fs';

const imageMapper ={
    "75019":["//images//IMG_TRK_1.PNG","//images//IMG_TRK_2.PNG","//images//IMG_TRK_3.PNG","//images//IMG_TRK_5.PNG","//images//IMG_TRK_6.PNG","//images//IMG_TRK_7.PNG","//images//IMG_TRK_4.PNG","//images//IMG_TRK_8.PNG"],
    "75063":["//images//IMG_TRK_11.PNG","//images//IMG_TRK_12.PNG","//images//IMG_TRK_13.PNG","//images//IMG_TRK_15.PNG","//images//IMG_TRK_16.PNG","//images//IMG_TRK_17.PNG","//images//IMG_TRK_14.PNG","//images//IMG_TRK_18.PNG"]
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



    

    


