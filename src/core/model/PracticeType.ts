import {Column, Entity} from "typeorm";
import {AggregateRoot} from "@afyahmis/commonjs";

@Entity()
export class PracticeType extends AggregateRoot{

    @Column()
    id: string;
    @Column()
    description: string;

    constructor(id: string, description: string) {
        super();
        this.id = id;
        this.description = description;
    }

    toString(): string {
        return `${this.id}`;
    }
}
