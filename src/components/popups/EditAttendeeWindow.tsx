import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface EditAttendeeWindowProps {
  attendeeName: string;
  attendeeId: number;
  index: number;
  updatedAttendees: Array<{ name: string; id: number }>;
  onQuery: Function;
  setClickedLine: Function;
}

const EditAttendeeWindow: React.FC<EditAttendeeWindowProps> = ({
  attendeeName,
  attendeeId,
  index,
  updatedAttendees,
  onQuery,
  setClickedLine,
}) => {
  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState(0);

  useEffect(() => {
    setNewName(attendeeName);
    setNewId(attendeeId);
  }, []);

  function updateEditedAttendee(newName: string, newId: number) {
    // TODO: verify if attendeeName and attendeeId already exists
    updatedAttendees[index].name = newName;
    updatedAttendees[index].id = newId;
    onQuery(false);
    setClickedLine(null);
  }

  return (
    <div
      className="fixed top-40 left-[38%] z-50 bg-zinc-900 w-80 border-2 border-solid border-white/10 rounded-lg flex flex-col gap-4 p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="font-bold text-xl text-white  text-center">
        Alterar dados do participante
      </h2>
      <div>
        <label className="text-sm " htmlFor="attendee-name">
          Nome
        </label>
        <div className=" border rounded-lg border-transparent border-zinc-600 flex items-center gap-3 py-1.5 px-3 w-64 ">
          <input
            className="bg-transparent outline-none border-none focus:border-none focus:outline-none focus:ring-0 p-0 w-full text-sm"
            id="attendee-name"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="text-sm " htmlFor="attendee-id">
          Código
        </label>
        <div className=" border rounded-lg border-transparent border-zinc-600 flex items-center gap-3 py-1.5 px-3 w-64 ">
          <input
            className="bg-transparent outline-none border-none focus:border-none focus:outline-none focus:ring-0 p-0 w-full text-sm"
            id="attendee-id"
            type="numeric"
            maxLength={5}
            value={newId}
            onChange={(e) => setNewId(Number(e.target.value))}
          />
        </div>
      </div>
      <button
        onClick={() => updateEditedAttendee(newName, newId)}
        className=" border border-emerald-700 hover:bg-emerald-700 w-fit mx-auto py-1.5 px-3 rounded-md text-white/85 transition-all flex items-center gap-2"
      >
        <Check className="size-5" /> Confirmar
      </button>
    </div>
  );
};

export default EditAttendeeWindow;
