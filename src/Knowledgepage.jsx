import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import KnowledgeCard from './components/KnowledgeCard';
import SearchInput from './components/SearchInput';
import CreateButton from './components/CreateButton';
import Pagination from './components/Pagination';
import CreateKnowledgeBaseModal from './components/CreateKnowledgeBaseModal';

const KnowledgeBaseDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateNew = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateKnowledgeBase = (data) => {
    console.log('Creating knowledge base:', data);
    // Here you would typically make an API call to create the knowledge base
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    console.log('Search:', e.target.value);
  };

  const handlePageChange = (direction) => {
    console.log('Page change:', direction);
  };

  const handleRowsPerPageChange = (e) => {
    console.log('Rows per page:', e.target.value);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-8">
          {/* Content Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
            <div className="flex items-center space-x-3">
              <SearchInput 
                placeholder="Search..."
                onChange={handleSearch}
              />
              <CreateButton onClick={handleCreateNew} />
            </div>
          </div>

          {/* Knowledge Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Array.from({ length: 6 }, (_, index) => (
              <KnowledgeCard 
                key={index}
                title={`Knowledge Item ${index + 1}`}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
                createdDate="14/07/2025"
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination 
            currentPage={1}
            totalPages={1}
            rowsPerPage={10}
            totalRows={6}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </main>
      </div>
      
      {/* Create Knowledge Base Modal */}
      <CreateKnowledgeBaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateKnowledgeBase}
      />
    </div>
  );
};

export default KnowledgeBaseDashboard;