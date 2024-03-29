import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger, } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const Mobilenav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'/>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
                <span>welcome to Uonlyeats.com!</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className='flex'>
                   <Button className="flex-1 font-bold bg-orange-500">Login</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default Mobilenav