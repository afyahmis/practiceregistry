import {Container} from "typedi";
import {createTestPracticeTypes, initDbConnection} from "../test-initializer";
import {PracticeTypeRepository} from '../../src/infrastructure/PracticeTypeRepository';
import {PracticeType} from '../../src/core/model/domain/PracticeType';

describe("PracticeTypeRepository Tests", () => {

    let repository: PracticeTypeRepository;
    let practiceTypes = createTestPracticeTypes();

    beforeAll(async () => {
        await initDbConnection();
        repository = Container.get(PracticeTypeRepository);
    });

    it("should create type", async () => {
        const practiceType = await repository.createOrUpdate(new PracticeType("Facility", "Facility"));
        expect(practiceType).not.toBeUndefined();
        console.log(`${practiceType}`);
    });
    it("should create batch entities", async () => {
        const pTypes = await repository.createOrUpdateBatch(practiceTypes);
        expect(pTypes.length === 2);
        pTypes.forEach((p) => console.log(`${p}`));
    });

    test("should read  entities", async () => {
        const pTypes = await repository.getAll();
        expect(pTypes.length > 0);
        pTypes.forEach((p) => console.log(`${p}`));
    });

    it("should find  entity by id", async () => {
        const practiceType = await repository.get(practiceTypes[0].id);
        expect(practiceType).not.toBeUndefined();
        console.log(`${practiceType}`);
    });

    it("should delete  entity by id", async () => {
        const carId = practiceTypes[1].id;
        await repository.remove(carId);
        const testCar = await repository.get(carId);
        expect(testCar).toBeUndefined();
    });

});
