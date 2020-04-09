Demonstrates an issue with routerLink with strictTemplates enabled.

To duplicate clone and run:

```
yarn
ng serve
```

The serve will fail with:
```
ERROR in src/app/app.component.html:1:4 - error TS2322: Type 'undefined' is not assignable
to type 'string | any[]'.
    
    1 <a [routerLink]="" fragment="foo">A Link</a>
```

This issue will not occur when strictTemplates is false, and the link will behave as expected.
