import { Carousel } from "@repo/ui/carousel";
import { Card } from "@repo/ui/card";
import { Navbar } from "../../components/Navbar";
import axios from "axios";
const navigation = [
  { name: "Products", href: "#", current: true },
  { name: "Sell", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Enterprise Ecommerce", href: "#", current: false },
];
export default async function CarouselBasic() {
  const res = await axios.get("https://fakestoreapi.com/products");
  const items = res.data;
  return (
    <>
      <Navbar navigation={navigation} />
      <Carousel />
      <div className="flex gap-3 flex-wrap w-screen justify-center items-center pt-20">
        {items.map((item: any) => (
          <div key={item.id}>
            <Card
              title={item.title}
              price={item.price}
              image={item.image}
              id={item.id}
            ></Card>
          </div>
        ))}
      </div>
    </>
  );
}
