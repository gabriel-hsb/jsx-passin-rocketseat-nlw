import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
  Search,
} from "lucide-react";

import IconButton from "./IconButton";
import Table from "./table/Table";
import TableHeader from "./table/TableHeader";
import Checkbox from "./form/Checkbox";
import TableCell from "./table/TableCell";

const AttendeeList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-2xl text-white/85 ">Participantes</h1>
        <div className=" border rounded-lg border-transparent border-zinc-600  flex items-center gap-3 py-1.5 px-3 ">
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
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <tr key={i} className="hover:bg-zinc-900 transition-all">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>52176</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Gabriel Henrique
                    </span>
                    <span className="text-white/80 text-xs">
                      ghbranco6@gmail.com
                    </span>
                  </div>
                </TableCell>
                <TableCell className=" text-red-500 ">7 dias atrás</TableCell>
                <TableCell>4 dias atrás</TableCell>
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
              Mostrando 10 de 358 itens
            </td>
            <td colSpan={3} className="py-3 px-4">
              <div className="flex items-center justify-end gap-8 text-right">
                <span>Página 1 de 17</span>
                <div className="flex items-center gap-1.5">
                  <IconButton transparent>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton transparent>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
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
