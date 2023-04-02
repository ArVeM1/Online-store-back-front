import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},

        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'LG'},
            {id: 3, name: 'Xiaomi'},
            {id: 4, name: 'Honor'},
            {id: 5, name: 'Samsung'},
            {id: 6, name: 'OnePlus'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 2, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 3, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 4, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 5, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 6, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 7, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 8, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
            {id: 9, name: 'Iphone 13 Green', price: 64990, rating: 5, img: `https://northyorkshireccg.nhs.uk/wp-content/uploads/2021/02/150x150.png`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }


    get types() {
        return this._types;
    }

    setTypes(types) {
        this._types = types;
    }

    get brands() {
        return this._brands;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    get devices() {
        return this._devices;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get selectedType() {
        return this._selectedType
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}