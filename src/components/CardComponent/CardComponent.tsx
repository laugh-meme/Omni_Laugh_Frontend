import './CardComponent.scss'

interface CardProps {
    title: string;
}

const CardComp = (props: CardProps) => {
    return (
        <>
            <div className="flex flex-col my-3 py-22 text-center bg-brand-color-primary shadow-sm rounded-lg">
                <div className="overflow-hidden text-white rounded-md">
                    {/* <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" /> */}
                </div>
                <div className="">
                    <h6 className=" text-white text-lg sm:text-xl font-mono">
                    {props.title}
                    </h6>
                    {/* <p className="text-slate-600 leading-normal font-light">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                    and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                    Barcelona.
                    </p> */}
                </div>
                {/* <div className="px-4 pb-4 pt-0 mt-2">
                    <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    Read more
                    </button>
                </div> */}
            </div>  
        </>
    )
}

export default CardComp;
