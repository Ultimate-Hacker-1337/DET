import Goals from "../components/Goals";
import History from "../components/History";
import Campuses from "../components/Campuses";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const navigate = useNavigate();
  return (
    <div className="w-full m-0 p-0">
      <section>
        <Goals />
      </section>
      <section>
        <History />
      </section>
      <section>
        <Campuses />
      </section>
    </div>
  );
}
