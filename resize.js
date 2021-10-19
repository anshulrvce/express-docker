const sharp = require('sharp');
const { uuid } = require('uuidv4');

const path = require('path');


class Resize {
    constructor(folder) {
        this.folder = folder;
    }
    async save(buffer){
        const fileName = Resize.fileName();
        const filePath = this.filePath(fileName);


        await sharp(buffer)
        .resize(300, 3000, {
            fit: sharp.fit.inside,
            withoutEnlargement: true
        })
        .toFile(filePath);
        return fileName;
    }
    static fileName(){
        return `${uuid()}.png`;
    }
    filePath(fileName){
        return path.resolve(`${this.folder}/${fileName}`)
    }
}

module.exports = Resize;