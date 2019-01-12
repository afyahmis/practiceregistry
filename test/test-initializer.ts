import {createConnection, useContainer} from "typeorm";
import {Container} from "typedi";
import {PracticeType} from "../src/core/model/domain/PracticeType";
import * as faker from "faker";

useContainer(Container);
export let initDbConnection = async () => {
    await createConnection({
            logging: false,
            type: "sqlite",
            database: ":memory",
            entities: ["./src/core/model/domain/*.ts"],
            synchronize: true
        }
    );
};

export let createTestPracticeTypes = (count: number = 2): Array<PracticeType>=> {
    let i: number;
    const practiceTypes: Array<PracticeType> = [];
    for (i = 0; i < count; i++) {
        practiceTypes.push(new PracticeType(faker.commerce.productMaterial(), faker.commerce.productMaterial()));
    }
    return practiceTypes;
}
