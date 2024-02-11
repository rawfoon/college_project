import faruque from '../../../assets/teachers/omar_faruk.jpg'

const Cards = () => {
    return (
        <div className='py-20'>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 container mx-auto">
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src="https://www.gdc.gov.bd/midea/featuredimage/featuredimage2023-03-25-17-10-31_641f2b07d57e9.jpg" alt="" className="rounded-[50%] object-center mx-auto rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracki">DR. MD. Mehadi Hasan</h2>
	</div>
	<p className="dark:text-gray-100">Vice-Principal</p>
	<p className="dark:text-gray-100">Gurudayal Govt. College</p>
</div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src="https://www.gdc.gov.bd/midea/featuredimage/featuredimage2023-04-02-02-28-20_6428e844c32de.jpg" alt="" className=" rounded-[50%] object-center mx-auto rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
	
		<h2 className="text-xl font-semibold tracki">A. N. M. Mustakur Rahman</h2>
	</div>
	<p className="dark:text-gray-100">Principal</p>
	<p className="dark:text-gray-100">Gurudayal Govt. College</p>
</div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src="https://i.ibb.co/R3cfBFr/omar-faruk.jpg" alt="" className="rounded-[50%] object-center mx-auto rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracki">Prof. Md. Omar Faroque</h2>
	</div>
	<p className="dark:text-gray-100">Head of the dept.</p>
	<p className="dark:text-gray-100">Mathematics</p>
	<p className="dark:text-gray-100">Gurudayal Govt. College</p>
</div>

            </div>
            
        </div>
    );
};

export default Cards;