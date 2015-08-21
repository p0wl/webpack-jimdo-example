# Wrong CSS Order

Input:

```css
@import 'some.sass';

.legacy_bundle {
    content: 'legacy_bundle';
}

@import 'middle.css';
@import 'other.sass';

```

webpack output:

```css
.middle {
    content: 'middle';
}.some {
  content: 'some'; }

.legacy_bundle {
  content: 'legacy_bundle'; }

.other {
  content: 'other'; }

/*# sourceMappingURL=new_cms_classes.css.map*/
```


`.middle` is the first rule, although it is not the first import. `.some` needs to be the first rule, as it is the first import.