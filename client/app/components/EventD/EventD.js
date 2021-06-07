import React from 'react';

export const EventCard = (props) => {
    return <div className="wrapper-users">
        <div className="container">
            <table className="table table-striped table-dark">
                <thead className="thead-dark">
                    <tr>
                        {Object.keys(props).filter(prop => !["_id", "__v"].includes(prop)).map((prop, index) => <div><th key={index}>{prop}</th><tr>{props[prop]}</tr></div>)}
                    </tr>
                </thead>
                <tbody>
                    {/* <p>{JSON.stringify(props)}</p> */}
                </tbody>
            </table>
        </div>
    </div>
}
