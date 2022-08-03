import { useState } from 'react'
import XtreamSideBar from './XtreamSideBar'
import XtreamCategoryContent from './XtreamCategoryContent'

type PropTypes = { 
  streamType: ({category_id:string | number, category_name:string})[],
  setStreamType: (streamType: null | ({category_id:string | number, category_name:string})[]) => void
 }


export default function XtreamCategories({ streamType, setStreamType }:PropTypes){
  const [category, setCategory] = useState(streamType[0].category_id as string | number)
  return (
    <main className="xtream-category-main">
      <XtreamSideBar streamType={streamType} setStreamType={setStreamType} category={category} setCategory={setCategory}/>
      <XtreamCategoryContent category={category}/>
    </main>
  )
}
