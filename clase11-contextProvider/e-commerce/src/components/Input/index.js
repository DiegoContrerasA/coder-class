const Input = ({
  name,
  value,
  onChange,
  error,
  loading,
  label,
  placeholder = '',
  type = 'text',
  loadingText = 'Uploading ...'
}) => {
  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-gray-900 '>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
      {error && <span>{error}</span>}
      {loading && <span>{loadingText}</span>}
    </div>
  )
}

export default Input
