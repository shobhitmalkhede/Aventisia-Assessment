import React from 'react';

const Pagination = ({ currentPage = 1, totalPages = 1, rowsPerPage = 10, totalRows = 6, onPageChange, onRowsPerPageChange }) => {
  return (
    <footer className="flex items-center justify-between border-t border-gray-200 pt-6 mt-auto">
      <div className="text-sm text-gray-600 font-medium">{totalRows} rows</div>
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <span>Rows per page</span>
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-200 rounded-md py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#4F46E5] cursor-pointer"
              value={rowsPerPage}
              onChange={onRowsPerPageChange}
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">page {currentPage} of {totalPages}</span>
          <div className="flex items-center space-x-1">
            <button 
              className="p-1.5 rounded-md border border-gray-200 text-gray-300 cursor-not-allowed"
              disabled={currentPage === 1}
              onClick={() => onPageChange('first')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
            <button 
              className="p-1.5 rounded-md border border-gray-200 text-gray-300 cursor-not-allowed"
              disabled={currentPage === 1}
              onClick={() => onPageChange('prev')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
            <button 
              className="p-1.5 rounded-md border border-gray-200 text-gray-300 cursor-not-allowed"
              disabled={currentPage === totalPages}
              onClick={() => onPageChange('next')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
            <button 
              className="p-1.5 rounded-md border border-gray-200 text-gray-300 cursor-not-allowed"
              disabled={currentPage === totalPages}
              onClick={() => onPageChange('last')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 5l7 7-7 7M5 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Pagination;
