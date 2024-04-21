import { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
  Search,
} from "lucide-react";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.extend(RelativeTime);
dayjs.locale("pt-br");

import IconButton from "./IconButton";
import Table from "./table/Table";
import TableHeader from "./table/TableHeader";
import Checkbox from "./form/Checkbox";
import TableCell from "./table/TableCell";

import { attendees } from "../api/data";
import UserNotFound from "./UserNotFound";
import DropdownMenu from "./popups/DropdownMenu";
import EditAttendeeWindow from "./popups/EditAttendeeWindow";

const AttendeeList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [filteredAttendees, setFilteredAttendees] = useState<
    {
      id: number;
      name: string;
      email: string;
      createdAt: Date;
      checkedInAt: Date;
    }[]
  >([]);
  const lastPage = Math.ceil(filteredAttendees.length / 10);
  const atFirstPage = page === 1;
  const atLastPage = page === lastPage;

  useEffect(() => {
    if (search.length > 0) {
      setPage(1);
      setFilteredAttendees(
        attendees.filter((attendee) => {
          return (
            attendee.name.toLowerCase().includes(search.toLowerCase()) ||
            attendee.email.toLowerCase().includes(search.toLowerCase()) ||
            attendee.id.toString().includes(search.toLowerCase())
          );
        })
      );
    } else {
      setFilteredAttendees(attendees);
    }
  }, [search]);

  function clearSearch() {
    setSearch("");
  }

  const [clickedLine, setClickedLine] = useState<number | null>(null);

  // param 'index' is index of attendees' array
  const updateClickedLine = (index: number, e: any): void => {
    setClickedLine(index === clickedLine ? null : index);
    setQuery(false);
    e.stopPropagation();
  };

  // page navigation

  //sets clickedLine to null to hide dropdown menu
  function goFirstPage() {
    setPage(1);
    setClickedLine(null);
  }

  function goToPrevPage() {
    setPage(page - 1);
    setClickedLine(null);
  }

  function goToNextPage() {
    setPage(page + 1);
    setClickedLine(null);
  }

  function goToLastPage() {
    setPage(lastPage);
    setClickedLine(null);
  }

  useEffect(() => {
    document.addEventListener("click", () => setClickedLine(null));

    // needs a return statement to remove listener when component is removed from DOM
    return () => {
      document.addEventListener("click", () => setClickedLine(null));
    };
  }, []);

  const [Query, setQuery] = useState(false);

  const updatedAttendees = [...filteredAttendees];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-2xl text-white/85 ">Participantes</h1>
        <div className=" border rounded-lg border-transparent border-zinc-600 flex items-center gap-3 py-1.5 px-3 w-64 ">
          <Search className="h-5 text-emerald-200" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="bg-transparent outline-none border-none focus:border-none focus:outline-none focus:ring-0 p-0 w-auto text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {filteredAttendees.length === 0 ? (
        <UserNotFound search={search} clearSearch={clearSearch} />
      ) : (
        <Table>
          <thead className="border-b-2 border-solid border-white/10 text-sm">
            <tr className="text-left">
              <TableHeader className="py-3 px-4 size-4">
                <Checkbox />
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader>Participante</TableHeader>
              <TableHeader>Data da inscrição</TableHeader>
              <TableHeader>Data do check-in</TableHeader>
              <TableHeader>
                {/*vazio para deixar espaço para o botao */}
              </TableHeader>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredAttendees
              .slice((page - 1) * 10, page * 10)
              .map((attendee, index) => {
                return (
                  <tr
                    key={attendee.id}
                    className="hover:bg-zinc-900 transition-all"
                  >
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{attendee.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-white">
                          {attendee.name}
                        </span>
                        <span className="text-white/80 text-xs hover:underline ">
                          <a href={`mailto:${attendee.email}`}>
                            {attendee.email}
                          </a>
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{dayjs(attendee.createdAt).toNow()}</TableCell>
                    <TableCell>
                      {attendee.checkedInAt === null ? (
                        <span className="text-white/50">
                          Check-in não realizado
                        </span>
                      ) : (
                        dayjs(attendee.checkedInAt).toNow()
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end relative">
                        <IconButton
                          onClick={(e) => updateClickedLine(index, e)}
                        >
                          <Ellipsis className="size-4 " />
                        </IconButton>
                        {Query && clickedLine !== null && (
                          <EditAttendeeWindow
                            attendeeId={filteredAttendees[(page - 1) * 10 + clickedLine].id}
                            attendeeName={filteredAttendees[(page - 1) * 10 + clickedLine].name}
                            index={(page - 1) * 10 + clickedLine}
                            updatedAttendees={updatedAttendees}
                            onQuery={setQuery}
                            setClickedLine={setClickedLine}
                          />
                        )}
                        {clickedLine === index && (
                          <DropdownMenu
                            index={(page - 1) * 10 + clickedLine}
                            attendees={filteredAttendees}
                            setLine={setClickedLine}
                            onQuery={setQuery}
                            Query={Query}
                          />
                        )}
                      </div>
                    </TableCell>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr className="text-sm text-white/80">
              <td colSpan={3} className="py-3 px-4">
                Total: {filteredAttendees.length} participantes
              </td>
              <td colSpan={3} className="py-3 px-4">
                <div className="flex items-center justify-end gap-8 text-right">
                  <span>
                    Página {page} de {lastPage}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <IconButton
                      disabled={atFirstPage}
                      transparent={atFirstPage}
                      onClick={goFirstPage}
                    >
                      <ChevronsLeft className="size-4" />
                    </IconButton>
                    <IconButton
                      disabled={atFirstPage}
                      transparent={atFirstPage}
                      onClick={goToPrevPage}
                    >
                      <ChevronLeft className="size-4" />
                    </IconButton>
                    <IconButton
                      disabled={atLastPage}
                      transparent={atLastPage}
                      onClick={goToNextPage}
                    >
                      <ChevronRight className="size-4" />
                    </IconButton>
                    <IconButton
                      disabled={atLastPage}
                      transparent={atLastPage}
                      onClick={goToLastPage}
                    >
                      <ChevronsRight className="size-4" />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
    </div>
  );
};

export default AttendeeList;
