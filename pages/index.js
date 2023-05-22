import ProduktListe from "@/komponenten/ProduktListe";
import Slider from "@/komponenten/Slider";
import mongoDB from "@/utils/mongoDB";
import Produkt from "@/models/Produkt";

export default function Home({produkte}) {
  return (
    <div>
      <Slider/>
     <ProduktListe produkte={produkte}/>
    </div>
  )
}

export async function getServerSideProps(){
  await mongoDB.dbConnect();
  const produkte = await Produkt.find({}).lean();
  return {
    props: {
      produkte:JSON.parse(JSON.stringify(produkte))
    }
  }
}
