import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container mb30 mt30">
          <div className="mt30 mb30">
            <Card title="Página inicial" />
          </div>
          
            <div className="dflex">
             <Link to = "/promotion">
               <Button text="Ver Promoção" />
             </Link>
            </div>
          
        </div>
      </section>
      <h2></h2>
    </main>
  );
}
