import Head from 'next/head'

export default function Home({title, children}) {
  return (
    <div className=''>
      <Head>
        <title>{title ? title + "-My Portfolio" : "Portfolio"}</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


<div className='flex  flex-col justify-between min-h-screen'> 
      <header>
       
        <nav>
        <div className="text-2xl capitalize px-4 font-serif font-bold">

            <h1>
              vitech solutions
            </h1>
          </div>


          <div className="nav_ul">

          <ul>
            <li>home </li>
            <li></li>
          </ul>
          </div>
        </nav>
      </header>

      <main className=''>
       {children}
      </main>

      <footer className=''>
        footer
      </footer>
      </div>
    </div>
  )
}
