import {Container} from "typedi";
import {clearDb, createTestPracticeTypes, initDbConnection} from "../test-initializer";
import {PracticeTypeRepository} from '../../src/infrastructure/PracticeTypeRepository';
import {PracticeType} from '../../src/core/model/PracticeType';

describe("PracticeTypeRepository Tests", () => {

    let repository: PracticeTypeRepository;
    let practiceTypes = createTestPracticeTypes();

    beforeAll(async () => {
        clearDb();
        await initDbConnection();
        repository = Container.get(PracticeTypeRepository);
    });

    it("should create practiceType", async () => {
        const practiceType = await repository.createOrUpdate(new PracticeType("Facility", "Facility"));
        expect(practiceType).not.toBeUndefined();
        console.log(`${practiceType}`);
    });

    it("should create batch practiceTypes", async () => {
        const pTypes = await repository.createOrUpdateBatch(practiceTypes);
        expect(pTypes.length === 2);
        pTypes.forEach((p) => console.log(`${p}`));
    });

    test("should read practiceTypes", async () => {
        const pTypes = await repository.getAll();
        expect(pTypes.length > 0);
        pTypes.forEach((p) => console.log(`${p}`));
    });

    it("should find practiceType by id", async () => {
        const practiceType = await repository.get(practiceTypes[0].id);
        expect(practiceType).not.toBeUndefined();
        console.log(`${practiceType}`);
    });

    it("should delete practiceType by id", async () => {
        const carId = practiceTypes[1].id;
        await repository.remove(carId);
        const testCar = await repository.get(carId);
        expect(testCar).toBeUndefined();
    });

});
