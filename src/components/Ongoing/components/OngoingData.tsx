import { OngoingCostsRevenues } from "./tables/OngoingCostsRevenues";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OngoingData() {
  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <span>TIPOLOGIA INCARICO</span>
        <span>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seleziona incarico" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ad">Affidamento Diretto</SelectItem>
              <SelectItem value="pn">Procedura Negoziata</SelectItem>
              <SelectItem value="pnrtp">Procedura Negoziata con RTP</SelectItem>
              <SelectItem value="b">Bando</SelectItem>
              <SelectItem value="brtp">Bando con RTP</SelectItem>
              <SelectItem value="ai">Appalto Integrato</SelectItem>
              <SelectItem value="airtp">Appalto Integrato con RTP</SelectItem>
            </SelectContent>
          </Select>
        </span>
      </div>
      <OngoingCostsRevenues />
    </div>
  );
}
