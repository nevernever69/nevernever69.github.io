import {Button} from './components/ui/button'
import {ModeToggle} from '@/components/mode-toggle'
import Content from './app/Content'
import useDetails from './api/useDetails';

function Page() {
	useDetails()
  return (
	  <>
	  <Content/>
	  </>

  )
}

export default Page; 
