import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
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
		<SheetTitle>Pages</SheetTitle>
		<Separator/>
		<SheetDescription>
		<div className="py-8">
		<ul className="font-bold text-lg flex flex-col ">
		<li><Link to='/' ><SheetClose><Button variant="link">About</Button></SheetClose></Link></li>
		<li><Link to='/blog'><SheetClose><Button variant="link">Blog</Button></SheetClose></Link></li>
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
