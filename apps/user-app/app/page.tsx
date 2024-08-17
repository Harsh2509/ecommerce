import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
// These are the links that will be displayed in the navbar
const navigation = [
  { name: "Sell", href: "#", current: true },
  { name: "Extension", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Enterprise Ecommerce", href: "#", current: false },
];

export default async function LandingPage() {
  return (
    <>
      <Navbar navigation={navigation} />
      <Home />
    </>
  );
}
