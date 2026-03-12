import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { FarmingMethods } from "./pages/FarmingMethods";
import { DairyProducts } from "./pages/DairyProducts";
import { Sustainability } from "./pages/Sustainability";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "farming-methods", Component: FarmingMethods },
      { path: "dairy-products", Component: DairyProducts },
      { path: "sustainability", Component: Sustainability },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-service", Component: TermsOfService },
    ],
  },
]);