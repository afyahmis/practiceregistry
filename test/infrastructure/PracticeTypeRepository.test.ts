import { Container } from "typedi";
import { initDbConnection } from "../test-initializer";
import { PracticeTypeRepository } from '../../src/infrastructure/PracticeTypeRepository';

describe("PracticeTypeRepository Tests", () => {

    let repository: PracticeTypeRepository;

    beforeAll(async () => {
        await initDbConnection();
        repository = Container.get(PracticeTypeRepository);
    });
});