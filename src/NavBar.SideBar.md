# NavBar + SideBar theme AdminLTE

- ใช้ icon จากที่นี่ https://github.com/tailwindlabs/heroicons#react

React
First, install @heroicons/react from npm:
```bash
npm install @heroicons/react
```

Now each icon can be imported individually as a React component :

```JavaScript
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

- The 24x24 outline icons can be imported from @heroicons/react/24/outline, 
- the 24x24 solid icons can be imported from @heroicons/react/24/solid, 
- the 20x20 solid icons can be imported from @heroicons/react/20/solid, 
- and 16x16 solid icons can be imported from @heroicons/react/16/solid.

Icons use an upper camel case naming convention and are always suffixed with the word Icon.

[Browse the full list of icon names on UNPKG →](https://unpkg.com/browse/@heroicons/react@2.1.5/24/outline/)
