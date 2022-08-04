import React from 'react'
import { useState, useEffect } from 'react';

const Covid = () => {

    const [data, setData] = useState([]); // it will be empty array.

    const getCovidData = async () => {
        // const res = await fetch('https://data.covid19india.org/data.json');
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            // console.log(res); 
            const res2 = await res.json(); // basically it requires a promise so we sill take await, if we dont put await it will give display only word promise with error.
            // console.log(res2);
            // console.log(res2[0]); // - show undefined
            console.log(res2.statewise[0]); // we will get only statewise data bcoz its an object, & [0] is an index no of first element of an array object. so we fetch the data from api
            setData(res2.statewise[0]); // As we know if we pass this res.statewise[0] so mujhe pura ka pura pahila state ya data mil rha hain, so basically object main 1st no ko jho data hain uski sare information aa gyi hain.
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData(); // bcoz the above fetch link will also have some limit so we should not go beyond Limit. 
    }, []); // [] - represents it will call this only when page will load for 1st Time.

  return (
    <>
        {/* <section> - tag jisse hum symmentic yaw bolta hain */} 
        <h2> Live COVID-19 CORONAVIRUS TRACKER </h2>
        <ul>
            <li className = "card">
            <div className = "card__main">
                <div className = "card__inner">
                    <p className = "card__name"><span> OUR </span> COUNTRY </p>
                    <p className = "card__total card__small"> INDIA </p>
                </div>
            </div> 
            </li>
        </ul>
        <ul>
            <li className = "card">
            <div className = "card__main">
                <div className = "card__inner">
                    <p className = "card__name"><span> TOTAL</span>RECOVERED</p>
                    {/* <p className = "card__total card__small"> INDIA </p> */}
                    <p className = "card__total card__small"> {data.recovered} </p>
                </div>
            </div> 
            </li>
        </ul>
        <ul>
            <li className = "card">
            <div className = "card__main">
                <div className = "card__inner">
                    <p className = "card__name"><span> TOTAL</span>CONFIRMED</p>
                    {/* <p className = "card__total card__small"> INDIA </p> */}
                    <p className = "card__total card__small"> {data.confirmed} </p>
                </div>
            </div> 
            </li>
        </ul>
        <ul>
            <li className = "card">
            <div className = "card__main">
                <div className = "card__inner">
                    <p className = "card__name"><span> TOTAL</span>DEATH</p>
                    {/* <p className = "card__total card__small"> INDIA </p> */}
                    <p className = "card__total card__small"> {data.deaths} </p>
                </div>
            </div> 
            </li>
        </ul>
        <ul>
            <li className = "card">
            <div className = "card__main">
                <div className = "card__inner">
                    <p className = "card__name"><span> TOTAL</span>ACTIVE</p>
                    {/* <p className = "card__total card__small"> INDIA </p> */}
                    <p className = "card__total card__small"> {data.active} </p>
                </div>
            </div> 
            </li>
        </ul>
        <ul>
            <li className = "card">
            <div className = "card__main">
                <div className = "card__inner">
                    <p className = "card__name"><span> LAST</span>UPDATED</p>
                    {/* <p className = "card__total card__small"> INDIA </p> */}
                    <p className = "card__total card__small"> {data.lastupdatedtime} </p>
                </div>
            </div> 
            </li>
        </ul>
        {/* </section> */}
    </>
  )
}

export default Covid;