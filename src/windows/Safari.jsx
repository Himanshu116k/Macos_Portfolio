import React from 'react'
import WindowControlls from '../components/WindowControlls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Plus,Copy,Search,ChevronLeft, ChevronRight, PanelLeft, Share, ShieldHalf, MoveRight } from 'lucide-react'
import { blogPosts } from '../constants'

const Safari = () => {
  return (
    <>
    <div id='window-header'>
        <WindowControlls  target="safari"/>
       <PanelLeft className='ml-10 icon'/>
       <div className='flex items-center gap-1 ml-5'>
        




<ChevronLeft className='icon'/>
<ChevronRight className='icon'/>
       </div>
       <div className=' flex flex-center gap-3'>
     <ShieldHalf className='icon'/>
     <div className="search">
    <Search className='icon'/>

    <input type='text' placeholder='Search' className='flex-1' />



     </div>
    </div>
    

    <div className='flex items-center gap-5'>
     <Share className='icon'/>
     <Plus className='icon'/>
     <Copy className='icon'/>
    </div>
    </div>

    <div>
        <div className='blog'>
            <h2>My developer Blog</h2>
            <div  className='space-y-8'>
                {blogPosts.map(({id,image,tittle,date,link})=>(
               <div key={id} className='blog-post'>
                <div className='col-span-2'>
                   <img src={image} alt={tittle}/>
                </div>
                <div className='content'>
                 <p>{date}</p>
                 <h3>{tittle}</h3>
                 <a href={link}  target='_blank'rel='noopenernoreferrer'>
                  checkOut the full post <MoveRight className='icon-hover'/>
                 </a>
                </div>
               </div>
                ))}
            </div>

        </div>
    </div>
    </>
  )
}

const SafariWinodw = WindowWrapper(Safari,"safari")
export default SafariWinodw