import propTypes from 'prop-types'

const Greet = function Greet({name, age = 0}){
    return(
        <>
            <h1  className="text-blue-600 text-3xl ">Happy birthday {name}, you are {age} years old now!</h1>
            <h1 className="text-amber-400 text-2xl">Minor: {age < 18? "minor" : "major"}</h1>
        </>
  
    )  
}

export default Greet