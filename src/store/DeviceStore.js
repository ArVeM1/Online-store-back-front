import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
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