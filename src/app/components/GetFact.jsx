import react, {useState, useEffect} from 'react';

export default function GetFact() {
    let [fact, setFact] = useState('');

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(res => setFact(res.fact))
        .catch(err => console.log(err)
        )
    },[])

    return(
        <>
        <div className="container-facts">
        <div className="sub-heading">Did you know...</div>
        <h2>{fact}</h2>
        </div>
        </>
    )

}