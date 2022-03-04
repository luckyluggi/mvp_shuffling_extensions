import { ExtensionSlot, Notifications } from "piral";

function getActiveMainNavigationItems() {
  return [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About", 
      link: "/about",
    },
    {
      label: "Dashboard", 
      link: "/dashboard",
    },
  ]
}

export const LayoutDefault = (props) => (
  <div className="layout layout--default">
    <header>
      <ExtensionSlot name="CloudLayout.Topbar" />
    </header>
    <aside>
      <ExtensionSlot
        name="CloudLayout.Sidebar"
        params={{
          mainNavigationItems: getActiveMainNavigationItems(),
        }}
      />
    </aside>
    <main>{props.children}</main>
    <footer>
      <ExtensionSlot name="CloudLayout.Statusbar" /> 
    </footer>
    <Notifications />
  </div> 
);
