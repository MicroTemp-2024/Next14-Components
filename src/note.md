# For Note

```JavaScript
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* เมนูของคุณที่นี่ */}
                      <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">หน้าแรก</a>
                      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">เกี่ยวกับเรา</a>
                      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ติดต่อ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* เมนูของคุณที่นี่ (สำหรับหน้าจอเล็ก) */}
                <Disclosure.Button as="a" href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">หน้าแรก</a>
                <Disclosure.Button as="a" href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">เกี่ยวกับเรา</a>
                <Disclosure.Button as="a" href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ติดต่อ</a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default MyComponent;
```

Adminlte SideNav (aside) แปลงเป็น JavaScript แล้ว

```Javascript
<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a
      className="brand-link"
      href="index3.html"
    >
      <img
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
        src="dist/img/AdminLTELogo.png"
        style={{
          opacity: '.8'
        }}
      />
      <span className="brand-text font-weight-light">
        AdminLTE 3
      </span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            alt="User Image"
            className="img-circle elevation-2"
            src="dist/img/user2-160x160.jpg"
          />
        </div>
        <div className="info">
          <a
            className="d-block"
            href="#"
          >
            Alexander Pierce
          </a>
        </div>
      </div>
      <div className="form-inline">
        <div
          className="input-group"
          data-widget="sidebar-search"
        >
          <input
            aria-label="Search"
            className="form-control form-control-sidebar"
            placeholder="Search"
            type="search"
          />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-accordion="false"
          data-widget="treeview"
          role="menu"
        >
          <li className="nav-item menu-open">
            <a
              className="nav-link active"
              href="#"
            >
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="./index.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Dashboard v1
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="./index2.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Dashboard v2
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="./index3.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Dashboard v3
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="pages/widgets.html"
            >
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">
                  New
                </span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-copy" />
              <p>
                Layout Options
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">
                  6
                </span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/top-nav.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Top Navigation
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/top-nav-sidebar.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Top Navigation + Sidebar
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/boxed.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Boxed
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/fixed-sidebar.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Fixed Sidebar
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/fixed-sidebar-custom.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Fixed Sidebar{' '}
                    <small>
                      + Custom Area
                    </small>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/fixed-topnav.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Fixed Navbar
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/fixed-footer.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Fixed Footer
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/layout/collapsed-sidebar.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Collapsed Sidebar
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                Charts
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/charts/chartjs.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    ChartJS
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/charts/flot.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Flot
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/charts/inline.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Inline
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/charts/uplot.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    uPlot
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-tree" />
              <p>
                UI Elements
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/general.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    General
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/icons.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Icons
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/buttons.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Buttons
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/sliders.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Sliders
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/modals.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Modals & Alerts
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/navbar.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Navbar & Tabs
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/timeline.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Timeline
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/UI/ribbons.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Ribbons
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-edit" />
              <p>
                Forms
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/forms/general.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    General Elements
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/forms/advanced.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Advanced Elements
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/forms/editors.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Editors
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/forms/validation.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Validation
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-table" />
              <p>
                Tables
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/tables/simple.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Simple Tables
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/tables/data.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    DataTables
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/tables/jsgrid.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    jsGrid
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">
            EXAMPLES
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="pages/calendar.html"
            >
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Calendar
                <span className="badge badge-info right">
                  2
                </span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="pages/gallery.html"
            >
              <i className="nav-icon far fa-image" />
              <p>
                Gallery
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="pages/kanban.html"
            >
              <i className="nav-icon fas fa-columns" />
              <p>
                Kanban Board
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon far fa-envelope" />
              <p>
                Mailbox
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/mailbox/mailbox.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Inbox
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/mailbox/compose.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Compose
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/mailbox/read-mail.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Read
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-book" />
              <p>
                Pages
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/invoice.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Invoice
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/profile.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Profile
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/e-commerce.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    E-commerce
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/projects.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Projects
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/project-add.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Project Add
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/project-edit.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Project Edit
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/project-detail.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Project Detail
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/contacts.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Contacts
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/faq.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    FAQ
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/contact-us.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Contact us
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon far fa-plus-square" />
              <p>
                Extras
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Login & Register v1
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/login.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login v1
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/register.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Register v1
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/forgot-password.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Forgot Password v1
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/recover-password.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Recover Password v1
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Login & Register v2
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/login-v2.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login v2
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/register-v2.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Register v2
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/forgot-password-v2.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Forgot Password v2
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/examples/recover-password-v2.html"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Recover Password v2
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/lockscreen.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Lockscreen
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/legacy-user-menu.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Legacy User Menu
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/language-menu.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Language Menu
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/404.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Error 404
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/500.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Error 500
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/pace.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Pace
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/examples/blank.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Blank Page
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="starter.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Starter Page
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-search" />
              <p>
                Search
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/search/simple.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Simple Search
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages/search/enhanced.html"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Enhanced
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">
            MISCELLANEOUS
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="iframe.html"
            >
              <i className="nav-icon fas fa-ellipsis-h" />
              <p>
                Tabbed IFrame Plugin
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://adminlte.io/docs/3.1/"
            >
              <i className="nav-icon fas fa-file" />
              <p>
                Documentation
              </p>
            </a>
          </li>
          <li className="nav-header">
            MULTI LEVEL EXAMPLE
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="fas fa-circle nav-icon" />
              <p>
                Level 1
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon fas fa-circle" />
              <p>
                Level 1
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Level 2
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Level 2
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                    >
                      <i className="far fa-dot-circle nav-icon" />
                      <p>
                        Level 3
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                    >
                      <i className="far fa-dot-circle nav-icon" />
                      <p>
                        Level 3
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                    >
                      <i className="far fa-dot-circle nav-icon" />
                      <p>
                        Level 3
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Level 2
                  </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="fas fa-circle nav-icon" />
              <p>
                Level 1
              </p>
            </a>
          </li>
          <li className="nav-header">
            LABELS
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon far fa-circle text-danger" />
              <p className="text">
                Important
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon far fa-circle text-warning" />
              <p>
                Warning
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
            >
              <i className="nav-icon far fa-circle text-info" />
              <p>
                Informational
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</div>
```
