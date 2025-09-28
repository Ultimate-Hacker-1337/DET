import Goals from "../components/Goals";
import History from "../components/History";
import Campuses from "../components/Campuses";
import ChishtHistory from "../components/ChishtHistory";
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
      <section>
        <h2 className="text-2xl font-bold mb-6 text-emerald-800">چشتیہ تاریخچہ</h2>
        <ChishtHistory />
      </section>
    </div>
  );
}
