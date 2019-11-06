import defaultExport from "./module-name";
import * as name from "./module-name";
import { export1 } from "./module-name";
import { export1 as alias1 } from "./module-name";
import { export1 , export2 } from "./module-name";
import { foo , bar } from "./module-name";
import { export1 , export2 as alias2 , [...] } from "./module-name";
import defaultExport, { export1 [ , [...] ] } from "./module-name";
import defaultExport, * as name from "./module-name";
import "./module-name";
var promise = import("./module-name");
var promise = import ("./module-name");

//Cases that should not be flattened
importOtherFunctionName "./unflattened/path/to/file/module-name";
import err "./unflattened/path/to/file/module-name";
var promise = import err("./unflattened/path/to/file/module-name");
var promise = importOtherFunctionName("./unflattened/path/to/file/module-name");
import "module-name";