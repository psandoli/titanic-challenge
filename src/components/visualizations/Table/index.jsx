import './styles.css'

function Table({data}) {
    const header = Object.keys(data[0])
    
    return (
        <table className='raw-table'>
            <thead>
                <tr>
                    { header?.map((key) => (
                        <th>
                            { key }
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { data?.map((row) => (
                    <tr>
                        { Object.values(row)?.map((value) => (
                            <td>
                                { value }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
