import * as fs from 'fs';

const imageMapper ={
    "75019":["//images//outlet_1.PNG"]
};

 let readImageData = async (imagePath)=> {
     return fs.readFileSync(global.__basedir+imagePath);
}
export const getImages = async (zipCode) => {
    return await new Promise((resolve,reject) => {
        let imagePath = imageMapper[zipCode];
        resolve(readImageData(imagePath));
    });
    
}



    

    


