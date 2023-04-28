import Link from "next/link";

async function getData() {
  
  // fetch data from backbone url api 
  const res = await fetch('http://127.0.0.1:8000/api/books', {next: { revalidate: 1 }})
  
  // send this text status to user when it failed to fetch the data
  if (!res.ok) {
    throw new Error('Gagal mengambil data!');
  }

  // return the response with json format
  return res.json(); 
}

export default async function GetBooks() {
  // get data func
  const data = await getData()
  return (
    <>
        <ul>
            {data.map((d) => (
              <li key={d.id} className="py-5">
                <div className="border border-black p-5 border-dotted rounded-md shadow-md backdrop-blur-sm">
                  <Link href={`books/${d.id}`}>
                    <h1 className="text-2xl font-extrabold">
                      {d.id} - {d.title}
                    </h1>
                  </Link>
                  <p className="max-w-5xl">
                    {d.body}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      {/* </Suspense> */}
    </>
  )
}
