import { Check } from "lucide-react";
import { useEffect, useState, useRef, RefObject } from "react";

interface EditAttendeeWindowProps {
  attendeeName: string;
  attendeeId: number;
}

const EditAttendeeWindow: React.FC<EditAttendeeWindowProps> = ({
  attendeeName,
  attendeeId,
}) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);

  const EditAttendeeWindow: RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    setName(attendeeName);
    setId(attendeeId);
  }, []);

  return (
    <div
      className="fixed top-40 left-[38%] z-50 bg-zinc-900 w-80 border-2 border-solid border-white/10 rounded-lg flex flex-col gap-4 p-4"
      ref={EditAttendeeWindow}
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="font-bold text-xl text-white  text-center">
        Alterar dados do participante
      </h2>
      <div>
        <label className="text-sm " htmlFor="attendee-name">Nome</label>
        <div className=" border rounded-lg border-transparent border-zinc-600 flex items-center gap-3 py-1.5 px-3 w-64 ">
          <input
            id="attendee-name"
            type="text"
            value={name}
            className="bg-transparent outline-none border-none focus:border-none focus:outline-none focus:ring-0 p-0 w-full text-sm"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="text-sm " htmlFor="attendee-id">Código</label>
        <div className=" border rounded-lg border-transparent border-zinc-600 flex items-center gap-3 py-1.5 px-3 w-64 ">
          <input
            id="attendee-id"
            type="number"
            value={id}
            className="bg-transparent outline-none border-none focus:border-none focus:outline-none focus:ring-0 p-0 w-full text-sm"
            onChange={(e) => setId(Number(e.target.value))}
          />
        </div>
      </div>
      <button
        // onClick={}
        className=" border border-emerald-700 hover:bg-emerald-700 w-fit mx-auto py-1.5 px-3 rounded-md text-white/85 transition-all flex items-center gap-2"
      >
        <Check className="size-5" /> Confirmar
      </button>
    </div>
  );
};

export default EditAttendeeWindow;
