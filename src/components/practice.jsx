export const Practices = () => {
    const Students = [];
    return (
        <>
        {/* // ways to use AND operator in JSX  when value is false*/}
        {/* <p>{ Students.length && "No Students found"}</p> */}
        {/* 1st */}
        {/* <p>{ Students.length ===0 && "No Students found"}</p> */}
        {/* 2nd */}
        <p>{ !Students.length && "No Students found"}</p>
        {/* 3rd */}
        {/* <p>{ !Boolean(Students.length) && "No Students found"}</p> */}
        <p>Number of students: {Students.length} </p>
        </>
    )
}