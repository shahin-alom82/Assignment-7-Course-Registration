
export default function Cart({ selectActors, totalReamainnin, totalCredit}) {
    return (
        <div className="p-4 bg-base-100 md:w-1/4 mt-9 shadow-xl rounded-xl h-[410px]">
            <h1 className="text-start text-xl font-bold text-[#2F80ED]">Credit Remaining : {totalReamainnin} hr</h1>
            <br />
            <p className="border-b"></p>
            <h1 className="text-xl font-bold mt-4 text-start">Course Name : {selectActors.length}</h1>
            {
                selectActors.map((actor) => (
                <h1 key={actor.id} className="text-start font-sans py-1" >{actor.name}</h1>
                ))
            }
            <br />
            <p className="border-b"></p>
            <br />
            <h1 className="text-start font-bold text-xl">Total Credit Hour : {totalCredit} hr</h1>
        </div>
    )
}
