import React, { useState } from 'react';

function Todo({id, title, description, mongoId, complete, deleteTodo, completeTodo}) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleCompleteTodo = () => {
        completeTodo(mongoId);
        setIsButtonDisabled(true);
    };

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {id+1}
                </th>
                <td className={`px-6 py-4 ${complete ? "line-through":""}}`}>
                    {title}
                </td>
                <td className={`px-6 py-4 ${complete ? "line-through":""}}`}>
                    {description}
                </td>
                <td className="px-6 py-4">
                    {complete ? "Completed" : "Pending"}
                </td>
                <td className="px-6 py-4 flex gap-1">
                    <button onClick={deleteTodo.bind(null, mongoId)} className='py-2 px-4 bg-red-500 text-white rounded'>Delete</button>
                    <button onClick={handleCompleteTodo} className={`py-2 px-4 ${complete ? "bg-green-800":"bg-green-500"} text-white rounded ${isButtonDisabled ? 'disabled' : ''}`} disabled={isButtonDisabled}>Done</button>
                </td>
            </tr>
        </>
    );
}

export default Todo;