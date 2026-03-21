import React, {useState, useEffect, memo} from 'react'

function PostApi() {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [sellectValue, setSellectValue] = useState("all")
    const [dataFilterSearch, setDataFilterSearch] = useState([])
    const [arrFilter, setArrFilter] = useState([])

    function search(input, select){
        
        setDataFilterSearch(
            data.filter((item) =>{
                const isInput = input == "" ? true : item.title.includes(input)
                const isSelect = select == "all" ? true : item.userId == parseInt(select);
                return isInput && isSelect
            })
        )
    }

    useEffect(() => {
        async function fetchData(){
            try{
                // const api = await fetch("https://jsonplaceholder.typicode.com/posts");
                const api = await fetch("/data.json");
                const dataApi = await api.json();
                setData(dataApi);
                setDataFilterSearch(dataApi, sellectValue)
                setArrFilter(createOption1(dataApi))
            }catch{

            }
        } 

        fetchData()

    }, [])

    function createOption(arr){
        const newArr = []
        for(let i of arr){
            const isActive = newArr.includes(i.userId)
            if(!isActive){
                newArr.push(i.userId)
            }
        }
        return newArr;
    }

    function createOption1(arr){
        return [... new Set(arr.map((item) => item.userId))]
    }


    function handleSearch(e){
        setSearchValue(e.target.value)
        search(e.target.value, sellectValue)
    }
    function handleFilter(e){
        setSellectValue(e.target.value)
        search(searchValue, e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='Search...' value={searchValue} onChange={handleSearch}/>
      <select onChange={handleFilter}>
        <option value="all"></option>
        {
            arrFilter.map((item) =>(
                <option key={item} value={item}>User {item}</option>
            ))
        }
      </select>
      {
        dataFilterSearch.map((item, index) => {
            return (
                <div key={index}>
                    <p> <span style={{color : "red"}}>User {item.userId}</span>Title : {item.title}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default memo(PostApi)
