// Named exports
import { CONSTANT, addition as add } from "./modules/moduleA.mjs";

// Default export
import moduleB123 from './modules/moduleB.mjs';


console.log(CONSTANT);
console.log(add(5, 3));

moduleB123();
