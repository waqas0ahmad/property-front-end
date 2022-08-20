enum PropertyTypes {
    Mature = 'mature',
    Developmental = 'developmental'
}
class PropertyImages{
    originalname:string;
    encoding:string;
    mimetype:string;
    size:bigint;
    fileUrl:string;
    constructor(){
        this.originalname = "";
        this.encoding = "";
        this.mimetype = "";
        this.size = BigInt(0);
        this.fileUrl = "";        
    }
}
export class AddPropertyModel {
    propertyType: PropertyTypes;
    area: bigint;
    name: string;
    totalPortfolio: bigint;
    assetsUnderManagement: bigint;
    holdPeriod: number;
    location: string;
    state: string;
    details: string;
    images:PropertyImages[];
    constructor() {
        this.propertyType = PropertyTypes.Developmental;
        this.area = BigInt(0);
        this.name = "";
        this.totalPortfolio = BigInt(0);
        this.assetsUnderManagement = BigInt(0);
        this.holdPeriod = 0;
        this.location = "";
        this.state = "";
        this.details = "";
        this.images = [];
    }
}