import { ChangeEvent, useEffect, useState } from "react";

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

const AttendeeList = () => {
  // se na url tiver uma página declarada, vai renderizar aquela página
  // caso contrário, renderiza a pagina 1
  const [page, setPage] = useState(1);

  // const [filter, setFilter] = useState("");

  const lastPage = Math.ceil(attendees.length / 10);
  const atFirstPage = page === 1;
  const atLastPage = page === lastPage;

  // function userFilterInput(e: ChangeEvent<HTMLInputElement>) {
  //   setCurrentSearch(e.target.value);
  //   setCurrentPage(1);
  // }

  // usando history.pushState, podemos armazenar a variavel 'page' na URL do browser, podendo copiar e colar
  // function setCurrentPage(page: number) {
  //   const url = new URL(window.location.toString());

  //   url.searchParams.set("page", String(page));

  //   window.history.pushState({}, "", url);

  //   setPage(page);
  // }

  // function setCurrentSearch(search: string) {
  //   const url = new URL(window.location.toString());

  //   url.searchParams.set("query", search);

  //   window.history.pushState({}, "", url);

  //   setFilter(search);
  // }

  // useEffect(() => {
  //   const url = new URL(
  //     "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"
  //   );

  //   url.searchParams.set("pageIndex", String(page - 1));
  //   if (filter.length > 0) {
  //     url.searchParams.set("query", filter);
  //   }

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       setAttendeesData(resJson.attendees);
  //       setTotal(resJson.total);
  //     });
  // }, [filter, page]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-2xl text-white/85 ">Participantes</h1>
        <div className=" border rounded-lg border-transparent border-zinc-600  flex items-center gap-3 py-1.5 px-3 w-64 ">
          <Search className="h-5 text-emerald-200" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="bg-transparent outline-none border-none focus:border-none focus:outline-none focus:ring-0 p-0 w-auto text-sm"
          />
        </div>
      </div>
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
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
                      <a href={`mailto:${attendee.email}`}>{attendee.email}</a>
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
                  <div className="flex justify-end">
                    <IconButton>
                      <Ellipsis className="size-4" />
                    </IconButton>
                  </div>
                </TableCell>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="text-sm text-white/80">
            <td colSpan={3} className="py-3 px-4">
              Total: {attendees.length} participantes
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
                    onClick={() => setPage(1)}
                  >
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={atFirstPage}
                    transparent={atFirstPage}
                    onClick={() => setPage(page - 1)}
                  >
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={atLastPage}
                    transparent={atLastPage}
                    onClick={() => setPage(page + 1)}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={atLastPage}
                    transparent={atLastPage}
                    onClick={() => setPage(lastPage)}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default AttendeeList;
