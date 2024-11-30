const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl m-2 p-2">Contact Us page</h1>
            <input type="text" className="m-2 p-2 border border-b-2" placeholder="name"/>
            <input type="text" className="m-2 p-2 border border-b-2" placeholder="email" />
            <button type="button" className="m-2 p-2 border border-b-2 rounded-lg bg-green-900 text-white" >Submit</button>
        </div>
    )
}

export default Contact;