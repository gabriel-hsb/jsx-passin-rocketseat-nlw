import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
  Search,
} from "lucide-react";

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
            className="bg-transparent text-sm outline-none w-56 "
          />
        </div>
      </div>
      <div className="border-2 border-solid border-white/10 rounded-lg ">
        <table className="w-full">
          <thead className="border-b-2 border-solid border-white/10 text-sm">
            <tr className="text-left">
              <th className="py-3 px-4 size-4">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4">Código</th>
              <th className="py-3 px-4">Participante</th>
              <th className="py-3 px-4">Data da inscrição</th>
              <th className="py-3 px-4">Data do check-in</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <input type="checkbox" />
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                52176
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gabriel Henrique</span>
                  <span className="text-white/80 text-xs">
                    ghbranco6@gmail.com
                  </span>
                </div>
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                7 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80 ">
                4 dias atrás
              </td>
              <td className="py-3 p-4 border-b-2 border-solid border-white/10 text-right">
                <button className="bg-black/20 rounded-md border border-solid border-white/10 p-1">
                  <Ellipsis />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="text-sm">
              <td colSpan={3} className="py-3 px-4">
                Mostrando 10 de 358 itens
              </td>
              <td colSpan={3} className="py-3 px-4">
                <div className="flex items-center justify-end gap-8 text-right">
                  <span className="text-white/80">Página 1 de 17</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="bg-white/10 rounded-md p-1 border-solid border border-white/10"
                    >
                      <ChevronsLeft />
                    </button>
                    <button
                      type="button"
                      className="bg-white/10 rounded-md p-1 border-solid border border-white/10"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      type="button"
                      className="bg-white/10 rounded-md p-1 border-solid border border-white/10"
                    >
                      <ChevronRight />
                    </button>
                    <button
                      type="button"
                      className="bg-white/10 rounded-md p-1 border-solid border border-white/10"
                    >
                      <ChevronsRight />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AttendeeList;
