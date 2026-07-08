type CardProps = {
    title:string;
    description:string;
}

export default function Card({title,description}: CardProps){
    return(
        <div className="text-white gradient-primary w-50 h-50 rounded-2xl flex flex-col justify-center">
          <h1 className="font-bold text-3xl">{title}</h1>
          <h3>{description}</h3>
        </div>
    )
}