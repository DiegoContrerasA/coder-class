const MyOrderList = ({ loading, orders }) => {
  if (loading) {
    return (
      <div className='flex flex-col gap-5 animate-pulse'>
        {[...Array(10).keys()].map((index) => <div key={index} className='w-full h-[56px] rounded-sm bg-slate-200' />)}
      </div>
    )
  }

  return (
    <section className='flex flex-col gap-5'>
      {orders.map(({ id }) => (
        <article key={id} className='text-center font-extrabold bg-white py-4 rounded-sm'>
          <h3>{id}</h3>
        </article>
      ))}
    </section>
  )
}

export default MyOrderList
