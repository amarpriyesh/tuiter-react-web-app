const TodoItem = ({lis1 = {
    "id":3,
    "title":"potato"
},del,edit}) => {

    const result = `val${lis1._id}`

    console.log(lis1.title)
return(
    <div className= "m-2">
<li className="list-group-item col-9">
    <div className="row">
    <div className="col-8">
        <input id={result} type="text" onChange={abc => edit(abc,lis1)
            } value={lis1.title}/>

    </div>
    <div className="col-2">
        <button onClick={() => del(lis1._id) }>Delete</button>
    </div>

       {/* <div className="col-2">
            <button onClick={() => {edit({title: document.getElementById(result).value,
                                        _id:lis1._id})

            }}>Edit</button>
        </div>*/}
    </div>
</li>
</div>)

}

export default TodoItem