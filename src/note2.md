# node2

```JavaScript
import { useState } from 'react';

const Layout1 = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-dark text-white h-screen grid grid-cols-1 xl:grid-cols-2 gap-2">
            {/* <ThemeToggle /> */}
            <div className="sidebar w-40 h-full bg-green">

                <p>SideBar</p>

                <div>
                    <aside className="main-sidebar"></aside>
                </div>

            </div>

            <div className="content w-screen h-14 bg-white grid grid-rows">

                <div>
                    <p>NavBar</p>
                </div>

                <div>
                    <p>Content</p>
                </div>

            </div>

        </div>
    );
}

export default Layout1
```
