const Loading = () => {
  return (
    <article className='flex flex-col rounded-md overflow-hidden p-2'>
      <figure className='w-[200px] min-w-[200px] max-w-[200px] m-auto h-[270px] bg-slate-100' />
      <div className='flex flex-col gap-4 py-8'>
        <span className='font-bold h-[30px] bg-slate-200' />
        <span className='font-bold h-[30px] bg-slate-200 mb-3' />
        <span className='font-bold h-[16px] bg-slate-200' />
        <span className='font-bold h-[16px] bg-slate-200' />
        <span className='font-bold h-[16px] bg-slate-200' />
        <span className='font-bold h-[16px] bg-slate-200' />
        <span className='font-bold h-[16px] bg-slate-200' />
        <span className='font-bold h-[16px] bg-slate-200' />
        <span className='bg-slate-200 text-white self-start py-0.5 px-3 rounded-md text-sm h-[24px] w-[140px]' />
        <span className=' h-[20px] bg-slate-200 w-[220px]' />
        <strong className='mb-4 bg-slate-200 h-[24px] w-[100px]' />
      </div>
    </article>
  )
}

export default Loading
