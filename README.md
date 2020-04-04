Demonstrates an issue with TestBed when importing a Module from a library with a pipe that has a super class with a ngOnDestroy lifecycle method.

To duplicate clone and run:

```
yarn
ng build some-lib
ng test
```

The test will fail with:
```
Error: Directive SomePipe has no selector, please add it!
    at verifySemanticsOfNgModuleDef (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:39047:1)
    at http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:39010:1
    at <Jasmine>
    at verifySemanticsOfNgModuleDef (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:39004:1)
    at Function.get (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:38956:1)
    at R3TestBedCompiler.applyProviderOverridesToModule (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/testing.js:2087:44)
    at R3TestBedCompiler.compileTestModule (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/testing.js:2386:1)
    at R3TestBedCompiler.finalize (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/testing.js:1880:1)
    at TestBedRender3.get testModuleRef [as testModuleRef] (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/testing.js:3253:1)
    at TestBedRender3.inject (http://localhost:9877/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/testing.js:3110:1)
```

This issue will not occur when the module is part of the same app as the test, it seems to be related to being part of a library project.
