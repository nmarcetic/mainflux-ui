interface deviceLocation {
    name: string,
    latitude: string,
    longtitude: string,
    elevation: number,
}

export class Device {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public visibility: string,
        public status: string,
        public tags: Array<string>,
        public location: deviceLocation
        ){}
}
