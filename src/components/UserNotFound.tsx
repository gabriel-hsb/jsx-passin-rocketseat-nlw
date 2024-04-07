interface UserNotFoundProps {
  search: string;
  clearSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserNotFound: React.FC<UserNotFoundProps> = ({ search, clearSearch }) => {
  return (
    <div className="grid content-center h-96 gap-5">
      <h2 className="text-center text-lg text-white/85">
        O usuário {search} não foi encontrado 😞
      </h2>
      <button
        onClick={clearSearch}
        className=" border border-[#f43737] inline-block w-fit mx-auto py-2 px-4 rounded-md text-white/85  transition-all hover:bg-[#f43737]   "
      >
        Limpar busca
      </button>
    </div>
  );
};

export default UserNotFound;
