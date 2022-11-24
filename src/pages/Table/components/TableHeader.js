import React from 'react';

function TableHeader(props) {
    return (
        <>
        <thead>
            <tr className='border border-black'>
                <td className='border border-black p-4'>Name</td>
                <td className='border border-black p-4'>Occupation</td>
            </tr>    
            </thead>      
        </>
    );
}

export default TableHeader;