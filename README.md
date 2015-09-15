
## Result what u think

### web app
web app的最佳实践

### target to
module & template & best practice & out of the box

### thanks to
[pagurian](https://github.com/hypers/pagurian)
[sb-admin-angular](https://github.com/start-angular/sb-admin-angular)

## framework7
### layout
All their difference is in additional classes on parent elements and different nesting level.

Static
~~~
.view   
  .pages    
    .page   
      .page-content   
        .navbar   
        // other page content
        .toolbar    
~~~

Fixed
~~~
.view
  .pages.navbar-fixed.navbar-through
    .page
      .navbar
      .page-content
      .toolbar
~~~

Through
~~~
.view
  .navbar
  .pages.navbar-through.toolbar-through
    .page
      .page-content
  .toolbar
~~~

