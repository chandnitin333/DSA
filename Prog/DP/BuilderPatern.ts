class House {
    bedrooms: number;
    bathrooms: number;
    kitchens: number;
    garages: number;
    constructor({ builder }: { builder: any; }) {
        this.bedrooms = builder.bedrooms;
        this.bathrooms = builder.bathrooms;
        this.kitchens = builder.kitchens;
        this.garages = builder.garages;
    }
}
class HouseBuilder {
    bedrooms: number;
    bathrooms: number;
    kitchens: number;
    garages: number;
    constructor() {
        this.bedrooms = 0;
        this.bathrooms = 0;
        this.kitchens = 0;
        this.garages = 0;
    }
    setBedrooms( bedrooms: number): this {
        this.bedrooms = bedrooms;
        return this;
    }
    setBathrooms(bathrooms:any) {
        this.bathrooms = bathrooms;
        return this;
    }
    setKitchens(kitchens: number) {
        this.kitchens = kitchens;
        return this;
    }
    setGarages(garages: any): this {
        this.garages = garages;
        return this;
    }
    build() {
        return new House({ builder: this });
    }
}
const house1 = new HouseBuilder()
    .setBedrooms(3)
    .setBathrooms(2)
    .setKitchens(1)
    .setGarages(2)
    .build();
console.log(house1); // Output: House { bedrooms: 3, bathrooms: 2, kitchens: 1, garages: 2 }
