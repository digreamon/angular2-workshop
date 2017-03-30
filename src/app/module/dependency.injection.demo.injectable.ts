import {Injectable} from "@angular/core";

export abstract class Dependency {
    abstract getValue(): string;
}

@Injectable()
export class DependencyImpl1 extends Dependency {
    getValue(): string {
        return "value1";
    }
}

@Injectable()
export class DependencyImpl2 extends Dependency {
    getValue(): string {
        return "value2";
    }
}
