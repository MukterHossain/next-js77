'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
//useEffect,

const Meals = () => {
    const [search, setSearch] = useState('a')
    const [meals, setMeals] = useState([])
    const [error, setError] = useState('')

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1//1/search.php?f=${search}`)
            const data = await res.json()
            // console.log(data.meals)
            setMeals(data.meals)
            setError('')

        } catch (error) {
            setError('No Data Found')
        }
    }

    const handler = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value)
    }

    // if (meals.length === 0) {
    //     return <h3>No Data Found........</h3>
    // }

    useEffect(() => {
        loadData()
    }, [loadData, search])
    return (
        <div>
            <div className="mt-10 ">
                <input onChange={handler} type="text" className="p-4 outline-none border-transparent text-slate" placeholder="Search meals" />
                <button onClick={() => loadData()} className="bg-red-400 p-4">Search</button>
                <div className='mt-12 grid grid-cols-3 gap-6'>
                    {
                        meals?.length > 0 && !error && meals?.map((meal) => (
                            <div key={meal?.idMeal} className='border-2 p-4'>
                                <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500}></Image>
                                <h1>{meal.idMeal}</h1>
                                <h1>{meal.strInstructions}</h1>
                            </div>
                        ))
                    }
                    {
                        error && <h2>No Data Found .....</h2>
                    }

                </div>

            </div>
        </div>
    );
};

export default Meals;