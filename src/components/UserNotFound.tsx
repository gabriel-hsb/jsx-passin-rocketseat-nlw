import { SearchX } from "lucide-react";

interface UserNotFoundProps {
  search: string;
  clearSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserNotFound: React.FC<UserNotFoundProps> = ({ clearSearch }) => {
  return (
    <div className="flex items-center justify-center flex-col h-96 gap-5">
      <h2 className="text-center text-lg text-white/85">
        <div className="flex items-center gap-2">
          <SearchX className="text-emerald-200" /> Participante não encontrado
        </div>
      </h2>
      <button
        onClick={clearSearch}
        className=" border border-[#f43737] inline-block w-fit mx-auto py-1.5 px-3 rounded-md text-white/85  transition-all hover:bg-[#f43737]   "
      >
        Limpar busca
      </button>
    </div>
  );
};

export default UserNotFound;
