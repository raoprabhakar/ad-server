
    export const getImages = (zipCode) => {
        const imageMapper = new Map();
        imageMapper.set("75019",["../abc.gif"]);
        return imageMapper.get(zipCode);
    }


