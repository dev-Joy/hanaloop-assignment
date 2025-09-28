'use client';

import { useCompanies } from '@/hooks/use-companies';
import { Company } from '@/types/company';

export default function CompanyList() {
  const { data, error, status } = useCompanies();

  if (status === 'pending') {
    return (
      <div className='flex justify-center items-center p-8'>
        <p className='text-gray-500'>로딩 중...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className='flex justify-center items-center p-8 bg-red-50 rounded-lg'>
        <p className='text-red-600'>에러가 발생했습니다: {error.message}</p>
      </div>
    );
  }
  return (
    <section>
      <h1 className='my-6 text-3xl font-bold text-gray-800'>Company List</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((company: Company) => (
          <li
            key={company.id}
            className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200 h-full'
          >
            <h3 className='text-lg font-bold text-gray-800'>{company.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
