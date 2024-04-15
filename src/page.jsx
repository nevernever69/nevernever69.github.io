import {Button} from './components/ui/button.jsx'
import {ModeToggle} from '@/components/mode-toggle.jsx'
import Content from './app/Content.jsx'
import CSheet from './app/Sheet.jsx'
import {useState } from 'react';

function Page() {
	const [page, setPage] = useState('here');
  return (
	  <>
	  <Content/>
	  </>

  )
}

export default Page; 
