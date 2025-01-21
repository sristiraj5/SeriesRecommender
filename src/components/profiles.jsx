export const Profiles = () => { // parent component
    return (
        <>
            <h1>Profile Card Challenge</h1> {/* heading */}
            <ProfileCard name="Raj" age={24} greeting={
                <div>
                    <strong>Hi, Raj code till 12 am</strong>
                </div>
            }>
                <p>Hobbies: Analyzing, Chess, Coding, </p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard name="Vishal" age={25} greeting={
                <div>
                    <strong>Hi, Vishal Please learn the basics</strong>
                </div>
            }>
                <p>Hobbies: Helping, Drinking, Coding, </p>
                <button>Contact</button>
            </ProfileCard>
        </>
    );
}

export default Profiles;

function ProfileCard({name, age, greeting, children}) { 
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    )
}
