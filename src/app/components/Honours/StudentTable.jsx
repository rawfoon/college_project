

const StudentTable = ({props}) => {
    const tableData = props[0]
    // console.log(props[1].year);
    return (
        <div className=''>
            



            <div className="container px-2 mt-14 mx-auto  sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold  leadi">{props[1].year}</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				{/* <col className="w-24" /> */}
			</colgroup>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Roll</th>
					<th className="p-3">Name</th>
					<th className="p-3">Email</th>
					<th className="p-3">Attendece</th>
					<th className="p-3 text-right">Phone</th>
					{/* <th className="p-3">Status</th> */}
				</tr>
			</thead>
			<tbody>
                {
                    tableData.map((item, i)=>{
                        return(
                            <tr key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>{item.Roll}</p>
                            </td>
                            <td className="p-3">
                                <p>{item.first_name+" "+ item.last_name}</p>
                            </td>
                            <td className="p-3">
                                <p>{item.email}</p>
                                
                            </td>
                            <td className="p-3">
                                <p>{item.present}</p>
                                {/* <p className="dark:text-gray-400">Tuesday</p> */}
                            </td>
                            <td className="p-3 text-right">
                                <p>{item.phone}</p>
                            </td>
                            {/* <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td> */}
                        </tr>
                        )
                    })
                } 
				
				{/* <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr> */}
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default StudentTable;