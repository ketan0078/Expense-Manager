import React from 'react'
import ReactDom from 'react-dom'

const Info=(props)=>(
     <div>
        <h1>info</h1>
<p>this info is:{props.info}</p>
    </div>
)
const withadminwarning=(Wrappedcomp)=>{
    return(props)=>(

     <div>
    {props.isAdmin &&<p>this is a private info ,please don't share!!!!</p>}
    <Wrappedcomp {...props} />
    </div>
    )

}
const authverification=(Comp)=>{
    return (props)=>(
        <div>
{props.isverified&&<p>account is verified!!!</p>}
<Comp {...props}></Comp>
        </div>
        
    )
}
const Admininfo=withadminwarning(Info)

const Authinfo=authverification(Info)
ReactDom.render(<Authinfo info='details...'  isverified={true}/>,document.getElementById('app'))