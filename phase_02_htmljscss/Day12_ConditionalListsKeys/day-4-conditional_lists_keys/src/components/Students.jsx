import React from 'react'

const Students = () => {
  const stds = ["Manish","Neha","Priya","Rahul","Nrupul"]

//   const arr1 = [2,3,4,5]
//   const arr2 = arr1.map(el => el*2) = [4,6,8,10]
  return (
    <div>
        {
            stds.map((el , i) => {
                return <div>
                    <p>{i + 1}</p>
                    <h1>{el}</h1>
                </div>
            })
        }
    </div>
  )
}

export default Students
