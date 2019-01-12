import { Container } from "typedi";
import { initDbConnection } from "../test-initializer";
import { PracticeTypeRepository } from '../../src/infrastructure/PracticeTypeRepository';
import { PracticeType } from '../../src/core/model/domain/PracticeType';

describe("PracticeTypeRepository Tests", () => {

    let repository: PracticeTypeRepository;

    beforeAll(async () => {
        await initDbConnection();
        repository = Container.get(PracticeTypeRepository);
    });

    it("should create type", async () => {
        const testCar = await repository.createOrUpdate(new PracticeType("Facility","Facility"));
        expect(testCar).not.toBeUndefined();
        console.log(`${testCar}`);
    });
});