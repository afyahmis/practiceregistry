import {AggregateRoot} from "../AggregateRoot";
import {Column, Entity} from "typeorm";

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