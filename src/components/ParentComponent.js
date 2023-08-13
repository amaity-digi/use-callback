import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(30000);

    // const incrememtAge = () => {
    //     setAge(age + 1);
    // }

    const incrememtAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    //after 1st rendering , if I cliked any button , it will re-render both function.
    //because a new incrememtSalary function is created each time the parent component re-render.
    // So How we will tell to react there is no need to create incrememtSalary function when we update the age.
    // The ans is useCallback hook
    //When we are dealing with function we always have to consider referance equality

    // const incrememtSalary = () => {
    //     setSalary(salary + 5000);
    // }

    const incrememtSalary = useCallback(() => {
        setSalary(salary + 5000);
    }, [salary]);

    // In react if we change any dependencies or update any state , it will re-render every component
    // to restric re-render for every component and optimise the perfomence we used useCallback
    // to improve performance we have to restric re-render, to only components that need to re-render.

    //what is useCallback ==> useCallback is a hook that will return a memoized callback function that only change
    // if one of the dependencies has changed.

    // why we need useCallback ==> it is useful passing callbacks to optimized child components that rely
    //on referance equality to prevent unnecessary renders.

    return (
        <div>
            <Title />
            <Count text="age" count={age} />
            <Button handleClick={incrememtAge}>Increment Age</Button>
            <Count text="salary" count={salary} />
            <Button handleClick={incrememtSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent