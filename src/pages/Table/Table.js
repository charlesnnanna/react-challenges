import React from 'react';
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';

function Table(props) {
    return (
        <>
            <table className='border border-black'>
                <TableHeader/>
                <TableBody deletePerson = {props.deletePerson} persons = {props.persons}/>
            </table>
        </>
       
    );
}

export default Table;