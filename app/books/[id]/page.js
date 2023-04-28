async function getDetailBook(id) {
    let res = await fetch(`http://127.0.0.1:8000/api/books/${id}`)
    return res.json();
}

export default async function GetBookDetail({ params }) {
    const data = await getDetailBook(params.id);
    return (
        <>
            <div className="py-10 space-y-5">
                <h1 className="text-center font-extrabold text-5xl">{data.title}</h1>
                <p className="font-mono bg-rose-400 outline-none w-1/4 content-center mx-auto border-transparent border rounded-full px-5 text-white text-center">{data.created_at}</p>
                <p className="text-xl mt-5">{data.body}</p>
            </div>
        </>
    )
}