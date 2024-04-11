import { Pencil, Trash2 } from "lucide-react"

const DropdownMenu = () => {
  return (
    <ul className="text-sm text-white/85 flex flex-col z-50 border-2 border-solid border-white/10 rounded-lg max-w-32 absolute">
      <li className="flex items-center gap-2 group py-3 p-4 border-b-2 border-solid border-white/10 "> <Trash2 className="size-4 group-hover:text-[#F48F56] " /> Remover</li>
      <li className="flex items-center gap-2 group py-3 p-4  border-solid border-white/10 "> <Pencil className="size-4 group-hover:text-[#F48F56] " /> Editar</li>
    </ul>
  )
}

export default DropdownMenu