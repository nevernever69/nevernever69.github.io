import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {ModeToggle} from '../components//mode-toggle'

const Mobilebar = () => {
	return (
		<div className="flex justify-between">
		<div>
		<Avatar>
		<AvatarImage src="https://avatars.githubusercontent.com/u/97673634?v=4" />
		<AvatarFallback>CN</AvatarFallback>
		</Avatar>
		<h2>Ashish Baghel</h2>
		<p className="text-xs">Software developer</p>
		</div>
		<div>
		<ModeToggle/>
		</div>
		</div>
	)
}

export default Mobilebar;
