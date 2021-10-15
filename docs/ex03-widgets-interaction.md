---
id: widgets-interaction 
title: "Ex03: Widgets interaction"
---

In this example we add two widgets to `POST` that interact.

The initial code for this example is here: [ex03-widgets-interaction-exercise](https://github.com/dapplets/dapplet-template/tree/ex03-widgets-interaction-exercise).

Here is `src/index.ts`:

```ts
import {} from '@dapplets/dapplet-extension';
import EXAMPLE_IMG from './icons/ex03.png';
//import STAMP_IMG from './icons/fakeStamp.png';

@Injectable
export default class TwitterFeature {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,  @typescript-eslint/explicit-module-boundary-types
  @Inject('twitter-adapter.dapplet-base.eth') public adapter: any;

  activate() {
    // LP: 1. Get the element 'picture' from adapter
    const { button } = this.adapter.exports;
    // LP end
    const { $ } = this.adapter.attachConfig({
      POST: () => [
        button({
          id: 'button',
          initial: 'DEFAULT',
          DEFAULT: {
            label: 'Injected Button',
            img: EXAMPLE_IMG,
            // LP: 3. Toggle the state “hidden/shown” of the picture on button click

            // LP end
          },
        }),

        // LP: 2. Add extra picture to POST and make it hidden by default

        // LP end
      ],
    });
  }
}
```

`$(ctx, 'element_id')` returns object "me". Use it to change state or params of the other element by its **id**.

- *Example 1:* `exec: () => $(ctx, 'another_el_id').state = 'SECOND'`
- *Example 2:* `exec: () => $(ctx, 'another_el_id').label = 'Hello'`

Get the widget `picture` from the adapter

```ts
const { button, picture } = this.adapter.exports;
```

Add an extra picture to `POST` and make it hidden by default.

```ts
POST: () => [
  ...
    
  picture({
    id: 'pic',
    initial: 'DEFAULT',
    DEFAULT: {
      img: STAMP_IMG,
      hidden: true,
    },
  }),
],
```

Toggle the state "hidden/shown" of the picture on button click.

```ts
exec: () => {
  $(ctx, 'pic').hidden = !$(ctx, 'pic').hidden;
},
```

Result:

```ts
import {} from '@dapplets/dapplet-extension';
import EXAMPLE_IMG from './icons/ex03.png';
import STAMP_IMG from './icons/fakeStamp.png';

@Injectable
export default class TwitterFeature {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,  @typescript-eslint/explicit-module-boundary-types
  @Inject('twitter-adapter.dapplet-base.eth') public adapter: any;

  activate() {
    // LP: 1. Get the element 'picture' from adapter
    const { button, picture } = this.adapter.exports;
    // LP end
    const { $ } = this.adapter.attachConfig({
      POST: (ctx) => [
        button({
          id: 'button',
          initial: 'DEFAULT',
          DEFAULT: {
            label: 'FAKE',
            img: EXAMPLE_IMG,
            // LP: 3. Toggle the state “hidden/shown” of the picture on button click
            exec: () => {
              $(ctx, 'pic').hidden = !$(ctx, 'pic').hidden;
            },
            // LP end
          },
        }),

        // LP: 2. Add extra picture to POST and make it hidden by default
        picture({
          id: 'pic',
          initial: 'DEFAULT',
          DEFAULT: {
            img: STAMP_IMG,
            hidden: true,
          },
        }),
        // LP end
      ],
    });
  }
}
```

Here is the result code of the example: [ex03-widgets-interaction-solution](https://github.com/dapplets/dapplet-template/tree/ex03-widgets-interaction-solution).

Run the dapplet:

```bash
npm i
npm start
```

In the browser:

![video](/video/ex03-insertion-points.gif)

> If you don't know how to run the dapplet in a browser, see [Get Started](/docs/get-started#11-connect-the-development-server-to-dapplet-extension).