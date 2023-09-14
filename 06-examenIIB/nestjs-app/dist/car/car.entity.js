"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarEntity = void 0;
const typeorm_1 = require("typeorm");
let CarEntity = exports.CarEntity = class CarEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CarEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'registration',
        type: 'varchar',
        length: 200,
        nullable: false,
    }),
    __metadata("design:type", String)
], CarEntity.prototype, "registration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'dateCar',
        type: 'datetime',
        nullable: false,
    }),
    __metadata("design:type", Date)
], CarEntity.prototype, "dateCar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'mileage',
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0.0,
        nullable: false,
    }),
    __metadata("design:type", Number)
], CarEntity.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'isNew',
        type: 'boolean',
        default: false,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], CarEntity.prototype, "isNew", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user',
        type: 'integer',
        default: 0,
        nullable: false,
    }),
    __metadata("design:type", Number)
], CarEntity.prototype, "user", void 0);
exports.CarEntity = CarEntity = __decorate([
    (0, typeorm_1.Entity)('car')
], CarEntity);
//# sourceMappingURL=car.entity.js.map