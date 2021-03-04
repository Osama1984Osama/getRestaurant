import React, { useState, useEffect } from 'react'
import data from "./data";
function Kategorien_Filter() {
    const [filterOptions, setFilterOptions] = useState({
        categorey: "alles",
        entfernung: "",
        preis: "",
        veggietauglich: ""
    });
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const getEnt = (e)=>{
        const ent = e.target.getAttribute("ent");
        setFilterOptions({...filterOptions, entfernung:ent});

    }
    const getResturants = ()=>{
        const resturants = data.resturant.filter((item)=>{
             console.log('test',filterOptions.entfernung.length >  0 ?  item.entfernung == filterOptions.entfernung : true);
            
            return (
             item.categories.includes(filterOptions.categorey)
             &&
             (filterOptions.entfernung.length >  0 ?  item.entfernung == filterOptions.entfernung : true )
              &&
           (filterOptions.preis.length > 0 ?  item.preis == filterOptions.preis  : true )   && 
            (filterOptions.veggietauglich.length > 0 ?  item.veggietauglich == filterOptions.veggietauglich :true)
            )

        })
        console.log(
            resturants
        );
        setFilteredRestaurant(resturants)

    }
    const filterCatogory = (e)=>{
        setFilterOptions({...filterOptions, categorey : e.target.innerText.toLowerCase()});
        getResturants()

    }

    useEffect(() => {
        getResturants();


    }, [])
    useEffect(() => {
        getResturants();


    }, [filterOptions])


    return (
        <>
        <div className="kategorien_Filter">
            <h2 className="kategorie">Kategorien</h2>
            <button onClick= {filterCatogory} className="alles">Alles</button>
            <button onClick= {filterCatogory} className="burger">Burger</button>
            <button onClick= {filterCatogory}  className="pezza">Pezza / Pasta</button>
            <button onClick= {filterCatogory}  className="asiatisch">Asiatisch</button>
            <button onClick= {filterCatogory}  className="burger">Burger</button>
            <button onClick= {filterCatogory} className="hausmannskost">Hausmannskost</button>
            <button  onClick= {filterCatogory} className="sonstiges">Sonstiges</button>
        </div>
        <div>
             {
             filteredRestaurant.map((restaurant)=>{
                    return (
                        <>
                        <h1>Restaurant Name : {restaurant.name}</h1>
                        <h2>Catogory : {restaurant.categories}</h2>
                        <h3>Entfernung : {restaurant.entfernung}</h3>
                        </>
                    )
             })
             }
        </div>
        <div className="entfernung">
            <h1>Entfernung</h1>
            <button onClick= {getEnt} ent='' className="egal">Egal</button>
            <button onClick= {getEnt} ent='*'  className="weit">Nicht so weit Weg</button>
            <button onClick= {getEnt} ent='***' className="nah">Ganz nah dran</button>
        </div>
     
        </>
    )
}

export default Kategorien_Filter
