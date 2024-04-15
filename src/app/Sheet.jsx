import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
	SheetOverlay,
  SheetDescription,
SheetHeader,
	SheetClose,
SheetTitle,
SheetTrigger,
} from "@/components/ui/sheet"
const CSheet = () => {
	return(
		<>
		<Sheet className="opacity-50 ">
		<SheetTrigger>
		<button ><Icon icon="ci:menu-duo-md" width="1.2rem" height="1.2rem" className="hover:text-red-600" /></button>
		</SheetTrigger>
		<SheetContent  side="left" className="w-[200px] sm:w-[0px] h-screen">
		<SheetHeader>
		<SheetTitle>Page Content</SheetTitle>
		<Separator/>
		<SheetDescription>
		<div className="py-8">
		<ul className="font-bold text-lg flex flex-col ">
		<Link to='/' ><SheetClose><li className="hover:text-white hover:bg-purple-600 hover:border-gray-300 py-4 "><p className="hover:text-red-600">About</p></li></SheetClose></Link>
		<Link to='/blog'><SheetClose><li className=" hover:text-white hover:bg-purple-600 hover:border-gray-300 ">Blog</li></SheetClose></Link>
		</ul>
		</div>
		</SheetDescription>
		</SheetHeader>
		</SheetContent>
		</Sheet>
		</>
	)
}
export default CSheet;
