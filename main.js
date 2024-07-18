
let GreetingCard =({greeting ,name })=>{
    return (<>
        <div className='Card'>
        <h2>{greeting }</h2>
        <h4>{name}</h4>
        
        </div>
    </>
    )

}



let App = ()=>{

    let arrOfObj = [{greet:'Happy birthday',name:'AJ'}]
    return(
        <>
        {arrOfObj.map((el,ind)=>{
                return(
                    <div key={ind} className='main'>
                        <GreetingCard greeting={el.greet} name={el.name} />
                    </div>)
            })}        
        </>

    )
}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)