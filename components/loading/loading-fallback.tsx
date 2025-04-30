export default function LoadingFallback() {
  return (
    <div className='mx-auto flex w-full max-w-6xl justify-center px-4 py-8 md:px-8'>
      <div className='prose prose-slate dark:prose-invert w-full'>
        <div className='h-8 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mt-4 space-y-3'>
          <div className='h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
          <div className='h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
          <div className='h-4 w-4/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
        </div>
      </div>
    </div>
  )
}
