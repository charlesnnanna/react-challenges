import React from 'react';

function TableBody(props) {
    return (
        <>
            <tbody>
            {
                props.persons.map((person, index) => {
                    return (
                    <React.Fragment key = {index}>
                        <tr className='border border-black'>
                            <td className='border border-black p-4'>{person.name}</td>
                            <td className='border border-black p-4'>{person.occupation}</td>
                        </tr>
                        <button onClick={() => {props.deletePerson(index)}} className='border border-black rounded-md p-4 hover:text-white hover:bg-black'>Delete</button>
                    </React.Fragment>
                    )
                })
            }
            </tbody>
        </>
    );
}

export default TableBody;