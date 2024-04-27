import {Button} from './components/ui/button'
import {ModeToggle} from '@/components/mode-toggle'
import Content from './app/Content'
import CSheet from './app/Sheet'
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
