import { pathToActiveWhen, registerApplication, start } from "single-spa";

registerApplication({
  name:  "@toodoo/list-users",
  app: () =>
    System.import(
      "@toodoo/list-users"
    ),
  activeWhen: location => location.pathname === "/",
});

registerApplication({
  name:  "@toodoo/create-users",
  app: () =>
    System.import(
      "@toodoo/create-users"
    ),
    activeWhen: ["/create"],
});


start({
  urlRerouteOnly: true,
});
