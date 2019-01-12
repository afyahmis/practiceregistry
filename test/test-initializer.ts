import { createConnection, useContainer } from "typeorm";
import { Container } from "typedi";

useContainer(Container);
export let initDbConnection = async () => {
    await createConnection("test");
};