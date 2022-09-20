import HandshakeIcon from "@mui/icons-material/Handshake";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MapIcon from "@mui/icons-material/Map";
import Tool from "./Tool";

function Tools() {
  return (
    <div
      className={`text-Light dark:text-Dark bg-DarkGray dark:bg-Light flex flex-col gap-3 p-5 w-fit border-2 border-Ligth rounded mt-10 hover:border-HeadLight hover:text-HeadLight`}
    >
      <Tool title="Autodidacte" Icon={DirectionsWalkIcon} />
      <Tool title="Relationnel clients" Icon={HandshakeIcon} />
      <Tool title="Méthode Agile" Icon={AllInclusiveIcon} />
      <Tool title="Résolution de problème" Icon={MapIcon} />
    </div>
  );
}

export default Tools;
