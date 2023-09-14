const ItemSkeleton = () => {
  return (
    <div className='w-56 mb-4 bg-white shadow-sm rounded-lg overflow-hidden relative group cursor-pointer animate-pulse h-[320px]'>
      <span className=' absolute top-3 right-3  rounded-full shadow-sm z-10 bg-slate-200 h-[18px] w-[100px]' />
      <figure className=' relative h-[250px]  bg-slate-100' />
      <div className='p-3'>
        <p className='text-sm bg-slate-200 h-[20px] w-full mb-1' />
        <p className='text-sm bg-slate-200 h-[20px] w-[200px]' />

      </div>

    </div>
  )
}

export default ItemSkeleton
