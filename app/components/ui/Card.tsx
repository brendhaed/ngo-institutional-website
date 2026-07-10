type CardProps = {
    title:string;
    description:string;
}

export default function Card({title,description}: CardProps){
    return(
        <div className="text-white gradient-primary w-50 h-50 rounded-2xl flex flex-col justify-center">
          <h1 className="text-white font-bold">{title}</h1>
          <p>{description}</p>
        </div>
    )
}