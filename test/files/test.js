import defaultExport from "./unflattened/path/to/file/module-name";
import * as name from "./unflattened/path/to/file/module-name";
import { export1 } from "./unflattened/path/to/file/module-name";
import { export1 as alias1 } from "./unflattened/path/to/file/module-name";
import { export1 , export2 } from "./unflattened/path/to/file/module-name";
import { foo , bar } from "./unflattened/path/to/file/module-name";
import { export1 , export2 as alias2 , [...] } from "./unflattened/path/to/file/module-name";
import defaultExport, { export1 [ , [...] ] } from "./unflattened/path/to/file/module-name";
import defaultExport, * as name from "./unflattened/path/to/file/module-name";
import "./unflattened/path/to/file/module-name";
var promise = import("./unflattened/path/to/file/module-name");
var promise = import ("./unflattened/path/to/file/module-name");

//Cases that should not be flattened
importOtherFunctionName "./unflattened/path/to/file/module-name";
import err "./unflattened/path/to/file/module-name";
var promise = import err("./unflattened/path/to/file/module-name");
var promise = importOtherFunctionName("./unflattened/path/to/file/module-name");
import "module-name";